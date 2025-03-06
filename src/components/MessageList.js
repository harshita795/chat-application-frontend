import React from "react";

const MessageList = ({ messages, user }) => {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message ${
            msg.sender === user.username ? "sent" : "received"
          }`}
        >
          <strong>{msg.sender}: </strong>
          {msg.message}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
