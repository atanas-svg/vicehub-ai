const features = [
  {
    icon: "🗺️",
    title: "Interactive Map",
    desc: "Find missions, secrets, collectibles and key locations faster.",
    tag: "Map",
  },
  {
    icon: "🤖",
    title: "Ask Vice AI",
    desc: "Get instant GTA 6 help, strategies and smart next steps.",
    tag: "AI",
  },
  {
    icon: "🚗",
    title: "Vehicles",
    desc: "Compare rides by speed, value, unlocks and Vice Score.",
    tag: "Garage",
  },
  {
    icon: "🔫",
    title: "Weapons",
    desc: "Best weapons, stats, unlocks and loadout ideas.",
    tag: "Loadouts",
  },
  {
    icon: "💰",
    title: "Money Guide",
    desc: "Learn the fastest ways to earn and spend smarter.",
    tag: "Money",
  },
  {
    icon: "🏆",
    title: "100% Tracker",
    desc: "Track missions, achievements, collectibles and completion.",
    tag: "Progress",
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative z-10 mx-auto mt-10 max-w-6xl px-6 pb-24">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
          Explore ViceHub
        </p>
        <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
          Everything you need in one hub
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(236,72,153,0.18)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-400/10 opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-4xl">{feature.icon}</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300">
                  {feature.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
              <p className="mt-3 text-gray-400">{feature.desc}</p>

              <button className="mt-6 text-sm font-bold text-pink-400 transition group-hover:text-cyan-300">
                Open module →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}