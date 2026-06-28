"use client";

export default function OpenAskViceButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("open-ask-vice"))}
      className="mt-10 rounded-2xl bg-pink-600 px-8 py-4 text-lg font-bold transition hover:scale-105 hover:bg-pink-500"
    >
      🤖 Open Ask Vice
    </button>
  );
}