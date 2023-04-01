import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { useRef, useState, useEffect } from "react";
import React from "react";
import styles from "./Chat.module.css";

export default function () {
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  const getDummyResponse = (message) => {
    return `ChatGPT said: ${message}`;
  };

  const sendMessage = (message) => {
    const response = getDummyResponse(message);
    setMessages([
      ...messages,
      { text: message, isUserMessage: true },
      { text: response, isUserMessage: false },
    ]);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="App mx-auto">
      <div className={`chat-wrapper maximized`}>
        <div className="chat-header">
          <h3 className="font-bold">Chat with you assistant</h3>
        </div>
        <>
          <ChatInput className="" onSendMessage={sendMessage} />
          <div className="border-top p-4 chat-container" ref={chatContainerRef}>
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg.text}
                isUserMessage={msg.isUserMessage}
              />
            ))}
          </div>
        </>
      </div>
    </div>
  );
}
