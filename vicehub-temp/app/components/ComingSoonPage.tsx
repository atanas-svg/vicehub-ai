import BackgroundGlow from "./BackgroundGlow";
import Navbar from "./Navbar";

type ComingSoonPageProps = {
  label: string;
  title: string;
  description: string;
  features: string[];
};

export default function ComingSoonPage({
  label,
  title,
  description,
  features,
}: ComingSoonPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto flex min-h-[75vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.5em] text-pink-400">
          {label}
        </p>

        <h1 className="text-5xl font-black md:text-7xl">{title}</h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          {description}
        </p>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-left text-gray-300"
            >
              ✦ {feature}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}