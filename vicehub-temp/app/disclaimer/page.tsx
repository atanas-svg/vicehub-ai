import Link from "next/link";
import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const points = [
  {
    title: "Independent fan project",
    desc: "ViceHub AI is a fan-made companion concept and is not affiliated with Rockstar Games, Take-Two Interactive or Grand Theft Auto.",
  },
  {
    title: "No official GTA 6 data",
    desc: "Current vehicles, weapons, map pins, money strategies and tracker tasks are demo data created for prototype purposes.",
  },
  {
    title: "No official map or assets",
    desc: "ViceHub AI does not use an official GTA 6 map, official screenshots, logos or copyrighted game assets.",
  },
  {
    title: "Real data later",
    desc: "Reliable public gameplay information can be added later when GTA 6 data becomes available from trustworthy sources.",
  },
];

export default function DisclaimerPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-pink-400">
            Disclaimer
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Fan-made. Independent. Beta.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            ViceHub AI is built as an independent GTA 6 companion hub concept.
            This page explains what the project is, what it is not, and how demo
            data is handled.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h2 className="text-2xl font-black text-white">{point.title}</h2>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-pink-500/30 bg-pink-500/10 p-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
            Important note
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-300">
            Grand Theft Auto, GTA, GTA 6, GTA VI and related marks belong to
            their respective owners. ViceHub AI is not official and does not
            claim ownership of those brands.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-2xl bg-pink-600 px-6 py-3 text-sm font-black text-white transition hover:bg-pink-500"
            >
              Back Home
            </Link>

            <Link
              href="/roadmap"
              className="rounded-2xl border border-white/10 bg-black/30 px-6 py-3 text-sm font-black text-gray-300 transition hover:border-cyan-400/50 hover:text-white"
            >
              View Roadmap
            </Link>
          </div>
        </div>
      </section>

      <AskViceChat />
      <Footer />
    </main>
  );
}