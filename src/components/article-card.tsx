import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Article } from "@/lib/supabase";
import { truncateText } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg self-start aspect-[4/3] relative w-full">
      <Link href={`/article/${article.id}`} className="block h-full group">
        <div className="relative w-full h-full min-h-[200px]">
          {article.image && (
            <Image
              src={article.image}
              alt={article.Title}
              fill
              className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
          <span className="absolute top-2 right-2 inline-block bg-primary text-xs font-semibold px-2 py-1 text-white rounded">
            {article.category}
          </span>
          <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
            <h2 className="text-sm sm:text-lg md:text-xl font-bold mb-2 leading-tight text-white mb-2">
              {article.Title}
            </h2>
            <Button className="w-fit hover:bg-white hover:text-black text-xs sm:text-sm">
              Read More
            </Button>
          </div>
        </div>
      </Link>
    </Card>
  );
}