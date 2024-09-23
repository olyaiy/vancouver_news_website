import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Newspaper, Search, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Article, fetchMostRecentArticle, fetchArticles } from "@/lib/supabase";

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
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
            <Link className="flex items-center space-x-2" href="/">
              <Newspaper className="h-8 w-8" />
              <span className="font-bold text-2xl">PULSE</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/world" className="text-red-600 hover:text-red-800">World</Link>
            <Link href="/tech" className="hover:text-red-600">Tech</Link>
            <Link href="/culture" className="hover:text-red-600">Culture</Link>
            <Link href="/politics" className="hover:text-red-600">Politics</Link>
            <Link href="/science" className="hover:text-red-600">Science</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <form className="hidden md:block">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 w-[200px] bg-gray-100 focus:bg-white"
                />
              </div>
            </form>
            <Button className="bg-red-600 text-white hover:bg-red-700">Subscribe</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container py-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="lg:col-span-2 overflow-hidden border-0 shadow-lg">
              <div className="relative h-[40vh] min-h-[300px] lg:h-[50vh]">
                {article?.image && (
                  <Image
                    src={article.image}
                    alt={article.Title}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="inline-block bg-red-600 text-xs font-semibold px-2 py-1 mb-2">
                    {article?.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                    {article?.Title}
                  </h1>
                  <p className="text-lg mb-4">{article?.rich_content}</p>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Read More
                  </Button>
                </div>
              </div>
            </Card>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-4">Other Articles</h2>
              {articles.map((item: Article) => (
                <Card key={item.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-bold hover:text-red-600">
                      <Link href={`/news/${item.id}`}>{item.Title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <span className="text-sm font-semibold text-red-600">{item.category}</span>
                    <span className="text-sm text-gray-500">{item.created_at}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 border-t">
        <div className="container py-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-bold text-lg mb-4">About PULSE</h3>
              <p className="text-sm text-gray-600">
                PULSE is your source for hard-hitting journalism and cutting-edge stories that matter.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/world" className="hover:text-red-600">World</Link></li>
                <li><Link href="/tech" className="hover:text-red-600">Tech</Link></li>
                <li><Link href="/culture" className="hover:text-red-600">Culture</Link></li>
                <li><Link href="/politics" className="hover:text-red-600">Politics</Link></li>
                <li><Link href="/science" className="hover:text-red-600">Science</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-red-600">Facebook</Link></li>
                <li><Link href="#" className="hover:text-red-600">Twitter</Link></li>
                <li><Link href="#" className="hover:text-red-600">Instagram</Link></li>
                <li><Link href="#" className="hover:text-red-600">YouTube</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Subscribe</h3>
              <p className="text-sm text-gray-600 mb-2">Get the latest news delivered to your inbox.</p>
              <form className="flex">
                <Input type="email" placeholder="Your email" className="rounded-r-none" />
                <Button type="submit" className="rounded-l-none bg-red-600 hover:bg-red-700">
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
            <p>© 2023 PULSE News. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}