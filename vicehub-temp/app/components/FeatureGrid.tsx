import Link from "next/link";

const features = [
  {
    title: "Ask Vice AI",
    href: "/ai",
    icon: "🤖",
    status: "Live",
    desc: "Your GTA 6 command center for money, vehicles, weapons, map help and 100% completion.",
  },
  {
    title: "Interactive Map",
    href: "/map",
    icon: "🗺️",
    status: "Beta",
    desc: "Explore missions, secrets, vehicles, weapons and safehouses with filterable map pins.",
  },
  {
    title: "Vehicles",
    href: "/vehicles",
    icon: "🚗",
    status: "Beta",
    desc: "Compare demo vehicles by speed, handling, value and Vice Score.",
  },
  {
    title: "Weapons",
    href: "/weapons",
    icon: "🔫",
    status: "Beta",
    desc: "Plan starter loadouts and compare weapons for missions, fights and survival.",
  },
  {
    title: "Money Guide",
    href: "/money",
    icon: "💸",
    status: "Beta",
    desc: "Use smart money strategies to earn faster, spend better and avoid wasting cash.",
  },
  {
    title: "100% Tracker",
    href: "/tracker",
    icon: "✅",
    status: "Beta",
    desc: "Track story missions, collectibles, vehicles, weapons, achievements and side activities.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.5em] text-cyan-300">
          Explore ViceHub
        </p>

        <h2 className="text-4xl font-black md:text-6xl">
          Everything you need in one hub.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Start with AI, then jump into map routes, vehicle picks, weapon
          loadouts, money plans and full completion tracking.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Link
            key={feature.title}
            href={feature.href}
            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.07]"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-pink-500/30 bg-pink-500/10 text-4xl shadow-[0_0_25px_rgba(236,72,153,0.15)]">
                {feature.icon}
              </div>

              <span
                className={
                  feature.status === "Live"
                    ? "rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300"
                    : "rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-bold text-pink-300"
                }
              >
                {feature.status}
              </span>
            </div>

            <h3 className="text-2xl font-black text-white">
              {feature.title}
            </h3>

            <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-400">
              {feature.desc}
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-sm font-bold text-gray-300">
                Open module
              </span>

              <span className="text-xl text-pink-400 transition group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}