import Link from "next/link";

const moduleLinks = [
  { label: "Ask Vice AI", href: "/ai" },
  { label: "Interactive Map", href: "/map" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Weapons", href: "/weapons" },
  { label: "Money Guide", href: "/money" },
  { label: "100% Tracker", href: "/tracker" },
  { label: "Saved Hub", href: "/saved" },
  { label: "Roadmap", href: "/roadmap" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link
            href="/"
            className="text-2xl font-black tracking-widest text-white transition hover:text-pink-400"
          >
            VICEHUB AI
          </Link>

          <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
            An independent GTA 6 companion hub with AI help, map tools,
            vehicles, weapons, money guides, saved items, roadmap and 100%
            tracking.
          </p>

          <div className="mt-5 inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-300">
            Beta Prototype
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            Modules
          </h3>

          <div className="mt-5 grid gap-3">
            {moduleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.35em] text-pink-300">
            Disclaimer
          </h3>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            ViceHub AI is a fan-made independent companion project. It is not
            affiliated with Rockstar Games, Take-Two Interactive or Grand Theft
            Auto.
          </p>

          <p className="mt-5 text-xs text-gray-600">
            © 2026 ViceHub AI. Built as a beta concept.
          </p>
        </div>
      </div>
    </footer>
  );
}