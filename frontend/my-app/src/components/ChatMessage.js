// src/components/ChatMessage.js
import React from "react";

const ChatMessage = ({ message, isUserMessage }) => {
  return (
    <>
      <div
        className={`m-0 ${
          isUserMessage
            ? "flex flex-row justify-end"
            : "flex flex-row justify-start"
        }`}
        style={{
          textAlign: isUserMessage ? "right" : "left",
        }}
      >
        <p
          className={`rounded-lg px-4 py-3 ${
            !isUserMessage ? "bg-blue-600 text-white" : "bg-gray-300"
          }  w-auto max-w-4xl`}
        >
          {message}
        </p>
      </div>
      <div
        className={`mx-0 ${
          isUserMessage
            ? "flex flex-row justify-end"
            : "flex flex-row justify-start"
        }`}
        style={{
          textAlign: isUserMessage ? "right" : "left",
        }}
      >
        {isUserMessage && (
          <span>
            <i>AI assistent</i>
          </span>
        )}
        {!isUserMessage && (
          <span>
            <i>you</i>
          </span>
        )}
      </div>
    </>
  );
};

export default ChatMessage;
