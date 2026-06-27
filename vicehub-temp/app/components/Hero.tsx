"use client";

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center px-6 pt-24 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.5em] text-pink-400">
        GTA 6 Companion
      </p>

      <h1 className="max-w-5xl text-6xl font-black leading-none md:text-8xl">
        MASTER GTA 6 WITH{" "}
        <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
          AI
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg text-gray-300 md:text-xl">
        Everything GTA 6. One place. Powered by AI.
      </p>

      <div className="mt-10 mb-32">
        <button
  onClick={() => window.dispatchEvent(new Event("open-ask-vice"))}
  className="rounded-2xl bg-pink-600 px-8 py-4 text-lg font-bold transition hover:scale-105 hover:bg-pink-500"
>
          🚀 Ask Vice
        </button>
      </div>
    </section>
  );
}