"use client";

import { useEffect, useState } from "react";
import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import ModuleAskButton from "../components/ModuleAskButton";
import Navbar from "../components/Navbar";

type VehicleCategory = "All" | "Cars" | "Bikes" | "Boats" | "Special";
type SortOption = "Vice Score" | "Speed" | "Handling" | "Value";

const STORAGE_KEY = "vicehub-saved-vehicles";

const filters: VehicleCategory[] = ["All", "Cars", "Bikes", "Boats", "Special"];
const sortOptions: SortOption[] = ["Vice Score", "Speed", "Handling", "Value"];

const vehicles = [
  {
    name: "Neon Vortex",
    category: "Cars",
    type: "Sports Car",
    icon: "🏎️",
    speed: 92,
    handling: 84,
    value: 78,
    score: 9.1,
    bestFor: "Fast city driving",
    desc: "A fast demo sports car concept built for speed, style and early-game flex.",
  },
  {
    name: "Palm Runner",
    category: "Bikes",
    type: "Motorbike",
    icon: "🏍️",
    speed: 86,
    handling: 95,
    value: 81,
    score: 9.3,
    bestFor: "Traffic shortcuts",
    desc: "A clean bike choice for quick movement, tight streets and fast escapes.",
  },
  {
    name: "Coast Cruiser",
    category: "Boats",
    type: "Boat",
    icon: "🚤",
    speed: 74,
    handling: 69,
    value: 72,
    score: 8.1,
    bestFor: "Water routes",
    desc: "Useful for coastal routes, water missions and fast travel around the map.",
  },
  {
    name: "Vice Sentinel",
    category: "Cars",
    type: "Luxury Sedan",
    icon: "🚘",
    speed: 78,
    handling: 82,
    value: 88,
    score: 8.7,
    bestFor: "Balanced driving",
    desc: "A stylish and balanced vehicle with good comfort, value and control.",
  },
  {
    name: "Storm Chaser",
    category: "Special",
    type: "Off-road",
    icon: "🚙",
    speed: 76,
    handling: 80,
    value: 84,
    score: 8.9,
    bestFor: "Rough terrain",
    desc: "Built for dirt roads, hidden paths and missions outside the city.",
  },
  {
    name: "Harbor Mule",
    category: "Special",
    type: "Utility",
    icon: "🚚",
    speed: 58,
    handling: 61,
    value: 90,
    score: 8.0,
    bestFor: "Utility jobs",
    desc: "Not the fastest, but useful for jobs, cargo routes and mission utility.",
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

export default function VehiclesPage() {
  const [activeFilter, setActiveFilter] = useState<VehicleCategory>("All");
  const [activeSort, setActiveSort] = useState<SortOption>("Vice Score");
  const [search, setSearch] = useState("");
  const [savedVehicles, setSavedVehicles] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        setSavedVehicles(JSON.parse(saved) as string[]);
      } catch {
        setSavedVehicles([]);
      }
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedVehicles));
  }, [savedVehicles, loaded]);

  function toggleSavedVehicle(vehicleName: string) {
    setSavedVehicles((current) =>
      current.includes(vehicleName)
        ? current.filter((name) => name !== vehicleName)
        : [...current, vehicleName]
    );
  }

  const visibleVehicles = vehicles
    .filter((vehicle) => {
      const matchesFilter =
        activeFilter === "All" || vehicle.category === activeFilter;

      const searchText =
        `${vehicle.name} ${vehicle.category} ${vehicle.type} ${vehicle.bestFor} ${vehicle.desc}`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      if (activeSort === "Speed") return b.speed - a.speed;
      if (activeSort === "Handling") return b.handling - a.handling;
      if (activeSort === "Value") return b.value - a.value;

      return b.score - a.score;
    });

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-pink-400">
            Vehicles Database
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Find your perfect ride.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Search, filter, sort and save demo vehicles by speed, handling,
            value and Vice Score.
          </p>

          <ModuleAskButton prompt="What is the best first vehicle strategy in GTA 6?" />
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4">
          <div className="rounded-3xl border border-pink-500/30 bg-pink-500/10 p-5 text-center">
            <p className="text-3xl font-black">{savedVehicles.length}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-pink-300">
              Saved Rides
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-center">
            <p className="text-3xl font-black">{visibleVehicles.length}</p>
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
              placeholder="Search vehicles..."
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
          Showing {visibleVehicles.length} vehicles · Sorted by {activeSort}
        </p>

        {visibleVehicles.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleVehicles.map((vehicle) => {
              const saved = savedVehicles.includes(vehicle.name);

              return (
                <div
                  key={vehicle.name}
                  className={
                    saved
                      ? "rounded-3xl border border-cyan-400/40 bg-cyan-400/[0.06] p-6 transition hover:-translate-y-1 hover:border-cyan-400/70"
                      : "rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.07]"
                  }
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-500/30 bg-pink-500/10 text-3xl">
                        {vehicle.icon}
                      </div>

                      <div>
                        <p className="text-sm text-cyan-300">{vehicle.type}</p>
                        <h2 className="text-2xl font-black">{vehicle.name}</h2>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-pink-500/30 bg-pink-500/10 px-3 py-2 text-center">
                      <p className="text-xs text-pink-300">Vice Score</p>
                      <p className="text-xl font-black text-white">
                        {vehicle.score}
                      </p>
                    </div>
                  </div>

                  <p className="mb-5 text-sm text-gray-400">{vehicle.desc}</p>

                  <div className="mb-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3">
                    <p className="text-xs text-cyan-300">Best for</p>
                    <p className="mt-1 font-bold text-white">{vehicle.bestFor}</p>
                  </div>

                  <div className="space-y-4">
                    <StatBar label="Speed" value={vehicle.speed} />
                    <StatBar label="Handling" value={vehicle.handling} />
                    <StatBar label="Value" value={vehicle.value} />
                  </div>

                  <button
                    onClick={() => toggleSavedVehicle(vehicle.name)}
                    className={
                      saved
                        ? "mt-6 w-full rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-black text-cyan-300 transition hover:bg-cyan-400/20"
                        : "mt-6 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-black text-gray-300 transition hover:border-pink-500/60 hover:text-white"
                    }
                  >
                    {saved ? "Saved Ride ✓" : "Save Ride"}
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
            <p className="text-4xl">🔍</p>
            <h3 className="mt-4 text-2xl font-black">No vehicles found</h3>
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