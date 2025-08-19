"use client";
import { useState } from "react";
import ChatInput from "@/components/Chatbot/ui/chat-input";
// import { sendMessage } from "@/lib/sendMessage";
import { RiRobot3Line } from "react-icons/ri";
import {CgProfile} from "react-icons/cg"
import Header from "./ui/header";


export default function Chatbot() {
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);

  async function sendMessage(message: string) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  return data.reply;
}

  const handleSend = async (msg: string) => {
    setMessages((prev) => [...prev, { sender: "user", text: msg }]);

    const reply = await sendMessage(msg);
    setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
  };

  return (
    <>
    
        
    <div className="max-w-lg mx-auto mt-10 border rounded shadow-md bg-white">
      <Header/>

      <div className="h-96 space-x-2 overflow-y-auto border-b mb-2 p-2">
        
        {messages.map((m, i) => (
        
          <div
            key={i}
            className={`my-2 flex items-start space-x-1 ${
              m.sender === "user" ? "justify-end text-black" : "justify-start text-black"
            }`}
          >
             {m.sender=="bot"&&(
              <RiRobot3Line className="w-5 h-5"/>
            )}
               {m.sender=="user"&&(
              <CgProfile className="w-5 h-5"/>
             )}

            <div
      className={`inline-block px-3 py-2 rounded-lg max-w-xs break-words ${
        m.sender === "user"
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-black"
      }`}
    >
             <p>{m.text}</p>             
    </div>
    </div>
        ))}
      </div>
      <ChatInput onSendAction={handleSend} />
    </div>
    </>
  );
}
