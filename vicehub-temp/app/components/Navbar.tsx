"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "AI", href: "/ai" },
  { label: "Map", href: "/map" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Weapons", href: "/weapons" },
  { label: "Money", href: "/money" },
  { label: "Tracker", href: "/tracker" },
  { label: "Saved", href: "/saved" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative z-30 px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={
            pathname === "/"
              ? "text-xl font-black tracking-widest text-pink-400"
              : "text-xl font-black tracking-widest text-white transition hover:text-pink-400"
          }
        >
          VICEHUB AI
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-2 text-sm font-bold text-pink-300 shadow-[0_0_25px_rgba(236,72,153,0.18)]"
                    : "rounded-full px-4 py-2 text-sm font-bold text-gray-300 transition hover:bg-white/5 hover:text-white"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-4 max-w-7xl rounded-3xl border border-white/10 bg-zinc-950/95 p-4 shadow-[0_0_35px_rgba(236,72,153,0.18)] md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    active
                      ? "rounded-2xl border border-pink-500/40 bg-pink-500/10 px-4 py-3 text-sm font-bold text-pink-300"
                      : "rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-bold text-gray-300"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}