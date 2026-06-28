"use client";

import { useState } from "react";
import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import ModuleAskButton from "../components/ModuleAskButton";
import Navbar from "../components/Navbar";

type MoneyFilter =
  | "All"
  | "Low Risk"
  | "High Profit"
  | "Fast Cash"
  | "Early Game"
  | "Late Game";

type MoneyTag = Exclude<MoneyFilter, "All">;

const filters: MoneyFilter[] = [
  "All",
  "Low Risk",
  "High Profit",
  "Fast Cash",
  "Early Game",
  "Late Game",
];

const moneyMethods: {
  title: string;
  difficulty: string;
  profit: string;
  risk: string;
  time: string;
  bestFor: string;
  score: number;
  desc: string;
  tags: MoneyTag[];
}[] = [
  {
    title: "Story Missions First",
    difficulty: "Easy",
    profit: "Medium",
    risk: "Low",
    time: "Fast",
    bestFor: "Early game",
    score: 9.2,
    desc: "Best early path. Complete main missions before wasting cash on expensive items.",
    tags: ["Low Risk", "Fast Cash", "Early Game"],
  },
  {
    title: "Side Jobs Route",
    difficulty: "Medium",
    profit: "Medium",
    risk: "Medium",
    time: "Medium",
    bestFor: "Steady income",
    score: 8.7,
    desc: "Use repeatable activities to build steady money while unlocking useful gear.",
    tags: ["Early Game"],
  },
  {
    title: "Vehicle Flip Strategy",
    difficulty: "Medium",
    profit: "High",
    risk: "Medium",
    time: "Fast",
    bestFor: "Players who like cars",
    score: 8.4,
    desc: "Focus on vehicles with good resale and value potential once the economy is known.",
    tags: ["High Profit", "Fast Cash"],
  },
  {
    title: "Save Before Flexing",
    difficulty: "Easy",
    profit: "High",
    risk: "Low",
    time: "Long-term",
    bestFor: "Smart progression",
    score: 9.5,
    desc: "Avoid buying luxury cars too early. Buy income tools and useful upgrades first.",
    tags: ["Low Risk", "High Profit", "Early Game"],
  },
  {
    title: "High Risk Jobs",
    difficulty: "Hard",
    profit: "Very High",
    risk: "High",
    time: "Medium",
    bestFor: "Late game",
    score: 8.9,
    desc: "Later-game activities with bigger payouts, but higher weapon and vehicle requirements.",
    tags: ["High Profit", "Late Game"],
  },
  {
    title: "Smart Upgrade Plan",
    difficulty: "Easy",
    profit: "Medium",
    risk: "Low",
    time: "Long-term",
    bestFor: "Efficient players",
    score: 9.0,
    desc: "Upgrade only what improves missions: weapons, armor, fast transport and safe routes.",
    tags: ["Low Risk", "Early Game"],
  },
];

function Badge({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-1 font-bold text-white">{value}</p>
    </div>
  );
}

export default function MoneyPage() {
  const [activeFilter, setActiveFilter] = useState<MoneyFilter>("All");

  const visibleMethods =
    activeFilter === "All"
      ? moneyMethods
      : moneyMethods.filter((method) => method.tags.includes(activeFilter));

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-pink-400">
            Money Guide
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Earn smarter. Spend better.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            A demo money strategy board for GTA 6. Filter money methods by risk,
            profit, speed and game stage.
          </p>

          <ModuleAskButton prompt="Make me a smart GTA 6 money plan." />
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Smart Money Rule
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Build income before buying flex items.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-400">
            In early game, spend on tools that help missions: weapons, armor,
            reliable transport and useful upgrades. Expensive luxury items come
            later.
          </p>
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
          {visibleMethods.map((method) => (
            <div
              key={method.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-cyan-300">{method.difficulty}</p>
                  <h2 className="mt-1 text-2xl font-black">{method.title}</h2>
                </div>

                <div className="rounded-2xl border border-pink-500/30 bg-pink-500/10 px-3 py-2 text-center">
                  <p className="text-xs text-pink-300">Vice Score</p>
                  <p className="text-xl font-black text-white">
                    {method.score}
                  </p>
                </div>
              </div>

              <p className="mb-5 text-sm text-gray-400">{method.desc}</p>

              <div className="mb-5 flex flex-wrap gap-2">
                {method.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3">
                <p className="text-xs text-cyan-300">Best for</p>
                <p className="mt-1 font-bold text-white">{method.bestFor}</p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Badge label="Profit" value={method.profit} />
                <Badge label="Risk" value={method.risk} />
                <Badge label="Time" value={method.time} />
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