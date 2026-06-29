"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import ModuleAskButton from "../components/ModuleAskButton";
import Navbar from "../components/Navbar";

const storageKeys = {
  mapPins: "vicehub-saved-map-pins",
  vehicles: "vicehub-saved-vehicles",
  weapons: "vicehub-saved-weapons",
  money: "vicehub-saved-money-strategies",
  tracker: "vicehub-tracker-progress",
  chat: "vicehub-ask-vice-chat",
};

const modules = [
  {
    title: "Ask Vice AI",
    href: "/ai",
    icon: "🤖",
    desc: "Open the AI command center.",
  },
  {
    title: "Map",
    href: "/map",
    icon: "🗺️",
    desc: "Explore pins, missions and locations.",
  },
  {
    title: "Vehicles",
    href: "/vehicles",
    icon: "🚗",
    desc: "Search, sort and save rides.",
  },
  {
    title: "Weapons",
    href: "/weapons",
    icon: "🔫",
    desc: "Build and save loadout ideas.",
  },
  {
    title: "Money",
    href: "/money",
    icon: "💸",
    desc: "Find useful money strategies.",
  },
  {
    title: "Tracker",
    href: "/tracker",
    icon: "✅",
    desc: "Track completion progress.",
  },
  {
    title: "Saved Hub",
    href: "/saved",
    icon: "⭐",
    desc: "View everything you saved.",
  },
  {
    title: "Roadmap",
    href: "/roadmap",
    icon: "🌴",
    desc: "See what is planned next.",
  },
];

function readArrayCount(key: string) {
  const saved = localStorage.getItem(key);

  if (!saved) return 0;

  try {
    const parsed = JSON.parse(saved);

    if (Array.isArray(parsed)) {
      return parsed.length;
    }

    if (typeof parsed === "object" && parsed !== null) {
      return Object.keys(parsed).length;
    }

    return 0;
  } catch {
    return 0;
  }
}

export default function DashboardPage() {
  const [mapPins, setMapPins] = useState(0);
  const [vehicles, setVehicles] = useState(0);
  const [weapons, setWeapons] = useState(0);
  const [money, setMoney] = useState(0);
  const [tracker, setTracker] = useState(0);
  const [chatMessages, setChatMessages] = useState(0);

  function loadDashboardData() {
    setMapPins(readArrayCount(storageKeys.mapPins));
    setVehicles(readArrayCount(storageKeys.vehicles));
    setWeapons(readArrayCount(storageKeys.weapons));
    setMoney(readArrayCount(storageKeys.money));
    setTracker(readArrayCount(storageKeys.tracker));
    setChatMessages(readArrayCount(storageKeys.chat));
  }

  useEffect(() => {
    loadDashboardData();

    const interval = setInterval(loadDashboardData, 1000);

    window.addEventListener("storage", loadDashboardData);
    window.addEventListener("focus", loadDashboardData);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", loadDashboardData);
      window.removeEventListener("focus", loadDashboardData);
    };
  }, []);

  const totalSaved = mapPins + vehicles + weapons + money;

  const stats = [
    { label: "Total Saved", value: totalSaved, icon: "⭐" },
    { label: "Map Pins", value: mapPins, icon: "🗺️" },
    { label: "Vehicles", value: vehicles, icon: "🚗" },
    { label: "Weapons", value: weapons, icon: "🔫" },
    { label: "Money Plans", value: money, icon: "💸" },
    { label: "Tracker Done", value: tracker, icon: "✅" },
    { label: "Chat Messages", value: chatMessages, icon: "🤖" },
    { label: "Build", value: "Beta", icon: "⚡" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-cyan-300">
            Dashboard
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Your ViceHub control center.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            See your saved items, tracker progress, AI chat activity and quick
            access to every ViceHub AI module from one clean dashboard.
          </p>

          <ModuleAskButton prompt="Give me a dashboard summary and tell me what I should open next." />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-pink-500/30 bg-pink-500/10 text-2xl">
                {stat.icon}
              </div>

              <p className="text-3xl font-black text-white">{stat.value}</p>

              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.75fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
                  Quick Launch
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Open any module fast.
                </h2>
              </div>

              <Link
                href="/saved"
                className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-black text-cyan-300 transition hover:bg-cyan-400/20"
              >
                Open Saved Hub
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {modules.map((module) => (
                <Link
                  key={module.href}
                  href={module.href}
                  className="group rounded-3xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-pink-500/30 bg-pink-500/10 text-2xl">
                        {module.icon}
                      </div>

                      <div>
                        <h3 className="text-xl font-black">{module.title}</h3>
                        <p className="mt-2 text-sm text-gray-400">
                          {module.desc}
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
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                Local Save Status
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Everything stays in your browser.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Saved pins, vehicles, weapons, money plans, tracker progress and
                chat messages are stored locally. That means they stay after
                refresh on this same browser.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
                Suggested Next Move
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Build your saved setup.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Save one vehicle, one weapon, one money strategy and a few map
                pins. Then open Saved Hub to see your full setup in one place.
              </p>

              <div className="mt-6 grid gap-3">
                <Link
                  href="/vehicles"
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-bold text-gray-300 transition hover:border-pink-500/60 hover:text-white"
                >
                  Save a vehicle
                </Link>

                <Link
                  href="/weapons"
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-bold text-gray-300 transition hover:border-pink-500/60 hover:text-white"
                >
                  Save a weapon
                </Link>

                <Link
                  href="/money"
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-bold text-gray-300 transition hover:border-pink-500/60 hover:text-white"
                >
                  Save a money plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AskViceChat />
      <Footer />
    </main>
  );
}