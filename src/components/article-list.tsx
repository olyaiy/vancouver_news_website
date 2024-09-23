import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Article } from "@/lib/supabase";
import { formatDate, truncateText } from "@/lib/utils";

interface ArticleListProps {
  articles: Article[];
  title: string;
}

export function ArticleList({ articles, title }: ArticleListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">{title}</h2>

      {articles.map((article) => (
        <Card key={article.id} className="border-0 shadow-md hover:shadow-lg transition-shadow group">
          <Link href={`/article/${article.id}`} className="block h-full">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-lg font-bold text-black group-hover:text-red-600 transition-colors duration-200">
                {article.Title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 pb-2">
              <p className="text-sm text-gray-600">
                {truncateText(article.excerpt, 130)}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-2 flex justify-between">
              <span className="text-sm font-semibold text-primary">{article.category}</span>
              <span className="text-sm text-gray-500">{formatDate(article.published_on)}</span>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  );
}