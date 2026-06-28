import Link from "next/link";
import BackgroundGlow from "./components/BackgroundGlow";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.6em] text-pink-400">
          404 Error
        </p>

        <h1 className="text-7xl font-black md:text-9xl">
          Lost in Vice.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          This page does not exist yet. Head back to ViceHub and continue with
          AI, map tools, vehicles, weapons, money guides and 100% tracking.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-2xl bg-pink-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_35px_rgba(236,72,153,0.35)] transition hover:scale-105 hover:bg-pink-500"
          >
            Back Home
          </Link>

          <Link
            href="/ai"
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:border-cyan-400/50 hover:bg-white/[0.08]"
          >
            Open AI Hub
          </Link>
        </div>

        <div className="mt-14 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Tip
          </p>

          <p className="mt-3 text-sm text-gray-400">
            Use the navbar above to jump back to any active ViceHub module.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}