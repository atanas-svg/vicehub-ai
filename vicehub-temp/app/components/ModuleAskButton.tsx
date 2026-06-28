"use client";

type ModuleAskButtonProps = {
  prompt: string;
};

export default function ModuleAskButton({ prompt }: ModuleAskButtonProps) {
  return (
    <button
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent("open-ask-vice", {
            detail: { prompt },
          })
        )
      }
      className="mt-10 rounded-2xl bg-pink-600 px-8 py-4 text-lg font-bold transition hover:scale-105 hover:bg-pink-500"
    >
      🤖 Ask Vice about this module
    </button>
  );
}