"use client";
import { useState } from "react";

export default function ChatInput({ onSendAction }: { onSendAction: (msg: string) => void }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSendAction(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 border border-black   text-black rounded p-2"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Send
      </button>
    </form>
  );
}
