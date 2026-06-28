"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "AI", href: "/ai" },
  { label: "Map", href: "/map" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Weapons", href: "/weapons" },
  { label: "Tracker", href: "/tracker" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-20 px-8 py-6">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-black tracking-widest text-white"
          onClick={() => setOpen(false)}
        >
          VICEHUB AI
        </Link>

        <div className="hidden gap-8 text-gray-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-pink-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 px-4 py-2 text-white md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/10 bg-zinc-950/95 p-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/10 hover:text-pink-400"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}