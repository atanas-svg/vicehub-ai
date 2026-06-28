"use client";

import { useEffect, useState } from "react";
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

type SortOption = "Vice Score" | "Damage" | "Accuracy" | "Speed";

const STORAGE_KEY = "vicehub-saved-weapons";

const filters: WeaponCategory[] = [
  "All",
  "Pistols",
  "SMGs",
  "Rifles",
  "Shotguns",
  "Explosives",
];

const sortOptions: SortOption[] = ["Vice Score", "Damage", "Accuracy", "Speed"];

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
  const [activeSort, setActiveSort] = useState<SortOption>("Vice Score");
  const [search, setSearch] = useState("");
  const [savedWeapons, setSavedWeapons] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        setSavedWeapons(JSON.parse(saved) as string[]);
      } catch {
        setSavedWeapons([]);
      }
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedWeapons));
  }, [savedWeapons, loaded]);

  function toggleSavedWeapon(weaponName: string) {
    setSavedWeapons((current) =>
      current.includes(weaponName)
        ? current.filter((name) => name !== weaponName)
        : [...current, weaponName]
    );
  }

  const visibleWeapons = weapons
    .filter((weapon) => {
      const matchesFilter =
        activeFilter === "All" || weapon.category === activeFilter;

      const searchText =
        `${weapon.name} ${weapon.category} ${weapon.type} ${weapon.bestFor} ${weapon.desc}`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      if (activeSort === "Damage") return b.damage - a.damage;
      if (activeSort === "Accuracy") return b.accuracy - a.accuracy;
      if (activeSort === "Speed") return b.speed - a.speed;

      return b.score - a.score;
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
            Search, filter, sort and save demo weapons by damage, accuracy,
            speed and Vice Score.
          </p>

          <ModuleAskButton prompt="Build me a starter weapon loadout for GTA 6." />
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4">
          <div className="rounded-3xl border border-pink-500/30 bg-pink-500/10 p-5 text-center">
            <p className="text-3xl font-black">{savedWeapons.length}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-pink-300">
              Saved Weapons
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-center">
            <p className="text-3xl font-black">{visibleWeapons.length}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cyan-300">
              Showing
            </p>
          </div>
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

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {sortOptions.map((sort) => (
            <button
              key={sort}
              onClick={() => setActiveSort(sort)}
              className={
                activeSort === sort
                  ? "rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-bold text-cyan-300"
                  : "rounded-full border border-white/10 bg-black/30 px-5 py-2 text-sm font-bold text-gray-400 transition hover:border-cyan-400/50 hover:text-white"
              }
            >
              Sort: {sort}
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Showing {visibleWeapons.length} weapons · Sorted by {activeSort}
        </p>

        {visibleWeapons.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleWeapons.map((weapon) => {
              const saved = savedWeapons.includes(weapon.name);

              return (
                <div
                  key={weapon.name}
                  className={
                    saved
                      ? "rounded-3xl border border-cyan-400/40 bg-cyan-400/[0.06] p-6 transition hover:-translate-y-1 hover:border-cyan-400/70"
                      : "rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.07]"
                  }
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
                    <p className="mt-1 font-bold text-white">
                      {weapon.bestFor}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <StatBar label="Damage" value={weapon.damage} />
                    <StatBar label="Accuracy" value={weapon.accuracy} />
                    <StatBar label="Speed" value={weapon.speed} />
                  </div>

                  <button
                    onClick={() => toggleSavedWeapon(weapon.name)}
                    className={
                      saved
                        ? "mt-6 w-full rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-black text-cyan-300 transition hover:bg-cyan-400/20"
                        : "mt-6 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-black text-gray-300 transition hover:border-pink-500/60 hover:text-white"
                    }
                  >
                    {saved ? "Saved Weapon ✓" : "Save Weapon"}
                  </button>
                </div>
              );
            })}
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