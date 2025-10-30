import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      {/* ====== Logo + Title ====== */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Image
          src="/egg-icon.svg"
          alt="Egg Icon"
          width={120}
          height={120}
          priority
        />

        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
          <span className="text-yellow-500">Egg</span>{" "}
          <span className="text-gray-900">Posts</span>
        </h1>
      </div>

      {/* ====== Subtitle ====== */}
      <p className="mt-3 text-gray-600 text-lg sm:text-xl">
        Posts for all kinds of people 🍳
      </p>

      {/* ====== Navigation Links ====== */}
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        <Link
          href="/posts"
          className="px-6 py-2 bg-yellow-400 text-gray-900 font-medium rounded-full hover:bg-yellow-300 transition"
        >
          Posts
        </Link>

        <Link
          href="/about"
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition"
        >
          About
        </Link>
      </div>
    </section>
  );
}
