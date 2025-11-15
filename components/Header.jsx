"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[70px] bg-white  sticky top-0 z-40 border-b">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/Logo.png" alt="Vaachi Logo" className="h-8 sm:h-10 w-auto" />
          <span className="font-bold text-lg sm:text-xl text-[#00656D]">Vaachi Foundation</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#contact" className="text-lg text-[#00656D] transition hover:underline">Contact Us</a>
        </nav>

        <div className="md:hidden">
         <a
  href="#contact"
  className="inline-flex items-center px-3 py-2 rounded-md bg-[#00656D] text-white text-sm font-medium shadow-sm"
>
            Contact US
          </a>
        </div>
      </div>
    </header>
  );
}
