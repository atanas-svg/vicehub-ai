import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import ModuleAskButton from "../components/ModuleAskButton";
import Navbar from "../components/Navbar";

const commandCards = [
  {
    title: "Money Plan",
    icon: "💸",
    prompt: "Make me a smart GTA 6 money plan.",
    desc: "Get a step-by-step plan for earning, saving and spending smarter.",
    examples: ["Fast cash", "Best early upgrades", "Avoid wasting money"],
  },
  {
    title: "Best First Vehicle",
    icon: "🚗",
    prompt: "What is the best first vehicle strategy in GTA 6?",
    desc: "Find useful cars, bikes and vehicles based on speed, handling and value.",
    examples: ["First car", "Best bike", "Fast transport"],
  },
  {
    title: "Weapon Loadout",
    icon: "🔫",
    prompt: "Build me a starter weapon loadout for GTA 6.",
    desc: "Plan your weapons for missions, fights, vehicles and survival.",
    examples: ["Starter gun", "Mission loadout", "Combat setup"],
  },
  {
    title: "Map Help",
    icon: "🗺️",
    prompt: "Help me use the map to find useful GTA 6 locations.",
    desc: "Use map categories for missions, secrets, vehicles and safehouses.",
    examples: ["Secrets", "Safehouses", "Vehicle spawns"],
  },
  {
    title: "100% Completion",
    icon: "✅",
    prompt: "Help me reach 100% completion in GTA 6.",
    desc: "Track story missions, collectibles, activities, weapons and achievements.",
    examples: ["What next?", "Missing tasks", "Completion order"],
  },
  {
    title: "Smart Start",
    icon: "⚡",
    prompt: "What should I do first when I start GTA 6?",
    desc: "A clean beginner plan so you do not waste time or money early.",
    examples: ["First hour", "Early game", "Best route"],
  },
];

const stats = [
  { label: "AI Modes", value: "6" },
  { label: "Modules", value: "5+" },
  { label: "Status", value: "Beta" },
];

export default function AiPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-pink-400">
            Ask Vice AI
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Your GTA 6 command center.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Ask Vice helps you plan money, vehicles, weapons, map routes and
            100% completion from one clean AI hub.
          </p>

          <ModuleAskButton prompt="Give me a smart beginner plan for GTA 6." />
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

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {commandCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-500/30 bg-pink-500/10 text-3xl">
                  {card.icon}
                </div>

                <div>
                  <p className="text-sm text-cyan-300">AI Command</p>
                  <h2 className="text-2xl font-black">{card.title}</h2>
                </div>
              </div>

              <p className="mb-5 text-sm text-gray-400">{card.desc}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {card.examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300"
                  >
                    {example}
                  </span>
                ))}
              </div>

              <ModuleAskButton prompt={card.prompt} />
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Beta Notice
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Demo AI now. Real data later.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400">
            Ask Vice is currently a smart demo assistant. When reliable GTA 6
            gameplay data becomes available, this hub can be upgraded with real
            guides, search and stronger AI answers.
          </p>
        </div>
      </section>

      <AskViceChat />
      <Footer />
    </main>
  );
}