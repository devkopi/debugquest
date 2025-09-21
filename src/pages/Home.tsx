import React, { useState } from "react";
import Chat from "../components/Chat";

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

const Home: React.FC = () => {
    // Mensajes iniciales (mock)
    const [messages, setMessages] = useState<MessageType[]>([
        { id: "1", author: "client", text: "Hola, tengo un problema con mi login." },
        { id: "2", author: "user", text: "Claro, ¿puedes darme más detalles?" },
    ]);

    // Opciones iniciales (mock)
    const [options, setOptions] = useState<Option[]>([
        { id: "a", text: "Revisar si el servidor está activo" },
        { id: "b", text: "Preguntar si el usuario recuerda su contraseña" },
        { id: "c", text: "Decir que no es tu problema 😅" },
    ]);

    // Que pasa al seleccionar una opción
    const handleSelect = (id: string) => {
        // Buscamos la opción seleccionada
        const selected = options.find((opt) => opt.id === id);

        if (!selected) return;

        // Agregar la respuesta del usuario al chat
        setMessages((prev) => [
            ...prev,
            { id: Date.now().toString(), author: "user", text: selected.text },
        ]);

        // De momento borramos las opciones tras seleccionar una
        setOptions([]);
    };

    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center">
            <Chat messages={messages} options={options} onSelect={handleSelect} />
        </div>
    );
}

export default Home;