// src/components/ChatInput.js
import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import styles from "./Chat.module.css";

const ChatInput = ({ onSendMessage }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    onSendMessage(input);
    setInput("");
  };

  return (
    <form className="form-chat" onSubmit={handleSubmit}>
      <input
        className="input-chat px-10 py-2 rounded-full bg-gray-200"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <Button colorScheme="green" type="submit">
        Send
      </Button>
    </form>
  );
};

export default ChatInput;
