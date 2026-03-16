"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Reserveren", href: "/reservations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#4CFF00]/30 bg-[#063100]">
            <Image
              src="/logo/alegria-logo.jpg"
              alt="Alegria logo"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span
              className="text-3xl md:text-4xl"
              style={{
                fontFamily: "var(--font-fredoka)",
                color: "#4CFF00",
                letterSpacing: "-1.5px",
                textShadow: "0 0 8px rgba(76,255,0,0.25)",
              }}
            >
              Alegria
            </span>

            <span className="mt-1 text-[11px] uppercase tracking-[0.32em] text-[#c1121f]">
              Sinds 1983
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white transition hover:text-[#4CFF00]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/reservations"
            className="rounded-full bg-[#c1121f] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#4CFF00] hover:text-black"
          >
            Reserveer
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#111111] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-white/10 py-3 text-white transition hover:text-[#4CFF00]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/reservations"
              className="mt-4 rounded-full bg-[#c1121f] px-5 py-3 text-center font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Reserveer
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}