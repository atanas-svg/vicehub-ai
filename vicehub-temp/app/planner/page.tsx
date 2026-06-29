"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import ModuleAskButton from "../components/ModuleAskButton";
import Navbar from "../components/Navbar";

type Plan = {
  playstyle: string;
  priority: string;
  vehicle: string;
  weapon: string;
  money: string;
  notes: string;
};

const STORAGE_KEY = "vicehub-player-plan";

const defaultPlan: Plan = {
  playstyle: "Balanced",
  priority: "Story Progress",
  vehicle: "Neon Vortex",
  weapon: "Coastal Rifle",
  money: "Story Missions First",
  notes: "",
};

const playstyles = [
  "Balanced",
  "Speedrunner",
  "Money Grinder",
  "Combat Focused",
  "Explorer",
  "100% Completion",
];

const priorities = [
  "Story Progress",
  "Make Money Fast",
  "Unlock Weapons",
  "Find Vehicles",
  "Explore Map",
  "Complete Everything",
];

const vehicles = [
  "Neon Vortex",
  "Palm Runner",
  "Harbor Cruiser",
  "Stormline Bike",
  "Night Panther",
  "Coastal Van",
];

const weapons = [
  "Coastal Rifle",
  "Vice Pistol",
  "Metro SMG",
  "Harbor Shotgun",
  "Downtown Launcher",
  "Silent Compact",
];

const moneyPlans = [
  "Story Missions First",
  "Side Jobs Route",
  "High Profit Risk",
  "Safe Early Game",
  "Late Game Grind",
  "Balanced Income",
];

export default function PlannerPage() {
  const [plan, setPlan] = useState<Plan>(defaultPlan);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedPlan = localStorage.getItem(STORAGE_KEY);

    if (!savedPlan) return;

    try {
      const parsed = JSON.parse(savedPlan) as Plan;
      setPlan({ ...defaultPlan, ...parsed });
      setSaved(true);
    } catch {
      setPlan(defaultPlan);
    }
  }, []);

  function updatePlan(key: keyof Plan, value: string) {
    setPlan((current) => ({
      ...current,
      [key]: value,
    }));

    setSaved(false);
  }

  function savePlan() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
    setSaved(true);
  }

  function resetPlan() {
    localStorage.removeItem(STORAGE_KEY);
    setPlan(defaultPlan);
    setSaved(false);
  }

  const planSummary = `My GTA 6 plan is: Playstyle ${plan.playstyle}, Priority ${plan.priority}, Vehicle ${plan.vehicle}, Weapon ${plan.weapon}, Money strategy ${plan.money}.`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-pink-400">
            Planner
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Build your Vice setup.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Create your personal GTA 6 starter plan with playstyle, priority,
            vehicle, weapon and money strategy. Your plan is saved locally in
            your browser.
          </p>

          <ModuleAskButton prompt="Help me build the best GTA 6 starter setup." />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                  Setup Builder
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Choose your plan.
                </h2>
              </div>

              <span
                className={
                  saved
                    ? "rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300"
                    : "rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-2 text-sm font-bold text-pink-300"
                }
              >
                {saved ? "Saved locally" : "Not saved yet"}
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-gray-300">
                  Playstyle
                </span>

                <select
                  value={plan.playstyle}
                  onChange={(event) =>
                    updatePlan("playstyle", event.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white outline-none focus:border-pink-500/60"
                >
                  {playstyles.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-gray-300">
                  Main Priority
                </span>

                <select
                  value={plan.priority}
                  onChange={(event) =>
                    updatePlan("priority", event.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white outline-none focus:border-pink-500/60"
                >
                  {priorities.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-gray-300">
                  Starter Vehicle
                </span>

                <select
                  value={plan.vehicle}
                  onChange={(event) =>
                    updatePlan("vehicle", event.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white outline-none focus:border-pink-500/60"
                >
                  {vehicles.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-gray-300">
                  Starter Weapon
                </span>

                <select
                  value={plan.weapon}
                  onChange={(event) => updatePlan("weapon", event.target.value)}
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white outline-none focus:border-pink-500/60"
                >
                  {weapons.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-bold text-gray-300">
                  Money Strategy
                </span>

                <select
                  value={plan.money}
                  onChange={(event) => updatePlan("money", event.target.value)}
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white outline-none focus:border-pink-500/60"
                >
                  {moneyPlans.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-bold text-gray-300">
                  Notes
                </span>

                <textarea
                  value={plan.notes}
                  onChange={(event) => updatePlan("notes", event.target.value)}
                  placeholder="Example: focus money first, then weapons, then collectibles..."
                  className="min-h-[130px] resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white outline-none placeholder:text-gray-500 focus:border-pink-500/60"
                />
              </label>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={savePlan}
                className="rounded-2xl bg-pink-600 px-6 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-pink-500"
              >
                Save Plan
              </button>

              <button
                onClick={resetPlan}
                className="rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-sm font-black uppercase tracking-widest text-gray-300 transition hover:border-pink-500/60 hover:text-white"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                Your Current Plan
              </p>

              <h2 className="mt-3 text-3xl font-black">{plan.playstyle}</h2>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    Priority
                  </p>
                  <p className="mt-2 font-bold text-white">{plan.priority}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    Vehicle
                  </p>
                  <p className="mt-2 font-bold text-white">{plan.vehicle}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    Weapon
                  </p>
                  <p className="mt-2 font-bold text-white">{plan.weapon}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    Money
                  </p>
                  <p className="mt-2 font-bold text-white">{plan.money}</p>
                </div>
              </div>

              <div className="mt-6">
                <ModuleAskButton prompt={planSummary} />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
                Quick Links
              </p>

              <div className="mt-6 grid gap-3">
                <Link
                  href="/vehicles"
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-bold text-gray-300 transition hover:border-pink-500/60 hover:text-white"
                >
                  Open Vehicles
                </Link>

                <Link
                  href="/weapons"
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-bold text-gray-300 transition hover:border-pink-500/60 hover:text-white"
                >
                  Open Weapons
                </Link>

                <Link
                  href="/money"
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-bold text-gray-300 transition hover:border-pink-500/60 hover:text-white"
                >
                  Open Money Guide
                </Link>

                <Link
                  href="/dashboard"
                  className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400/20"
                >
                  Open Dashboard
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