"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "vice";
  text: string;
};

const quickPrompts = [
  "How do I make money fast?",
  "Best vehicle to buy first?",
  "Where should I start?",
  "Help me with weapons",
];

function getViceReply(question: string) {
  const q = question.toLowerCase();

  if (q.includes("money") || q.includes("cash") || q.includes("earn")) {
    return "Money plan: focus on high-value missions first, avoid buying expensive cars early, save for income assets, and only upgrade weapons you actually use. Soon I will calculate the best route based on your progress.";
  }

  if (q.includes("vehicle") || q.includes("car") || q.includes("bike")) {
    return "Vehicle advice: your first priority should be speed + handling, not just looks. In the full version I will compare cars by price, speed, unlock level and Vice Score.";
  }

  if (q.includes("weapon") || q.includes("gun") || q.includes("loadout")) {
    return "Weapon plan: keep one close-range weapon, one long-range option and one explosive tool. Later I will show best loadouts for missions, police chases and online activities.";
  }

  if (q.includes("map") || q.includes("where") || q.includes("location")) {
    return "Map help: soon I will connect to the ViceHub interactive map and show missions, secrets, collectibles and important locations directly inside the hub.";
  }

  if (q.includes("start") || q.includes("next") || q.includes("plan")) {
    return "Smart plan: finish early story missions, collect easy rewards, avoid wasting cash, then unlock vehicles and weapons in the right order. Later I will build a personal step-by-step plan for your save.";
  }

  return "Good question. I am still a prototype, but the goal is clear: I will become a GTA 6 assistant that gives fast answers, money plans, mission help, vehicle advice and 100% completion guidance.";
}

export default function AskViceChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "vice",
      text: "Welcome to ViceHub. Ask me anything about GTA 6. I am still a prototype, but every version will get smarter.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openChat = () => setOpen(true);

    window.addEventListener("open-ask-vice", openChat);

    return () => {
      window.removeEventListener("open-ask-vice", openChat);
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function sendMessage(value?: string) {
    const message = (value ?? input).trim();

    if (!message) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: message },
      { role: "vice", text: getViceReply(message) },
    ]);

    setInput("");
    setOpen(true);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-[calc(100vw-3rem)] max-w-[400px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 shadow-[0_0_45px_rgba(236,72,153,0.25)]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-pink-400">
                Vice AI
              </p>
              <h3 className="text-xl font-black text-white">Ask Vice</h3>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/10 px-3 py-1 text-gray-300 hover:bg-white/10"
            >
              ✕
            </button>
          </div>

          <div className="max-h-[320px] space-y-3 overflow-y-auto px-5 py-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl bg-pink-600 px-4 py-3 text-sm text-white"
                    : "mr-auto max-w-[85%] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200"
                }
              >
                {message.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="space-y-3 border-t border-white/10 p-4">
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300 hover:border-pink-500/60 hover:text-white"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") sendMessage();
                }}
                placeholder="Ask Vice..."
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-pink-500/60"
              />

              <button
                onClick={() => sendMessage()}
                className="rounded-2xl bg-pink-600 px-4 py-3 text-sm font-bold text-white hover:bg-pink-500"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(true)}
        className="rounded-2xl bg-pink-600 px-6 py-4 font-black text-white shadow-[0_0_35px_rgba(236,72,153,0.35)] transition hover:scale-105 hover:bg-pink-500"
      >
        🤖 Ask Vice
      </button>
    </div>
  );
}