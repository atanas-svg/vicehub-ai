"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import ModuleAskButton from "../components/ModuleAskButton";
import Navbar from "../components/Navbar";

const searchItems = [
  {
    title: "Ask Vice AI",
    href: "/ai",
    category: "AI",
    icon: "🤖",
    keywords: "ai chat assistant money vehicles weapons map tracker help plan",
    desc: "Open the AI command center and ask for GTA 6 plans.",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    category: "Control",
    icon: "📊",
    keywords: "dashboard status overview saved progress control center",
    desc: "View saved items, tracker progress and quick module links.",
  },
  {
    title: "Interactive Map",
    href: "/map",
    category: "Map",
    icon: "🗺️",
    keywords: "map pins missions collectibles vehicle spawns weapons safehouse secrets",
    desc: "Explore demo map pins by mission, vehicle, weapon and safehouse.",
  },
  {
    title: "Vehicles",
    href: "/vehicles",
    category: "Vehicles",
    icon: "🚗",
    keywords: "cars bikes boats rides speed handling save vehicle",
    desc: "Search, filter, sort and save demo vehicles.",
  },
  {
    title: "Weapons",
    href: "/weapons",
    category: "Weapons",
    icon: "🔫",
    keywords: "guns rifles pistols smg shotgun explosives loadout weapons",
    desc: "Search, filter, sort and save demo weapons.",
  },
  {
    title: "Money Guide",
    href: "/money",
    category: "Money",
    icon: "💸",
    keywords: "money cash earn rich profit strategy jobs upgrades",
    desc: "Find demo money strategies for early and late game.",
  },
  {
    title: "100% Tracker",
    href: "/tracker",
    category: "Progress",
    icon: "✅",
    keywords: "tracker 100 completion progress checklist story collectibles achievements",
    desc: "Track demo story, collectibles, vehicles, weapons and activities.",
  },
  {
    title: "Saved Hub",
    href: "/saved",
    category: "Saved",
    icon: "⭐",
    keywords: "saved favorites saved hub local storage pins rides weapons money",
    desc: "View saved map pins, rides, weapons and money strategies.",
  },
  {
    title: "Roadmap",
    href: "/roadmap",
    category: "Roadmap",
    icon: "🌴",
    keywords: "roadmap future planned next updates live beta vision",
    desc: "See what is live now, what is planned next and future ideas.",
  },
  {
    title: "Disclaimer",
    href: "/disclaimer",
    category: "Legal",
    icon: "⚖️",
    keywords: "disclaimer legal official rockstar copyright take-two fan made",
    desc: "Read the fan-made project disclaimer and official status.",
  },
];

const categories = [
  "All",
  "AI",
  "Control",
  "Map",
  "Vehicles",
  "Weapons",
  "Money",
  "Progress",
  "Saved",
  "Roadmap",
  "Legal",
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredItems = useMemo(() => {
    const cleanQuery = query.toLowerCase().trim();

    return searchItems.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;

      const searchableText = `${item.title} ${item.category} ${item.keywords} ${item.desc}`.toLowerCase();

      const matchesQuery =
        cleanQuery.length === 0 || searchableText.includes(cleanQuery);

      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-cyan-300">
            Search Hub
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Find anything fast.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Search through ViceHub AI modules, dashboard, map, vehicles,
            weapons, money guides, tracker, saved items, roadmap and legal info.
          </p>

          <ModuleAskButton prompt="Help me find the right ViceHub module for what I need." />
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search: money, weapons, dashboard, saved, roadmap..."
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-sm text-white outline-none placeholder:text-gray-500 focus:border-pink-500/60"
          />

          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={
                  category === item
                    ? "rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300"
                    : "rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-bold text-gray-300 transition hover:border-pink-500/60 hover:text-white"
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            Results:{" "}
            <span className="font-black text-white">{filteredItems.length}</span>
          </p>

          {query.length > 0 && (
            <button
              onClick={() => setQuery("")}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              Clear search
            </button>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-500/30 bg-pink-500/10 text-3xl">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm text-cyan-300">{item.category}</p>
                    <h2 className="text-2xl font-black">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <span className="text-xl text-pink-400 transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="mt-10 rounded-3xl border border-pink-500/30 bg-pink-500/10 p-8 text-center">
            <h2 className="text-3xl font-black">No results found.</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400">
              Try searching for money, weapons, vehicles, dashboard, saved,
              roadmap, tracker or map.
            </p>
          </div>
        )}
      </section>

      <AskViceChat />
      <Footer />
    </main>
  );
}