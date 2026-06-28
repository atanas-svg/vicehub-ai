import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import ModuleAskButton from "../components/ModuleAskButton";
import Navbar from "../components/Navbar";

const moneyMethods = [
  {
    title: "Story Missions First",
    difficulty: "Easy",
    profit: "$",
    time: "Fast",
    score: 9.2,
    desc: "Best early path. Complete main missions before wasting cash on expensive items.",
  },
  {
    title: "Side Jobs Route",
    difficulty: "Medium",
    profit: "$$",
    time: "Medium",
    score: 8.7,
    desc: "Use repeatable activities to build steady money while unlocking useful gear.",
  },
  {
    title: "Vehicle Flip Strategy",
    difficulty: "Medium",
    profit: "$$",
    time: "Fast",
    score: 8.4,
    desc: "Focus on vehicles with good resale/value potential once the economy is known.",
  },
  {
    title: "Save Before Flexing",
    difficulty: "Easy",
    profit: "$$$",
    time: "Long-term",
    score: 9.5,
    desc: "Avoid buying luxury cars too early. Buy income tools and useful upgrades first.",
  },
  {
    title: "High Risk Jobs",
    difficulty: "Hard",
    profit: "$$$",
    time: "Medium",
    score: 8.9,
    desc: "Later-game activities with bigger payouts, but higher weapon and vehicle requirements.",
  },
  {
    title: "Smart Upgrade Plan",
    difficulty: "Easy",
    profit: "$$",
    time: "Long-term",
    score: 9.0,
    desc: "Upgrade only what improves missions: weapons, armor, fast transport and safe routes.",
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
            A demo money strategy board for GTA 6. Real methods will be updated
            when official gameplay and economy data becomes available.
          </p>

          <ModuleAskButton prompt="Help me make money fast in GTA 6." />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {moneyMethods.map((method) => (
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

              <div className="grid grid-cols-2 gap-3">
                <Badge label="Profit" value={method.profit} />
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