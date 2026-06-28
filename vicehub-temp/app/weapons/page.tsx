import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import ModuleAskButton from "../components/ModuleAskButton";
import Navbar from "../components/Navbar";

const weapons = [
  {
    name: "Street Compact",
    type: "Pistol",
    price: "$2,500",
    damage: 45,
    accuracy: 78,
    range: 52,
    fireRate: 70,
    score: 7.6,
    bestFor: "Early missions and backup weapon",
  },
  {
    name: "Vice SMG",
    type: "SMG",
    price: "$12,000",
    damage: 58,
    accuracy: 70,
    range: 60,
    fireRate: 92,
    score: 8.7,
    bestFor: "Close-range fights and fast movement",
  },
  {
    name: "Coastal Rifle",
    type: "Assault Rifle",
    price: "$28,000",
    damage: 76,
    accuracy: 82,
    range: 80,
    fireRate: 75,
    score: 9.1,
    bestFor: "All-around missions and police fights",
  },
  {
    name: "Marina Shotgun",
    type: "Shotgun",
    price: "$18,500",
    damage: 94,
    accuracy: 55,
    range: 35,
    fireRate: 42,
    score: 8.2,
    bestFor: "Close combat and building fights",
  },
  {
    name: "Longview Sniper",
    type: "Sniper Rifle",
    price: "$45,000",
    damage: 95,
    accuracy: 92,
    range: 98,
    fireRate: 25,
    score: 8.9,
    bestFor: "Long-range missions and stealth",
  },
  {
    name: "Boomstick Launcher",
    type: "Explosive",
    price: "$75,000",
    damage: 100,
    accuracy: 50,
    range: 75,
    fireRate: 20,
    score: 8.5,
    bestFor: "Vehicles, chaos and heavy targets",
  },
];

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs text-gray-400">
        <span>{label}</span>
        <span>{value}/100</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-400"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function WeaponsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-pink-400">
            Weapons Database
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Build the best loadout.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Compare weapons by damage, accuracy, range, fire rate and Vice
            Score. This is a demo database until real GTA 6 data becomes
            available.
          </p>

          <ModuleAskButton prompt="Help me build the best GTA 6 weapon loadout." />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {weapons.map((weapon) => (
            <div
              key={weapon.name}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-cyan-300">{weapon.type}</p>
                  <h2 className="mt-1 text-2xl font-black">{weapon.name}</h2>
                </div>

                <div className="rounded-2xl border border-pink-500/30 bg-pink-500/10 px-3 py-2 text-center">
                  <p className="text-xs text-pink-300">Vice Score</p>
                  <p className="text-xl font-black text-white">
                    {weapon.score}
                  </p>
                </div>
              </div>

              <p className="mb-5 text-sm text-gray-400">
                Best for: {weapon.bestFor}
              </p>

              <div className="mb-5 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                <p className="text-sm text-gray-400">Estimated price</p>
                <p className="text-xl font-bold text-white">{weapon.price}</p>
              </div>

              <div className="space-y-4">
                <StatBar label="Damage" value={weapon.damage} />
                <StatBar label="Accuracy" value={weapon.accuracy} />
                <StatBar label="Range" value={weapon.range} />
                <StatBar label="Fire Rate" value={weapon.fireRate} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <AskViceChat />
      <Footer />
    </main>
  );
}