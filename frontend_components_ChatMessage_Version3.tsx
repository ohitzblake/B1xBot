import React from "react";

interface ChatMessageProps {
  sender: "user" | "assistant";
  message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, message }) => {
  // Simple code block detection (triple backticks)
  const parts = message.split(/```/);
  return (
    <div className={`chat-message ${sender}`}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <pre className="code-block" key={i}>{part}</pre>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </div>
  );
};

export default ChatMessage;