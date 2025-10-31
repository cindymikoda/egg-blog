/* TODO: 
- Display and format the post page by getting the id of the post that was clicked.
- use "content_html" to style the post content
- 
*/
import Image from "next/image";
import { useEffect, useState } from "react";
import { getPostById } from "@/app/lib/api";
import type { BlogPost } from "@/app/types";

export default function BlogPage({ id }: { id: number }) {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    getPostById(id).then(setPost).catch(console.error);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <article>
      <h1>{post.title}</h1>
      <Image src={post.photo_url} alt={post.title} />
      <p>{post.description}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content_html }} />
    </article>
  );
}
