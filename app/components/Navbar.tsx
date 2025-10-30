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
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-[var(--color-egg-white)]">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/egg-icon.svg" alt="Egg" width={32} height={32} />
        <span className="font-semibold text-lg">Egg Posts</span>
      </Link>

      <div className="flex gap-5">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium ${
              pathname === link.href
                ? "text-yellow-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
