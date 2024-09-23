import { notFound } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Metadata } from 'next'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Clock, Calendar, User } from 'lucide-react'
import { fetchArticle } from '@/lib/supabase'
import { Article } from '@/lib/supabase'


export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = await fetchArticle(params.id)
  
  return {
    title: article.meta_title || article.Title,
    description: article.meta_description || article.excerpt,
    openGraph: {
      images: [{ url: article.og_image_url || article.image || '/placeholder.svg' }],
    },
  }
}

export default async function ArticlePage({ params }: { params: { id: string } }) {
  let article: Article
  
  try {
    article = await fetchArticle(params.id)
  } catch (error) {
    notFound()
  }

  const publishDate = new Date(article.published_on)
  const updateDate = new Date(article.updated_on)

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <CardHeader className="p-0">
          {article.image && (
            <div className="relative w-full h-[40vh]">
              <Image
                src={article.image}
                alt={article.Title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4">
            <Link href={`/category/${article.category}`} className="text-sm font-semibold text-red-600 hover:text-red-800">
              {article.category}
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.Title}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <Avatar>
              <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${article.author}`} />
              <AvatarFallback>{article.author?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{article.author}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="mr-1 h-3 w-3" />
                <time dateTime={article.published_on}>
                  {format(publishDate, 'MMMM d, yyyy')}
                </time>
                <Clock className="ml-2 mr-1 h-3 w-3" />
                <span>{format(publishDate, 'h:mm a')}</span>
              </div>
            </div>
          </div>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.rich_content }} />
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-4 p-6 bg-gray-50">
          <div className="flex items-center space-x-4">
            <User className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-600">Last updated by {article.author} on {format(updateDate, 'MMMM d, yyyy')}</span>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Facebook className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Twitter className="h-4 w-4 mr-2" />
              Tweet
            </Button>
            <Button variant="outline" size="sm">
              <Linkedin className="h-4 w-4 mr-2" />
              Post
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}