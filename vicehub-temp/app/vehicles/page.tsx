"use client";

import { useState } from "react";
import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import ModuleAskButton from "../components/ModuleAskButton";
import Navbar from "../components/Navbar";

type VehicleCategory = "All" | "Cars" | "Bikes" | "Boats" | "Special";

const filters: VehicleCategory[] = ["All", "Cars", "Bikes", "Boats", "Special"];

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

  const visibleVehicles =
    activeFilter === "All"
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.category === activeFilter);

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
            A demo vehicle database for comparing speed, handling, value and
            Vice Score. Real GTA 6 vehicle stats will be added when reliable
            data becomes available.
          </p>

          <ModuleAskButton prompt="What is the best first vehicle strategy in GTA 6?" />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
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

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleVehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.07]"
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
            </div>
          ))}
        </div>
      </section>

      <AskViceChat />
      <Footer />
    </main>
  );
}