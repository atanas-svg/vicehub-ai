export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex justify-center">
          <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm font-bold text-pink-300">
            ViceHub AI Beta
          </span>
        </div>

        <p className="text-sm text-gray-400">
          Built as an independent GTA 6 companion hub. Not affiliated with Rockstar Games.
        </p>

        <p className="mt-4 text-xs text-gray-600">
          © 2026 ViceHub AI. Play smarter.
        </p>
      </div>
    </footer>
  );
}