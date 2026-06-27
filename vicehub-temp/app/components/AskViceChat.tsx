"use client";

import { useEffect, useState } from "react";

const quickPrompts = [
  "How do I make money fast?",
  "Best vehicle to buy first?",
  "Help me plan my next move",
];

export default function AskViceChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "vice",
      text: "Welcome to ViceHub. Ask me anything about GTA 6. For now I am a demo assistant, but soon I will become the real Vice AI.",
    },
  ]);

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("open-ask-vice", openChat);

    return () => {
      window.removeEventListener("open-ask-vice", openChat);
    };
  }, []);

  function sendMessage(value?: string) {
    const message = (value ?? input).trim();

    if (!message) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: message },
      {
        role: "vice",
        text: "Good question. Soon I will use real GTA 6 data and give you a step-by-step plan. This is the first working chat prototype.",
      },
    ]);

    setInput("");
    setOpen(true);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-[calc(100vw-3rem)] max-w-[380px] overflow-hidden rounded-3xl border border-white/10 bg-black/85 shadow-[0_0_50px_rgba(236,72,153,0.25)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-pink-400">
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
          </div>

          <div className="space-y-2 border-t border-white/10 p-4">
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