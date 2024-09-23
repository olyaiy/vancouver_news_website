import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Article } from '@/lib/supabase'
import { truncateText } from '@/lib/utils'

interface RelatedArticlesProps {
  articles: Article[]
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <Card key={article.id}>
          <CardContent className="p-4">
            <Link href={`/article/${article.id}`} className="block">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.Title}</h3>
              <p className="text-sm text-gray-600">{truncateText(article.excerpt, 100)}</p>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}