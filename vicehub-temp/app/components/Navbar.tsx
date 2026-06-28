import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-6">
      <Link href="/" className="text-2xl font-black tracking-widest text-white">
        VICEHUB AI
      </Link>

      <div className="hidden gap-8 text-gray-300 md:flex">
        <Link href="/ai" className="transition hover:text-pink-400">AI</Link>
        <Link href="/map" className="transition hover:text-pink-400">Map</Link>
        <Link href="/vehicles" className="transition hover:text-pink-400">Vehicles</Link>
        <Link href="/weapons" className="transition hover:text-pink-400">Weapons</Link>
        <Link href="/tracker" className="transition hover:text-pink-400">Tracker</Link>
      </div>
    </nav>
  );
}