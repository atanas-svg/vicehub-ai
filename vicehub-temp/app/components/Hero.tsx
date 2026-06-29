import Link from "next/link";
import ModuleAskButton from "./ModuleAskButton";

const heroStats = [
  { label: "Modules", value: "9" },
  { label: "AI Hub", value: "Live" },
  { label: "Build", value: "Beta" },
];

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-16 text-center md:pt-24">
      <div className="mx-auto mb-6 inline-flex items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-bold text-pink-300">
        <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
        Independent GTA 6 companion hub
      </div>

      <h1 className="mx-auto max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl">
        MASTER GTA 6 WITH{" "}
        <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
          VICE AI
        </span>
      </h1>

      <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
        ViceHub AI helps you plan money, vehicles, weapons, map routes,
        dashboard progress, saved items, roadmap updates and 100% completion
        from one clean futuristic hub.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/ai"
          className="rounded-2xl bg-pink-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_35px_rgba(236,72,153,0.35)] transition hover:scale-105 hover:bg-pink-500"
        >
          Open AI Hub
        </Link>

        <Link
          href="/dashboard"
          className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-8 py-4 text-sm font-black uppercase tracking-widest text-cyan-300 transition hover:scale-105 hover:bg-cyan-400/20"
        >
          Open Dashboard
        </Link>

        <Link
          href="/saved"
          className="rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:border-cyan-400/50 hover:bg-white/[0.08]"
        >
          Open Saved Hub
        </Link>
      </div>

      <div className="mt-5">
        <ModuleAskButton prompt="Give me a smart beginner plan for GTA 6." />
      </div>

      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-4">
        {heroStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
          >
            <p className="text-3xl font-black text-white">{stat.value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gray-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
          Current Status
        </p>

        <p className="mt-3 text-sm leading-7 text-gray-400">
          ViceHub AI is currently a beta prototype with demo data. Real GTA 6
          guides, locations and stats can be added when reliable gameplay data
          becomes available.
        </p>
      </div>
    </section>
  );
}