import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Newspaper, Search, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Article, fetchMostRecentArticle, fetchArticles, fetchRecentArticles } from "@/lib/supabase";
import { formatDate, truncateText } from "@/lib/utils";
import { ArticleList } from "@/components/article-list";
import { ArticleCard } from "@/components/article-card";


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
          <div className="grid gap-8 lg:grid-cols-3 flex-col">
            
            {/* Featured article card */}
            <div className="lg:col-span-2 gap-4">

                <Card className="overflow-hidden border-0 shadow-lg self-start aspect-video relative">
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
                    
                    <ArticleCard
                    article={article}
                    />

                    <ArticleCard
                    article={article}
                    />
                </div>

            </div>

           

            

           
            {/* Featured article list */}
            <ArticleList 
              articles={articles} 
              title="Featured Articles"
            />
          </div>


        </section>
      </main>

    </div>
  );
}