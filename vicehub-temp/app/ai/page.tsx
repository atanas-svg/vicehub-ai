import AskViceChat from "../components/AskViceChat";
import BackgroundGlow from "../components/BackgroundGlow";
import Navbar from "../components/Navbar";
import OpenAskViceButton from "../components/OpenAskViceButton";

export default function AIPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundGlow />
      <Navbar />

      <section className="relative z-10 mx-auto flex min-h-[75vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.5em] text-pink-400">
          Vice AI Assistant
        </p>

        <h1 className="text-5xl font-black md:text-7xl">
          Ask Vice anything.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Your personal GTA 6 assistant for missions, money, vehicles, weapons,
          routes and smart next steps.
        </p>

        <OpenAskViceButton />
      </section>

      <AskViceChat />
    </main>
  );
}