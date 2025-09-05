import React, { useState } from "react";

interface PromptBarProps {
  onSend: (prompt: string) => void;
  loading: boolean;
}

const PromptBar: React.FC<PromptBarProps> = ({ onSend, loading }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    onSend(prompt);
    setPrompt("");
  };

  return (
    <form className="prompt-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your prompt..."
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading || !prompt.trim()}>
        {loading ? "Thinking..." : "Send"}
      </button>
    </form>
  );
};

export default PromptBar;
