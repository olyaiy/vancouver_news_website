import { fetchArticlesByCategory } from '@/lib/supabase';
import { Article } from '@/lib/supabase';
import Link from 'next/link';

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
        <ul className="space-y-4">
          {articles.map((article: Article) => (
            <li key={article.id} className="border-b pb-4">
              <Link href={`/article/${article.slug}`} className="text-xl font-semibold hover:text-blue-600">
                {article.Title}
              </Link>
              <p className="text-gray-600 mt-2">{article.excerpt}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles found in this category.</p>
      )}
    </div>
  );
}