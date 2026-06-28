import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import ModuleAskButton from "../components/ModuleAskButton";
import Navbar from "../components/Navbar";

const mapPins = [
  {
    title: "Downtown Mission",
    type: "Mission",
    area: "Vice Downtown",
    icon: "🎯",
    status: "Priority",
    desc: "A key story mission area. Use this zone to start progressing fast.",
  },
  {
    title: "Hidden Package",
    type: "Collectible",
    area: "Ocean Beach",
    icon: "📦",
    status: "Secret",
    desc: "A collectible location preview for future GTA 6 hidden items.",
  },
  {
    title: "Rare Vehicle Spawn",
    type: "Vehicle",
    area: "Port District",
    icon: "🚗",
    status: "Useful",
    desc: "Possible vehicle spawn zone for rare or high-value rides.",
  },
  {
    title: "Weapon Pickup",
    type: "Weapon",
    area: "Back Alley",
    icon: "🔫",
    status: "Combat",
    desc: "Useful weapon pickup location for early missions and fights.",
  },
  {
    title: "Safehouse",
    type: "Safehouse",
    area: "North Vice",
    icon: "🏠",
    status: "Save Point",
    desc: "A future safehouse marker for planning routes and progress.",
  },
];

export default function MapPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-pink-400">
            Interactive Map
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Explore every corner.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            A demo preview of the future ViceHub map. Real GTA 6 locations will
            be added when reliable data becomes available.
          </p>

          <ModuleAskButton prompt="Tell me how the ViceHub interactive map will help me in GTA 6." />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-[#050507] p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(236,72,153,0.20),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(34,211,238,0.16),transparent_35%)]" />

            <svg
              className="absolute inset-0 h-full w-full opacity-80"
              viewBox="0 0 900 620"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M90 130 C170 40, 340 70, 390 155 C455 265, 355 365, 420 465 C475 550, 350 600, 190 555 C70 520, 45 390, 80 300 C105 230, 35 185, 90 130Z"
                fill="rgba(236,72,153,0.10)"
                stroke="rgba(236,72,153,0.28)"
                strokeWidth="2"
              />

              <path
                d="M500 95 C650 40, 810 115, 820 250 C830 390, 700 455, 720 545 C625 590, 490 545, 470 430 C450 310, 390 190, 500 95Z"
                fill="rgba(34,211,238,0.08)"
                stroke="rgba(34,211,238,0.24)"
                strokeWidth="2"
              />

              <path
                d="M155 500 C260 430, 370 420, 520 500 C610 550, 710 535, 800 470"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="10"
                strokeLinecap="round"
              />

              <path
                d="M140 250 C250 230, 340 260, 430 315 C520 370, 625 360, 760 285"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="8"
                strokeLinecap="round"
              />

              <path
                d="M295 95 C330 200, 310 310, 260 420"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="7"
                strokeLinecap="round"
              />

              <path
                d="M620 120 C610 240, 645 360, 690 500"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="7"
                strokeLinecap="round"
              />

              <path
                d="M410 170 C500 210, 565 250, 650 330"
                stroke="rgba(236,72,153,0.22)"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <path
                d="M210 360 C330 350, 455 380, 590 440"
                stroke="rgba(34,211,238,0.18)"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <circle cx="185" cy="230" r="52" fill="rgba(255,255,255,0.035)" />
              <circle cx="625" cy="220" r="68" fill="rgba(255,255,255,0.035)" />
              <circle cx="530" cy="470" r="55" fill="rgba(255,255,255,0.035)" />
            </svg>

            <div className="relative z-10 flex h-full min-h-[470px] flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                    ViceHub Map
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Preview District
                  </h2>
                </div>

                <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-300">
                  Demo
                </span>
              </div>

              <div className="relative flex-1">
                <div className="absolute left-[18%] top-[25%]">
                  <MapPin icon="🎯" label="Mission" />
                </div>

                <div className="absolute left-[62%] top-[18%]">
                  <MapPin icon="📦" label="Secret" />
                </div>

                <div className="absolute left-[45%] top-[52%]">
                  <MapPin icon="🚗" label="Vehicle" />
                </div>

                <div className="absolute left-[72%] top-[66%]">
                  <MapPin icon="🔫" label="Weapon" />
                </div>

                <div className="absolute left-[25%] top-[72%]">
                  <MapPin icon="🏠" label="Safehouse" />
                </div>
              </div>

              <p className="text-sm text-gray-400">
                This is an original visual prototype, not an official GTA 6 map.
                Later this will become a real filterable map with search,
                categories and saved progress.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {mapPins.map((pin) => (
              <div
                key={pin.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.07]"
              >
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{pin.icon}</span>
                    <div>
                      <p className="text-sm text-cyan-300">{pin.type}</p>
                      <h3 className="text-xl font-black">{pin.title}</h3>
                    </div>
                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300">
                    {pin.status}
                  </span>
                </div>

                <p className="text-sm text-pink-300">{pin.area}</p>
                <p className="mt-2 text-sm text-gray-400">{pin.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AskViceChat />
      <Footer />
    </main>
  );
}

function MapPin({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="group flex flex-col items-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-500/40 bg-pink-600 text-xl shadow-[0_0_30px_rgba(236,72,153,0.45)] transition group-hover:scale-110">
        {icon}
      </div>

      <span className="mt-2 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs text-gray-200">
        {label}
      </span>
    </div>
  );
}