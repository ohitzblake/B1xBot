import React from "react";

interface ChatSidebarProps {
  chats: { prompt: string }[];
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ chats }) => (
  <div className="sidebar">
    <h2>B1xAI Chats</h2>
    <ul>
      {chats.map((chat, idx) => (
        <li key={idx}>
          <span role="img" aria-label="chat">💬</span> {chat.prompt.slice(0, 20)}...
        </li>
      ))}
    </ul>
  </div>
);

export default ChatSidebar;
