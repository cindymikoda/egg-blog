"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/posts", label: "Posts" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-2 border-b border-gray-200 bg-[var(--color-egg-white)]">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/egg-icon.svg" alt="Egg" width={34} height={34} />
      </Link>

      <div className="flex gap-5">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium relative transition-all duration-300 
        ${
          pathname === link.href
            ? "text-[var(--color-egg-yellow)] after:w-full"
            : "text-[var(--color-dark-gray)] hover:text-[var(--color-egg-yellow)] hover:after:w-full"
        }
        after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:bg-[var(--color-egg-yellow)] after:transition-all after:duration-300 after:w-0
      `}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
