import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Article, fetchMostRecentArticle, fetchRecentArticles } from "@/lib/supabase";
import { truncateText } from "@/lib/utils";
import { ArticleList } from "@/components/article-list";
import { ArticleCard } from "@/components/article-card";

export async function generateMetadata(): Promise<Metadata> {
  const article = await fetchMostRecentArticle();
  
  return {
    title: 'Home | Your Blog Name',
    description: article?.excerpt || 'Latest articles and news from Your Blog Name',
    openGraph: {
      title: 'Home | Your Blog Name',
      description: article?.excerpt || 'Latest articles and news from Your Blog Name',
      images: article?.image ? [{ url: article.image }] : [],
    },
  };
}

function generateStructuredData(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.Title,
    image: article.image,
    datePublished: article.published_on,
    dateModified: article.updated_on,
    author: {
      '@type': 'Person',
      name: article.author || 'Anonymous',
    },
  };
}

export default async function Home() {
  const article = await fetchMostRecentArticle();
  const articles = await fetchRecentArticles(3);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="container py-8 px-4">
          <div className="grid gap-8 lg:grid-cols-3 flex-col">
            <div className="lg:col-span-2 gap-4">
              <Card className="overflow-hidden border-0 shadow-lg self-start aspect-video relative">
                <Link href={`/article/${article?.id}`} className="block h-full group">
                  <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px]">
                    {article?.image && (
                      <Image
                        src={article.image}
                        alt={article.Title}
                        fill
                        priority
                        className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                    <span className="absolute top-4 right-4 inline-block bg-primary text-xs font-semibold px-2 py-1 text-white rounded">
                      {article?.category}
                    </span>
                    <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                      <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 leading-tight text-white">
                        {article?.Title}
                      </h1>
                      <p className="text-sm sm:text-base lg:text-lg mb-4 text-white/90">{truncateText(article?.excerpt || '', 150)}</p>
                      <Button className="w-fit hover:bg-white hover:text-black">
                        Read More
                      </Button>
                    </div>
                  </div>
                </Link>
              </Card>

              <div className="flex flex-row w-full h-full gap-4 mt-4">
                {articles.slice(0, 2).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            <ArticleList 
              articles={articles} 
              title="Featured Articles"
            />
          </div>
        </section>
      </main>

      {article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData(article)) }}
        />
      )}
    </div>
  );
}



