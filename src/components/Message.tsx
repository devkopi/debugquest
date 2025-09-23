// src/components/Message.tsx
import React from "react";

type MessageProps = {
    author: "user" | "client";
    text: string;
};

const Message: React.FC<MessageProps> = ({ author, text }) => {
  return (
    <div className={`bubble ${author === 'user' ? 'user' : 'client'}`}>{text}</div>
  );
};

export default Message;
