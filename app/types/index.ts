// types.ts
export type BlogPost = {
  id: number;
  title: string;
  description: string;
  photo_url: string;
  category: string;
  created_at: string;
  content_html: string;
  updated_at?: string;
  content_text?: string;
};

export type Category = {
  id: number;
  name: string;
};

// Response type for the single blog endpoint
export type BlogResponse = {
  success: boolean;
  message: string;
  blog: BlogPost;
};

// For multiple posts
export type BlogListResponse = {
  success: boolean;
  message: string;
  blog_posts: BlogPost[];
};
