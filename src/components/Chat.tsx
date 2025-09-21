import React from "react";
import Message from "./Message";
import Options from "./Options";


// Tipo de mensaje
type MessageType = {
    id: string;
    author: "user" | "client";
    text: string;
}

// Tipo de opción
type Option = {
    id: string;
    text: string;
}

// Props que recibe el componente Chat
type ChatProps = {
    messages: MessageType[]; // Lista de mensajes
    options: Option[]; // Lista de opciones disponibles
    onSelect: (id: string) => void; // Función que se llama al seleccionar una opción
}

const Chat: React.FC<ChatProps> = ({ messages, options, onSelect }) => {
    return (
        <div className="flex flex-col h-full max-w-md mx-auto border rounded-2xl p-4 bg-white shadow">
            {/* Área de mensajes */}
            <div className="flex-1 overflow-y-auto mb-4">
                {messages.map((msg) => (
                    <Message key={msg.id} author={msg.author} text={msg.text} />
                ))}
            </div>

            {/* Área de opciones */}
            <Options options={options} onSelect={onSelect} />
        </div>
    );
}

export default Chat;