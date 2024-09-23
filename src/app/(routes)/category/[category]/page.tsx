import { fetchArticlesByCategory } from '@/lib/supabase';
import { Article } from '@/lib/supabase';
import { ArticleCard } from '@/components/article-card';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const articles = await fetchArticlesByCategory(category);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Articles in {category}</h1>
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article: Article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p>No articles found in this category.</p>
      )}
    </div>
  );
}