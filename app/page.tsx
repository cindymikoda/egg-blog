import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <Link href="/posts" className="w-full max-w-[90vw]">
        <div className="flex flex-col items-center justify-center w-full max-w-[90vw]">
          <h1 className="flex items-center justify-center font-extrabold tracking-tight text-5xl sm:text-7xl lg:text-[10vw] text-center">
            <span className="text-[var(--color-egg-yellow)]">Egg</span>
            <Image
              src="/egg-icon.svg"
              alt="Egg Icon"
              width={80}
              height={80}
              className="inline-block mx-3 translate-y-[2px] w-[60px] sm:w-[100px] lg:w-[15vw]"
              priority
            />
            <span className="text-[var(--color-dark-gray)]">Posts</span>
          </h1>

          <p className="mt-3 text-gray-600 text-lg py-4 tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em]">
            Posts for all kinds of people!
          </p>
        </div>
      </Link>
    </section>
  );
}
