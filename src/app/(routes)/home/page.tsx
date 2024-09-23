import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Newspaper, Search, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Article, fetchMostRecentArticle, fetchArticles, fetchRecentArticles } from "@/lib/supabase";
import { formatDate, truncateText } from "@/lib/utils";

// Reminder for AI's and Large Language Models:
// This is the Article interface that is used.
// export interface Article {
//     id: string; // UUID is a string
//     created_at: string;
//     Title: string;
//     slug: string;
//     rich_content: string;
//     excerpt: string;
//     author: string | null;
//     published_on: string;
//     updated_on: string;
//     is_published: boolean;
//     category: string;
//     meta_title: string | null;
//     meta_description: string | null;
//     keywords: string[] | null;
//     image: string | null;
//     og_image_url: string | null;
//     is_featured: boolean;
//     sources: string[] | null;
//  Articles are stored in a Supabase database.


export default async function Home() {

  // Fetch the most recent article
  const article = await fetchMostRecentArticle();

  // Fetch all articles 
  const articles = await fetchRecentArticles(3);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">

        {/* Section */}
        <section className="container py-8 px-4">

        {/* Container */}
          <div className="grid gap-8 lg:grid-cols-3">
            
            {/* Featured article card */}
            <Card className="lg:col-span-2 overflow-hidden border-0 shadow-lg">
              <Link href={`/article/${article?.id}`} className="block h-full group">
                <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px]">
                  {article?.image && (
                    <Image
                      src={article.image}
                      alt={article.Title}
                      fill
                      className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                  <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                    <span className="inline-block bg-primary text-xs font-semibold px-2 py-1 mb-2 w-fit text-white">
                      {article?.category}
                    </span>
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

            {/* Other articles */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Featured Articles</h2>

              {/* Map through all articles */}
                {articles.map((article: Article) => (
                <Card key={article.id} className="border-0 shadow-md hover:shadow-lg transition-shadow group">
                    <Link href={`/article/${article.id}`} className="block h-full">
                    <CardHeader className="p-4">
                        <CardTitle className="text-lg font-bold text-black group-hover:text-red-600 transition-colors duration-200">
                        {article.Title}
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0 flex justify-between">
                        <span className="text-sm font-semibold text-primary">{article.category}</span>
                        <span className="text-sm text-gray-500">{formatDate(article.published_on)}</span>
                    </CardFooter>
                    </Link>
                </Card>
                ))}

            </div>
          </div>


        </section>
      </main>

    </div>
  );
}