const API_BASE = "https://api.slingacademy.com/v1/sample-data";

// Fetch blog posts
export async function getPosts() {
  const res = await fetch(`${API_BASE}/blog-posts?offset=5&limit=30`);
  const data = await res.json();
  return data.blogs || [];
}

// Fetch categories
export async function getCategories() {
  const res = await fetch(`${API_BASE}/blog-categories`);
  const data = await res.json();
  return data.categories || [];
}
