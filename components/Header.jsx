"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[70px] bg-[#F7F6F1] sticky top-0 z-40 border-b">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/Logo 1 (2).png" alt="Vaachi Logo" className="h-8 sm:h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#contact" className="font-bold text-lg sm:text-xl text-[#00656D] transition hover:underline">Join Waitlist</a>
        </nav>

        <div className="md:hidden">
         <a
  href="#contact"
  className="inline-flex items-center px-3 py-2 rounded-md bg-[#00656D] text-[#F7F6F1] text-sm font-medium shadow-sm"
>
Join Waitlist          </a>
        </div>
      </div>
    </header>
  );
}
