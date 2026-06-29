import Link from "next/link";
import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import ModuleAskButton from "../components/ModuleAskButton";
import Navbar from "../components/Navbar";

const roadmapItems = [
  {
    phase: "Live Now",
    title: "ViceHub AI Beta",
    status: "Active",
    icon: "🤖",
    items: [
      "Ask Vice AI demo assistant",
      "Dashboard control center",
      "Search Hub for finding modules fast",
      "Planner / Setup Builder",
      "Interactive map preview",
      "Vehicles database with search, filters, sort and save",
      "Weapons database with search, filters, sort and save",
      "Money guide with search, filters, sort and save",
      "100% tracker with local progress saving",
      "Saved Hub for saved pins, rides, weapons and strategies",
      "Disclaimer / legal fan-made project page",
    ],
  },
  {
    phase: "Next Updates",
    title: "Smarter Tools",
    status: "Planned",
    icon: "⚡",
    items: [
      "Planner summary inside Dashboard",
      "Better AI answers for planner setups",
      "Vehicle compare tool",
      "Weapon compare tool",
      "Saved item notes",
      "More demo map pins and categories",
      "Better mobile polish",
      "Export or copy player plan",
    ],
  },
  {
    phase: "Future Vision",
    title: "Real GTA 6 Companion",
    status: "Future",
    icon: "🌴",
    items: [
      "Real GTA 6 locations when reliable data is available",
      "Real vehicle stats",
      "Real weapon stats",
      "Real mission and collectible tracking",
      "Cloud save with user accounts",
      "Advanced AI guide system",
      "Completion route planner",
      "Personal profile and builds",
    ],
  },
];

const stats = [
  { label: "Modules", value: "11" },
  { label: "Status", value: "Beta" },
  { label: "Data", value: "Demo" },
];

export default function RoadmapPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-pink-400">
            Roadmap
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            What is next for ViceHub?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            ViceHub AI is a beta companion hub. Here is what already works, what
            is planned next, and what can be upgraded when reliable GTA 6 data
            becomes available.
          </p>

          <ModuleAskButton prompt="Explain the ViceHub AI roadmap to me." />
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center"
            >
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {roadmapItems.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.07]"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-500/30 bg-pink-500/10 text-3xl">
                    {group.icon}
                  </div>

                  <div>
                    <p className="text-sm text-cyan-300">{group.phase}</p>
                    <h2 className="text-2xl font-black">{group.title}</h2>
                  </div>
                </div>

                <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-bold text-pink-300">
                  {group.status}
                </span>
              </div>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-gray-300"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Important
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Demo data now. Real data later.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-400">
            ViceHub AI does not use official GTA 6 map, stats or copyrighted
            materials. Real guides can be added only when reliable public
            gameplay information becomes available.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/planner"
              className="rounded-2xl bg-pink-600 px-6 py-3 text-sm font-black text-white transition hover:bg-pink-500"
            >
              Open Planner
            </Link>

            <Link
              href="/dashboard"
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-black text-cyan-300 transition hover:bg-cyan-400/20"
            >
              Open Dashboard
            </Link>

            <Link
              href="/search"
              className="rounded-2xl border border-white/10 bg-black/30 px-6 py-3 text-sm font-black text-gray-300 transition hover:border-cyan-400/50 hover:text-white"
            >
              Open Search
            </Link>
          </div>
        </div>
      </section>

      <AskViceChat />
      <Footer />
    </main>
  );
}