import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import ModuleAskButton from "../components/ModuleAskButton";
import Navbar from "../components/Navbar";

const trackerSections = [
  {
    title: "Story Missions",
    completed: 8,
    total: 24,
    items: ["Intro Mission", "First Contact", "Beach Job", "Safehouse Setup"],
  },
  {
    title: "Collectibles",
    completed: 12,
    total: 80,
    items: ["Hidden Packages", "Street Photos", "Rare Items", "Secret Notes"],
  },
  {
    title: "Vehicles",
    completed: 5,
    total: 35,
    items: ["Sports Cars", "Motorbikes", "Boats", "Special Vehicles"],
  },
  {
    title: "Weapons",
    completed: 6,
    total: 18,
    items: ["Pistols", "SMGs", "Rifles", "Explosives"],
  },
  {
    title: "Achievements",
    completed: 9,
    total: 42,
    items: ["Money Milestones", "Mission Challenges", "Stunts", "Completion"],
  },
  {
    title: "Side Activities",
    completed: 4,
    total: 20,
    items: ["Races", "Jobs", "Events", "Challenges"],
  },
];

function ProgressBar({ completed, total }: { completed: number; total: number }) {
  const percent = Math.round((completed / total) * 100);

  return (
    <div>
      <div className="mb-2 flex justify-between text-xs text-gray-400">
        <span>{completed}/{total} completed</span>
        <span>{percent}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-400"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default function TrackerPage() {
  const totalCompleted = trackerSections.reduce(
    (sum, section) => sum + section.completed,
    0
  );

  const totalItems = trackerSections.reduce(
    (sum, section) => sum + section.total,
    0
  );

  const overallPercent = Math.round((totalCompleted / totalItems) * 100);

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
            A demo completion tracker for missions, collectibles, vehicles,
            weapons, achievements and side activities.
          </p>

          <ModuleAskButton prompt="Help me understand how to reach 100% completion in GTA 6." />
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
              className="h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-400"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trackerSections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.07]"
            >
              <h2 className="text-2xl font-black">{section.title}</h2>

              <div className="mt-5">
                <ProgressBar completed={section.completed} total={section.total} />
              </div>

              <div className="mt-6 space-y-3">
                {section.items.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-gray-300"
                  >
                    <span
                      className={
                        index < 2
                          ? "text-cyan-300"
                          : "text-gray-600"
                      }
                    >
                      {index < 2 ? "✓" : "○"}
                    </span>
                    {item}
                  </div>
                ))}
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