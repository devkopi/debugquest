// src/components/Message.tsx
import React from "react";

type MessageProps = {
    author: "user" | "client";
    text: string;
};

const Message: React.FC<MessageProps> = ({ author, text }) => {
    return (
        <div className="flex items-center mb-2">
            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mr-2">
                {author === "user" ? "U" : "C"}
            </div>

            {/* Texto */}
            <div className="px-3 py-2 rounded bg-gray-300 text-black">
                {text}
            </div>
        </div>
    );
};

export default Message;
