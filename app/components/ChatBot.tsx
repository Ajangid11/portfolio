"use client";

import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, RotateCcw, Send, X } from "lucide-react";

const API_URL =
  process.env.NEXT_PUBLIC_CHATBOT_API_URL ??
  "https://floral-salad-8da9.anjalijangid855.workers.dev";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hi! I'm Anjali's assistant. Ask me about her services, projects, or how to hire her. English, Hinglish or Hindi — all fine!",
};

const SUGGESTIONS = ["What services do you offer?", "Show me her projects", "How can I hire her?"];

/** The Worker replies with { response: "..." }; stay liberal in what we accept. */
function extractReply(data: unknown): string | null {
  if (!data || typeof data !== "object") return null;
  const d = data as Record<string, unknown>;
  if (typeof d.response === "string" && d.response.trim()) return d.response;
  if (d.response && typeof d.response === "object") {
    const inner = (d.response as Record<string, unknown>).response;
    if (typeof inner === "string" && inner.trim()) return inner;
  }
  if (Array.isArray(data)) {
    for (let i = data.length - 1; i >= 0; i--) {
      const t = extractReply(data[i]);
      if (t) return t;
    }
  }
  return null;
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open ]);

  const send = async (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text || sending) return;
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setSending(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.filter((m) => m !== GREETING) }),
      });
      const data = await res.json().catch(() => null);
      const reply = extractReply(data);
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            reply ??
            "Sorry, I'm having trouble replying right now. You can reach Anjali directly at anjijangid8@gmail.com.",
        },
      ]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't connect just now. Please try again, or email Anjali at anjijangid8@gmail.com.",
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-4 z-[90] flex w-[calc(100vw-2rem)] max-w-sm origin-bottom-right flex-col overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/60 backdrop-blur-xl transition-all duration-300 sm:right-6 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
        style={{ backgroundColor: "rgba(11, 16, 29, 0.92)", height: "min(540px, calc(100dvh - 8.5rem))" }}
        role="dialog"
        aria-label="Chat with Anjali's assistant"
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{ background: "linear-gradient(120deg, #7C5CFF 0%, #00C2FF 55%, #00E5A0 110%)" }}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-black text-white">
            AJ
          </span>
          <div className="flex-1 leading-tight">
            <p className="text-sm font-bold text-white">Anjali&apos;s Assistant</p>
            <p className="flex items-center gap-1.5 text-[11px] text-white/85">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Online — replies instantly
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setMessages([GREETING]);
              setInput("");
            }}
            aria-label="Start a new chat"
            title="Start a new chat"
            className="rounded-full p-1.5 text-white transition-colors hover:bg-white/20"
          >
            <RotateCcw size={16} />
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="rounded-full p-1.5 text-white transition-colors hover:bg-white/20"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] whitespace-pre-wrap px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "rounded-2xl rounded-br-md text-white"
                    : "rounded-2xl rounded-bl-md bg-white/[0.07] text-[#E9EDF5]"
                }`}
                style={
                  m.role === "user"
                    ? { background: "linear-gradient(120deg, #7C5CFF 0%, #00C2FF 90%)" }
                    : undefined
                }
              >
                {m.content}
              </div>
            </div>
          ))}
          {sending && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-white/[0.07] px-4 py-3">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#E9EDF5]/70"
                    style={{ animationDelay: `${d * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Suggestions */}
        <div className="flex flex-wrap gap-2 px-4 pb-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => send(s)}
              disabled={sending}
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-[#E9EDF5]/85 transition-colors hover:border-[#00C2FF]/60 hover:text-white disabled:opacity-50"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
          className="flex items-center gap-2 border-t border-white/10 px-3 py-3"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about services, projects..."
            className="flex-1 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-[#E9EDF5] outline-none placeholder:text-[#E9EDF5]/40 focus:border-[#00C2FF]/60"
          />
          <button
            type="submit"
            disabled={sending || !input.trim()}
            aria-label="Send message"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-opacity hover:opacity-90 disabled:opacity-40"
            style={{ background: "linear-gradient(120deg, #7C5CFF 0%, #00C2FF 55%, #00E5A0 110%)" }}
          >
            <Send size={16} />
          </button>
        </form>
      </div>

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with Anjali's assistant"}
        className="fixed bottom-5 right-4 z-[90] flex h-14 w-14 items-center justify-center rounded-full text-white transition-transform hover:scale-105 sm:right-6"
        style={{
          background: "linear-gradient(120deg, #7C5CFF 0%, #00C2FF 55%, #00E5A0 110%)",
          boxShadow: "0px 10px 28px rgba(0, 194, 255, 0.4)",
        }}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}
