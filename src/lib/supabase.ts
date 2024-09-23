import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);


// Article interface
export interface Article {
    id: string; // UUID is a string
    created_at: string;
    Title: string;
    slug: string;
    rich_content: string;
    excerpt: string;
    author: string | null;
    published_on: string;
    updated_on: string;
    is_published: boolean;
    category: string;
    meta_title: string | null;
    meta_description: string | null;
    keywords: string[] | null;
    image: string | null;
    og_image_url: string | null;
    is_featured: boolean;
    sources: string[] | null;
}



// Fetch article by id
export async function fetchArticle(id: string) {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('id', id)
      .single();
  
    if (error || !data) {
      console.error('Error fetching article:', error);
      throw new Error('Failed to fetch article');
    }
  
    return data as Article;
  }  


//   Fetch most recent article (SINGULAR)
export async function fetchMostRecentArticle() {
    const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

    if (error || !data) {
        console.error('Error fetching the most recent article:', error);
        throw new Error('Failed to fetch the most recent article');
    }

    return data as Article;
}
  
// Fetch all articles (PLURAL)
export async function fetchArticles() {
    const { data, error } = await supabase
      .from('articles')
      .select('*');
  
    if (error) {
      console.error('Error fetching articles:', error);
      return [];
    }
  
    console.log('Fetched articles:', data); // Log the fetched data
    return data as Article[];
  }

// Fetch most recent X articles
export async function fetchRecentArticles(limit: number = 5) {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);
  
    if (error) {
      console.error('Error fetching recent articles:', error);
      return [];
    }
  
    return data as Article[];
  }
  


// Create a new article
export async function createArticle(article: Omit<Article, 'id' | 'created_at' | 'updated_on'>) {
    const { data, error } = await supabase
        .from('articles')
        .insert([article])
        .single();

    if (error || !data) {
        console.error('Error creating article:', error);
        throw new Error('Failed to create article');
    }

    return data as Article;
}
