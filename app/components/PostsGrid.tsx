import PostCard from "./PostCard";
import type { BlogPost } from "@/app/types";

export default function PostsGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
