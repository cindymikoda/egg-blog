import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      {/* ====== Logo + Title ====== */}
      <div className="flex items-center justify-center gap-3">
        <h1
          className="flex items-center font-extrabold tracking-tight 
                       text-5xl sm:text-7xl lg:text-[10vw]"
        >
          {/* EGG */}
          <span className="text-[var(--color-egg-yellow)]">Egg</span>

          {/* Egg icon in the middle */}
          <Image
            src="/egg-icon.svg"
            alt="Egg Icon"
            width={80}
            height={80}
            className="inline-block mx-3 align-middle
                       w-[60px] sm:w-[100px] lg:w-[15vw]"
            priority
          />

          {/* POSTS */}
          <span className="text-[var(--color-dark-gray)]">Posts</span>
        </h1>
      </div>

      {/* ====== Subtitle ====== */}
      <p className="mt-3 text-gray-600 text-lg sm:text-xl">
        Posts for all kinds of people!
      </p>
    </section>
  );
}
