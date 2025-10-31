import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/app/types";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={post.photo_url}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-[var(--color-egg-yellow)] text-[var(--color-dark-gray)] rounded-full mb-2">
          {post.category}
        </span>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {post.description}
        </p>

        <Link
          href={`/posts/${post.id}`}
          className="inline-block text-sm font-medium text-yellow-600 hover:text-yellow-700 hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
