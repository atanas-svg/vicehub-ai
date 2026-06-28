"use client";

import { useState } from "react";
import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import ModuleAskButton from "../components/ModuleAskButton";
import Navbar from "../components/Navbar";

type WeaponCategory =
  | "All"
  | "Pistols"
  | "SMGs"
  | "Rifles"
  | "Shotguns"
  | "Explosives";

const filters: WeaponCategory[] = [
  "All",
  "Pistols",
  "SMGs",
  "Rifles",
  "Shotguns",
  "Explosives",
];

const weapons = [
  {
    name: "Vice Pistol",
    category: "Pistols",
    type: "Sidearm",
    icon: "🔫",
    damage: 58,
    accuracy: 82,
    speed: 88,
    score: 8.4,
    bestFor: "Backup weapon",
    desc: "A clean starter sidearm for early missions, backup shots and low-risk fights.",
  },
  {
    name: "Neon SMG",
    category: "SMGs",
    type: "Close Range",
    icon: "⚡",
    damage: 66,
    accuracy: 72,
    speed: 94,
    score: 8.8,
    bestFor: "Close fights",
    desc: "Fast fire rate and strong mobility for alleys, vehicles and quick combat.",
  },
  {
    name: "Coastal Rifle",
    category: "Rifles",
    type: "All-round Rifle",
    icon: "🎯",
    damage: 82,
    accuracy: 86,
    speed: 72,
    score: 9.2,
    bestFor: "Main missions",
    desc: "The best demo all-round weapon for missions, range and reliable damage.",
  },
  {
    name: "Harbor Shotgun",
    category: "Shotguns",
    type: "Heavy Close Range",
    icon: "💥",
    damage: 91,
    accuracy: 54,
    speed: 61,
    score: 8.3,
    bestFor: "Room clearing",
    desc: "High damage at close range, perfect for tight interiors and aggressive fights.",
  },
  {
    name: "Road Flare Launcher",
    category: "Explosives",
    type: "Vehicle Counter",
    icon: "🚀",
    damage: 96,
    accuracy: 63,
    speed: 48,
    score: 8.6,
    bestFor: "Vehicles",
    desc: "A late-game explosive option for stopping vehicles and heavy enemies.",
  },
  {
    name: "Compact Rifle",
    category: "Rifles",
    type: "Light Rifle",
    icon: "🟣",
    damage: 74,
    accuracy: 78,
    speed: 84,
    score: 8.7,
    bestFor: "Balanced combat",
    desc: "A lighter rifle concept with good speed, control and reliable mission use.",
  },
] as const;

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs text-gray-400">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-400"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function WeaponsPage() {
  const [activeFilter, setActiveFilter] = useState<WeaponCategory>("All");
  const [search, setSearch] = useState("");

  const visibleWeapons = weapons.filter((weapon) => {
    const matchesFilter =
      activeFilter === "All" || weapon.category === activeFilter;

    const searchText =
      `${weapon.name} ${weapon.category} ${weapon.type} ${weapon.bestFor} ${weapon.desc}`.toLowerCase();

    const matchesSearch = searchText.includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-pink-400">
            Weapons Database
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Build your perfect loadout.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Search and filter demo weapons by damage, accuracy, speed, type and
            Vice Score.
          </p>

          <ModuleAskButton prompt="Build me a starter weapon loadout for GTA 6." />
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-3">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search weapons..."
              className="flex-1 rounded-2xl bg-black/40 px-5 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500/40"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-bold text-gray-300 transition hover:border-pink-500/60 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "rounded-full bg-pink-600 px-5 py-2 text-sm font-bold text-white shadow-[0_0_25px_rgba(236,72,153,0.35)]"
                  : "rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm font-bold text-gray-300 transition hover:border-pink-500/60 hover:text-white"
              }
            >
              {filter}
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Showing {visibleWeapons.length} weapons
        </p>

        {visibleWeapons.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleWeapons.map((weapon) => (
              <div
                key={weapon.name}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-500/30 bg-pink-500/10 text-3xl">
                      {weapon.icon}
                    </div>

                    <div>
                      <p className="text-sm text-cyan-300">{weapon.type}</p>
                      <h2 className="text-2xl font-black">{weapon.name}</h2>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-pink-500/30 bg-pink-500/10 px-3 py-2 text-center">
                    <p className="text-xs text-pink-300">Vice Score</p>
                    <p className="text-xl font-black text-white">
                      {weapon.score}
                    </p>
                  </div>
                </div>

                <p className="mb-5 text-sm text-gray-400">{weapon.desc}</p>

                <div className="mb-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3">
                  <p className="text-xs text-cyan-300">Best for</p>
                  <p className="mt-1 font-bold text-white">{weapon.bestFor}</p>
                </div>

                <div className="space-y-4">
                  <StatBar label="Damage" value={weapon.damage} />
                  <StatBar label="Accuracy" value={weapon.accuracy} />
                  <StatBar label="Speed" value={weapon.speed} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
            <p className="text-4xl">🔍</p>
            <h3 className="mt-4 text-2xl font-black">No weapons found</h3>
            <p className="mt-3 text-sm text-gray-400">
              Try another search word or switch the filter back to All.
            </p>
          </div>
        )}
      </section>

      <AskViceChat />
      <Footer />
    </main>
  );
}