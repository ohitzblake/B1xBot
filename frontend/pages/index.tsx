import React, { useState } from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatMessage from "../components/ChatMessage";
import PromptBar from "../components/PromptBar";

interface Chat {
  prompt: string;
  response: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/generate";

const Home: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (prompt: string) => {
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setChats([...chats, { prompt, response: data.result || data.error || "No response" }]);
    } catch (err) {
      setChats([...chats, { prompt, response: "Error contacting server." }]);
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <ChatSidebar chats={chats} />
      <main className="main">
        <div className="messages">
          {chats.map((chat, idx) => (
            <React.Fragment key={idx}>
              <ChatMessage sender="user" message={chat.prompt} />
              <ChatMessage sender="assistant" message={chat.response} />
            </React.Fragment>
          ))}
        </div>
        <PromptBar onSend={handleSend} loading={loading} />
      </main>
    </div>
  );
};

export default Home;
