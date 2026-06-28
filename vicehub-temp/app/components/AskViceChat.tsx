"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "vice";
  text: string;
};

const quickPrompts = [
  "What should I do first?",
  "How do I make money fast?",
  "Best first vehicle?",
  "Help me reach 100%",
];

function getViceReply(question: string) {
  const q = question.toLowerCase();

  if (
    q.includes("money") ||
    q.includes("cash") ||
    q.includes("earn") ||
    q.includes("rich")
  ) {
    return "Best money plan: start with Story Missions First because it is low risk and fast. Do not buy luxury cars early. Save money for weapons, armor, useful vehicles and upgrades. After that, move to Side Jobs Route for steady income.";
  }

  if (
    q.includes("vehicle") ||
    q.includes("car") ||
    q.includes("bike") ||
    q.includes("ride")
  ) {
    return "Best first vehicle idea: choose something with high value and handling, not only speed. In the demo database, Palm Runner is great for shortcuts and traffic, while Neon Vortex is better for fast early-game driving.";
  }

  if (
    q.includes("weapon") ||
    q.includes("gun") ||
    q.includes("loadout") ||
    q.includes("fight")
  ) {
    return "Recommended starter loadout: one pistol for backup, one SMG for close fights, one rifle for missions, and later one explosive weapon for vehicles. In the demo database, Coastal Rifle is the best all-around choice.";
  }

  if (
    q.includes("map") ||
    q.includes("where") ||
    q.includes("location") ||
    q.includes("secret")
  ) {
    return "The map module will help you find missions, collectibles, vehicle spawns, weapons and safehouses faster. Use filters like Mission, Vehicle, Weapon or Safehouse to focus only on what you need.";
  }

  if (
    q.includes("tracker") ||
    q.includes("100") ||
    q.includes("completion") ||
    q.includes("progress")
  ) {
    return "For 100% completion, follow a clean order: finish story missions, collect easy items, unlock vehicles and weapons, then clean up side activities and achievements. ViceHub Tracker will help you avoid missing anything.";
  }

  if (
    q.includes("start") ||
    q.includes("first") ||
    q.includes("next") ||
    q.includes("plan")
  ) {
    return "Smart start plan: finish early story missions, avoid wasting money, buy useful weapons first, get one reliable vehicle, then start tracking collectibles and side jobs. That gives you progress, money and control.";
  }

  return "Good question. I am still a prototype, but my goal is to become your GTA 6 copilot: money plans, vehicle advice, weapon loadouts, map help and 100% completion guidance in one place.";
}

export default function AskViceChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "vice",
      text: "Welcome to ViceHub. Ask me anything about GTA 6. I can help with money, vehicles, weapons, map locations and 100% completion.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openChat = (event: Event) => {
      setOpen(true);

      const customEvent = event as CustomEvent<{ prompt?: string }>;
      const prompt = customEvent.detail?.prompt;

      if (!prompt || thinking) return;

      setMessages((prev) => [...prev, { role: "user", text: prompt }]);
      setThinking(true);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "vice", text: getViceReply(prompt) },
        ]);
        setThinking(false);
      }, 800);
    };

    window.addEventListener("open-ask-vice", openChat);

    return () => {
      window.removeEventListener("open-ask-vice", openChat);
    };
  }, [thinking]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  function sendMessage(value?: string) {
    const message = (value ?? input).trim();

    if (!message || thinking) return;

    setMessages((prev) => [...prev, { role: "user", text: message }]);
    setInput("");
    setOpen(true);
    setThinking(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "vice", text: getViceReply(message) },
      ]);
      setThinking(false);
    }, 800);
  }

  function clearChat() {
    setMessages([
      {
        role: "vice",
        text: "Chat reset. Ask me about money, vehicles, weapons, the map or 100% completion.",
      },
    ]);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-[calc(100vw-3rem)] max-w-[420px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 shadow-[0_0_45px_rgba(236,72,153,0.25)]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-pink-400">
                Vice AI
              </p>
              <h3 className="text-xl font-black text-white">Ask Vice</h3>
            </div>

            <div className="flex gap-2">
              <button
                onClick={clearChat}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300 hover:bg-white/10"
              >
                Reset
              </button>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 px-3 py-1 text-gray-300 hover:bg-white/10"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="max-h-[340px] space-y-3 overflow-y-auto px-5 py-4">
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

            {thinking && (
              <div className="mr-auto max-w-[85%] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
                <span className="text-pink-400">Vice</span> is thinking...
              </div>
            )}

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
                disabled={thinking}
                className="rounded-2xl bg-pink-600 px-4 py-3 text-sm font-bold text-white hover:bg-pink-500 disabled:cursor-not-allowed disabled:opacity-50"
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