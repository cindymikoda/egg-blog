import type {
  BlogPost,
  Category,
  BlogResponse,
  BlogListResponse,
} from "../types";

const API_BASE = "https://api.slingacademy.com/v1/sample-data";

async function fetchFromApi<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_BASE}/${endpoint}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

// Fetch a list of blog posts
export async function getPosts(): Promise<BlogPost[]> {
  const data = await fetchFromApi<BlogListResponse>(
    "blog-posts?offset=0&limit=10"
  );
  return data.blog_posts;
}

// Fetch a single post by ID
export async function getPostById(id: number): Promise<BlogPost> {
  const data = await fetchFromApi<BlogResponse>(`blog-posts/${id}`);
  return data.blog;
}

// Fetch categories
export async function getCategories(): Promise<Category[]> {
  const data = await fetchFromApi<{
    success: boolean;
    blog_categories: Category[];
  }>("blog-categories");
  return data.blog_categories;
}
