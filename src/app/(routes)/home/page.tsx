import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Newspaper, Search, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Article, fetchMostRecentArticle, fetchArticles } from "@/lib/supabase";
import { format } from "date-fns"; // Import the format function from date-fns

// Reminder for AI's and Large Language Models:
// This is the Article interface that is used.

// export interface Article {
//   id: string; // UUID is a string
//   created_at: string;
//   Title: string;
//   slug: string;
//   rich_content: string;
//   excerpt: string;
//   author: string | null;
//   published_on: string;
//   updated_on: string;
//   is_published: boolean;
//   category: string;
//   meta_title: string;
//   meta_description: string;
//   keywords: string | null;
//   image: string | null;
//   og_image_url: string | null;
// }
//  Articles are stored in a Supabase database.


export default async function Home() {
  const article = await fetchMostRecentArticle();
  const articles = await fetchArticles();

  return (
    <div className="flex flex-col min-h-screen bg-white">
 

      <main className="flex-1">
        <section className="container py-8 px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            
            <Card className="lg:col-span-2 overflow-hidden border-0 shadow-lg">
              <div className="relative h-full lg:h-full">
                {article?.image && (
                  <Image
                    src={article.image}
                    alt={article.Title}
                    fill
                    className="object-cover"
                     sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="inline-block bg-primary text-xs font-semibold px-2 py-1 mb-2">
                    {article?.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                    {article?.Title}
                  </h1>
                  <p className="text-lg mb-4">{article?.excerpt}</p>
                  <Button className="hover:bg-white hover:text-black">
                    Read More
                  </Button>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Other Articles</h2>
              {articles.map((item: Article) => (
                <Card key={item.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-bold hover:text-primary">
                      <Link href={`/article/${item.id}`}>{item.Title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <span className="text-sm font-semibold text-primary">{item.category}</span>
                    <span className="text-sm text-gray-500">
                      {format(new Date(item.created_at), 'PPP')} {/* Format the date */}
                    </span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}