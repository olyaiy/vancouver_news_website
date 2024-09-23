import { ArticleList } from '@/components/article-list';
import { searchArticles } from '@/lib/supabase';


export default async function SearchPage({
  searchParams
}: {
  searchParams: { q: string }
}) {
  const query = searchParams.q;
  const articles = await searchArticles(query);

  return (
    <div className="container py-8">
      <ArticleList articles={articles} title={`Search Results for "${query}"`} />
    </div>
  );
}