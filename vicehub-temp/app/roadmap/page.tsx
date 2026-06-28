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
      "Interactive map preview",
      "Vehicles database with search, filters, sort and save",
      "Weapons database with search, filters, sort and save",
      "Money guide with search, filters, sort and save",
      "100% tracker with local progress saving",
      "Saved Hub for saved pins, rides, weapons and strategies",
    ],
  },
  {
    phase: "Next Updates",
    title: "Smarter Tools",
    status: "Planned",
    icon: "⚡",
    items: [
      "Better AI answers by module",
      "More vehicle and weapon demo data",
      "Improved mobile layout",
      "More map pins and categories",
      "Saved item notes",
      "Better tracker categories",
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
      "Cloud save with user accounts",
      "Advanced AI guide system",
      "Completion route planner",
    ],
  },
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

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            ViceHub AI is a beta companion hub. Here is what already works, what
            is planned next, and what can be upgraded when reliable GTA 6 data
            becomes available.
          </p>

          <ModuleAskButton prompt="Explain the ViceHub AI roadmap to me." />
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
              href="/ai"
              className="rounded-2xl bg-pink-600 px-6 py-3 text-sm font-black text-white transition hover:bg-pink-500"
            >
              Open AI Hub
            </Link>

            <Link
              href="/saved"
              className="rounded-2xl border border-white/10 bg-black/30 px-6 py-3 text-sm font-black text-gray-300 transition hover:border-cyan-400/50 hover:text-white"
            >
              Open Saved Hub
            </Link>
          </div>
        </div>
      </section>

      <AskViceChat />
      <Footer />
    </main>
  );
}