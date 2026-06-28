"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const storageKeys = {
  pins: "vicehub-saved-map-pins",
  vehicles: "vicehub-saved-vehicles",
  weapons: "vicehub-saved-weapons",
  money: "vicehub-saved-money-strategies",
};

function readSavedItems(key: string) {
  const saved = localStorage.getItem(key);

  if (!saved) return [];

  try {
    return JSON.parse(saved) as string[];
  } catch {
    return [];
  }
}

export default function SavedPage() {
  const [savedPins, setSavedPins] = useState<string[]>([]);
  const [savedVehicles, setSavedVehicles] = useState<string[]>([]);
  const [savedWeapons, setSavedWeapons] = useState<string[]>([]);
  const [savedMoney, setSavedMoney] = useState<string[]>([]);

  function loadSavedItems() {
    setSavedPins(readSavedItems(storageKeys.pins));
    setSavedVehicles(readSavedItems(storageKeys.vehicles));
    setSavedWeapons(readSavedItems(storageKeys.weapons));
    setSavedMoney(readSavedItems(storageKeys.money));
  }

  useEffect(() => {
    loadSavedItems();
  }, []);

  const totalSaved =
    savedPins.length +
    savedVehicles.length +
    savedWeapons.length +
    savedMoney.length;

  function clearSection(key: string, setter: (items: string[]) => void) {
    localStorage.removeItem(key);
    setter([]);
  }

  function clearAllSaved() {
    localStorage.removeItem(storageKeys.pins);
    localStorage.removeItem(storageKeys.vehicles);
    localStorage.removeItem(storageKeys.weapons);
    localStorage.removeItem(storageKeys.money);

    setSavedPins([]);
    setSavedVehicles([]);
    setSavedWeapons([]);
    setSavedMoney([]);
  }

  const sections = [
    {
      title: "Saved Map Pins",
      icon: "🗺️",
      href: "/map",
      items: savedPins,
      empty: "No saved map pins yet.",
      clear: () => clearSection(storageKeys.pins, setSavedPins),
    },
    {
      title: "Saved Vehicles",
      icon: "🚗",
      href: "/vehicles",
      items: savedVehicles,
      empty: "No saved vehicles yet.",
      clear: () => clearSection(storageKeys.vehicles, setSavedVehicles),
    },
    {
      title: "Saved Weapons",
      icon: "🔫",
      href: "/weapons",
      items: savedWeapons,
      empty: "No saved weapons yet.",
      clear: () => clearSection(storageKeys.weapons, setSavedWeapons),
    },
    {
      title: "Saved Money Strategies",
      icon: "💸",
      href: "/money",
      items: savedMoney,
      empty: "No saved money strategies yet.",
      clear: () => clearSection(storageKeys.money, setSavedMoney),
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-pink-400">
            Saved Hub
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Your saved ViceHub items.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            All saved map pins, vehicles, weapons and money strategies in one
            place. Saved locally in your browser.
          </p>

          {totalSaved > 0 && (
            <button
              onClick={clearAllSaved}
              className="mt-8 rounded-2xl border border-pink-500/40 bg-pink-500/10 px-6 py-3 text-sm font-black text-pink-300 transition hover:bg-pink-500/20"
            >
              Clear All Saved
            </button>
          )}
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-3xl border border-pink-500/30 bg-pink-500/10 p-5 text-center">
            <p className="text-3xl font-black">{totalSaved}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-pink-300">
              Total Saved
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-center">
            <p className="text-3xl font-black">{savedPins.length}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cyan-300">
              Pins
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-center">
            <p className="text-3xl font-black">{savedVehicles.length}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cyan-300">
              Rides
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-center">
            <p className="text-3xl font-black">
              {savedWeapons.length + savedMoney.length}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cyan-300">
              Gear/Plans
            </p>
          </div>
        </div>

        {totalSaved === 0 && (
          <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
            <p className="text-5xl">⭐</p>

            <h2 className="mt-5 text-3xl font-black">
              Nothing saved yet.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400">
              Go to Map, Vehicles, Weapons or Money Guide and save your favorite
              items. They will appear here automatically.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/map"
                className="rounded-2xl bg-pink-600 px-6 py-3 text-sm font-black text-white transition hover:bg-pink-500"
              >
                Open Map
              </Link>

              <Link
                href="/vehicles"
                className="rounded-2xl border border-white/10 bg-black/30 px-6 py-3 text-sm font-black text-gray-300 transition hover:border-cyan-400/50 hover:text-white"
              >
                Open Vehicles
              </Link>

              <Link
                href="/weapons"
                className="rounded-2xl border border-white/10 bg-black/30 px-6 py-3 text-sm font-black text-gray-300 transition hover:border-cyan-400/50 hover:text-white"
              >
                Open Weapons
              </Link>
            </div>
          </div>
        )}

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-500/30 bg-pink-500/10 text-3xl">
                    {section.icon}
                  </div>

                  <div>
                    <p className="text-sm text-cyan-300">
                      {section.items.length} saved
                    </p>
                    <h2 className="text-2xl font-black">{section.title}</h2>
                  </div>
                </div>
              </div>

              {section.items.length > 0 ? (
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-bold text-white"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-6 text-center text-sm text-gray-400">
                  {section.empty}
                </div>
              )}

              <div className="mt-6 flex gap-3">
                <Link
                  href={section.href}
                  className="flex-1 rounded-2xl bg-pink-600 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-pink-500"
                >
                  Open Module
                </Link>

                {section.items.length > 0 && (
                  <button
                    onClick={section.clear}
                    className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-black text-gray-300 transition hover:border-pink-500/60 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Local Save System
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-400">
            These saved items are stored only in this browser. Later, ViceHub can
            be upgraded with user accounts and cloud saves.
          </p>
        </div>
      </section>

      <AskViceChat />
      <Footer />
    </main>
  );
}