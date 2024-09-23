import { notFound } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Metadata } from 'next'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Clock, Calendar, User } from 'lucide-react'
import { fetchArticle, fetchRecentArticles } from '@/lib/supabase'
import { Article } from '@/lib/supabase'
import { ArticleList } from '@/components/article-list'
import { Button } from '@/components/ui/button'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = await fetchArticle(params.id)

  return {
    title: article.meta_title || `${article.Title} | Your Blog Name`,
    description: article.meta_description || article.excerpt,
    openGraph: {
      title: article.meta_title || article.Title,
      description: article.meta_description || article.excerpt,
      type: 'article',
      publishedTime: article.published_on,
      modifiedTime: article.updated_on,
      authors: [article.author || 'Anonymous'],
      images: [{ url: article.og_image_url || article.image || '/placeholder.svg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.meta_title || article.Title,
      description: article.meta_description || article.excerpt,
      images: [article.og_image_url || article.image || '/placeholder.svg'],
    },
  }
}

function generateStructuredData(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.Title,
    image: article.image || article.og_image_url,
    datePublished: article.published_on,
    dateModified: article.updated_on,
    author: {
      '@type': 'Person',
      name: article.author || 'Anonymous',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Your Blog Name',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yourblog.com/logo.png', // Replace with your actual logo URL
      }
    },
    description: article.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://yourblog.com/article/${article.id}`, // Replace with your actual URL structure
    },
  }
}

export default async function ArticlePage({ params }: { params: { id: string } }) {
  let article: Article
  let relatedArticles: Article[]

  try {
    article = await fetchArticle(params.id)
    relatedArticles = await fetchRecentArticles(3)
  } catch (error) {
    console.error('Error fetching article:', error)
    notFound()
  }
  
  const publishDate = new Date(article.published_on)
  const updateDate = new Date(article.updated_on)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData(article)) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{article.Title}</h1>
            <div className="flex items-center space-x-4 mb-6">
              <Avatar>
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${article.author}`} alt={article.author || 'Author'} />
                <AvatarFallback>{article.author?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {/* {article.author} */}
                  Pulse News Team
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="mr-1 h-4 w-4" />
                  <time dateTime={article.published_on}>
                    {format(publishDate, 'MMMM d, yyyy')}
                  </time>
                  <Clock className="ml-4 mr-1 h-4 w-4" />
                  <span>{format(publishDate, 'h:mm a')}</span>
                </div>
              </div>
            </div>
            <Link href={`/category/${article.category}`} className="inline-block mb-6 text-sm font-semibold text-primary-500 hover:text-primary-700">
              {article.category}
            </Link>
            {article.image && (
              <div className="relative w-full h-[50vh] mb-6">
                <Image
                  src={article.image}
                  alt={article.Title}
                  fill
                  priority
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="prose lg:prose-xl max-w-none mb-8" dangerouslySetInnerHTML={{ __html: article.rich_content }} />
            <div className="flex items-center justify-between py-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <User className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  Last updated by Pulse News Team on {format(updateDate, 'MMMM d, yyyy')}
                </span>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" aria-label="Share on Facebook">
                  <Facebook className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm" aria-label="Tweet this article">
                  <Twitter className="h-4 w-4 mr-2" />
                  Tweet
                </Button>
                <Button variant="outline" size="sm" aria-label="Share on LinkedIn">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Post
                </Button>
              </div>
            </div>
          </article>
          <aside className="lg:w-1/3">
            <div className="sticky top-20">
              <ArticleList 
                articles={relatedArticles} 
                title="Related Articles"
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}