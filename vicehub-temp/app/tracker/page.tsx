"use client";

import { useState } from "react";
import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import ModuleAskButton from "../components/ModuleAskButton";
import Navbar from "../components/Navbar";

type Category =
  | "Story"
  | "Collectibles"
  | "Vehicles"
  | "Weapons"
  | "Activities"
  | "Achievements";

type Filter = "All" | Category;

type Task = {
  id: string;
  category: Category;
  title: string;
  done: boolean;
};

const filters: Filter[] = [
  "All",
  "Story",
  "Collectibles",
  "Vehicles",
  "Weapons",
  "Activities",
  "Achievements",
];

const initialTasks: Task[] = [
  { id: "story-1", category: "Story", title: "Complete opening mission", done: true },
  { id: "story-2", category: "Story", title: "Unlock first safehouse", done: true },
  { id: "story-3", category: "Story", title: "Complete first major job", done: false },
  { id: "story-4", category: "Story", title: "Finish chapter one", done: false },

  { id: "collect-1", category: "Collectibles", title: "Find first hidden package", done: true },
  { id: "collect-2", category: "Collectibles", title: "Collect beach secrets", done: false },
  { id: "collect-3", category: "Collectibles", title: "Track rare city items", done: false },
  { id: "collect-4", category: "Collectibles", title: "Clear collectible zone", done: false },

  { id: "vehicle-1", category: "Vehicles", title: "Save first fast car", done: true },
  { id: "vehicle-2", category: "Vehicles", title: "Find a reliable bike", done: true },
  { id: "vehicle-3", category: "Vehicles", title: "Unlock boat route", done: false },
  { id: "vehicle-4", category: "Vehicles", title: "Collect special vehicle", done: false },

  { id: "weapon-1", category: "Weapons", title: "Buy starter pistol", done: true },
  { id: "weapon-2", category: "Weapons", title: "Unlock SMG", done: true },
  { id: "weapon-3", category: "Weapons", title: "Upgrade main rifle", done: false },
  { id: "weapon-4", category: "Weapons", title: "Unlock explosive weapon", done: false },

  { id: "activity-1", category: "Activities", title: "Complete first race", done: false },
  { id: "activity-2", category: "Activities", title: "Finish first side job", done: true },
  { id: "activity-3", category: "Activities", title: "Win street challenge", done: false },
  { id: "activity-4", category: "Activities", title: "Complete city event", done: false },

  { id: "achievement-1", category: "Achievements", title: "Reach first money milestone", done: true },
  { id: "achievement-2", category: "Achievements", title: "Complete weapon challenge", done: false },
  { id: "achievement-3", category: "Achievements", title: "Finish vehicle challenge", done: false },
  { id: "achievement-4", category: "Achievements", title: "Reach 100% completion", done: false },
];

function ProgressBar({ completed, total }: { completed: number; total: number }) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div>
      <div className="mb-2 flex justify-between text-xs text-gray-400">
        <span>
          {completed}/{total} completed
        </span>
        <span>{percent}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default function TrackerPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleCategories =
    activeFilter === "All"
      ? filters.filter((filter) => filter !== "All") as Category[]
      : [activeFilter];

  const totalCompleted = tasks.filter((task) => task.done).length;
  const totalItems = tasks.length;
  const overallPercent = Math.round((totalCompleted / totalItems) * 100);

  function toggleTask(id: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function resetDemo() {
    setTasks(initialTasks);
    setActiveFilter("All");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-pink-400">
            100% Tracker
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Track your full progress.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Click tasks to update your demo completion progress for story,
            collectibles, vehicles, weapons, activities and achievements.
          </p>

          <ModuleAskButton prompt="Help me reach 100% completion in GTA 6." />
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-pink-500/30 bg-pink-500/10 p-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
            Overall Completion
          </p>

          <h2 className="mt-3 text-6xl font-black">{overallPercent}%</h2>

          <p className="mt-3 text-gray-300">
            {totalCompleted}/{totalItems} total objectives completed
          </p>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 transition-all"
              style={{ width: `${overallPercent}%` }}
            />
          </div>

          <button
            onClick={resetDemo}
            className="mt-6 rounded-full border border-white/10 bg-black/30 px-5 py-2 text-sm font-bold text-gray-300 transition hover:border-pink-500/60 hover:text-white"
          >
            Reset demo progress
          </button>
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
          {visibleCategories.map((category) => {
            const sectionTasks = tasks.filter((task) => task.category === category);
            const completed = sectionTasks.filter((task) => task.done).length;

            return (
              <div
                key={category}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.07]"
              >
                <h2 className="text-2xl font-black">{category}</h2>

                <div className="mt-5">
                  <ProgressBar completed={completed} total={sectionTasks.length} />
                </div>

                <div className="mt-6 space-y-3">
                  {sectionTasks.map((task) => (
                    <button
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className={
                        task.done
                          ? "flex w-full items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-left text-sm text-white"
                          : "flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-left text-sm text-gray-300 transition hover:border-pink-500/40 hover:text-white"
                      }
                    >
                      <span
                        className={
                          task.done
                            ? "flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 text-xs font-black text-black"
                            : "flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-xs text-gray-500"
                        }
                      >
                        {task.done ? "✓" : ""}
                      </span>

                      <span className={task.done ? "line-through opacity-80" : ""}>
                        {task.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <AskViceChat />
      <Footer />
    </main>
  );
}