import BackgroundGlow from "../components/BackgroundGlow";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const vehicles = [
  {
    name: "Neon Vortex",
    type: "Sports Car",
    price: "$145,000",
    speed: 92,
    handling: 86,
    value: 88,
    score: 9.1,
    bestFor: "Fast early-game driving",
  },
  {
    name: "Coastal GT",
    type: "Super Car",
    price: "$320,000",
    speed: 96,
    handling: 82,
    value: 74,
    score: 8.8,
    bestFor: "High speed city routes",
  },
  {
    name: "Palm Runner",
    type: "Motorbike",
    price: "$48,000",
    speed: 84,
    handling: 94,
    value: 92,
    score: 9.0,
    bestFor: "Traffic escape and shortcuts",
  },
  {
    name: "Vice Cruiser",
    type: "SUV",
    price: "$90,000",
    speed: 68,
    handling: 72,
    value: 80,
    score: 7.8,
    bestFor: "Safe missions and durability",
  },
  {
    name: "Marina Blade",
    type: "Boat",
    price: "$210,000",
    speed: 81,
    handling: 76,
    value: 70,
    score: 7.6,
    bestFor: "Water routes and island travel",
  },
  {
    name: "Street Phantom",
    type: "Muscle Car",
    price: "$115,000",
    speed: 88,
    handling: 74,
    value: 84,
    score: 8.4,
    bestFor: "Style, power and street races",
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

export default function VehiclesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-pink-400">
            Vehicle Database
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Find the perfect ride.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Compare vehicles by speed, handling, value and Vice Score. This is
            a demo database until real GTA 6 data becomes available.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-pink-500/60 hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-cyan-300">{vehicle.type}</p>
                  <h2 className="mt-1 text-2xl font-black">{vehicle.name}</h2>
                </div>

                <div className="rounded-2xl border border-pink-500/30 bg-pink-500/10 px-3 py-2 text-center">
                  <p className="text-xs text-pink-300">Vice Score</p>
                  <p className="text-xl font-black text-white">
                    {vehicle.score}
                  </p>
                </div>
              </div>

              <p className="mb-5 text-sm text-gray-400">
                Best for: {vehicle.bestFor}
              </p>

              <div className="mb-5 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                <p className="text-sm text-gray-400">Estimated price</p>
                <p className="text-xl font-bold text-white">{vehicle.price}</p>
              </div>

              <div className="space-y-4">
                <StatBar label="Speed" value={vehicle.speed} />
                <StatBar label="Handling" value={vehicle.handling} />
                <StatBar label="Value" value={vehicle.value} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}