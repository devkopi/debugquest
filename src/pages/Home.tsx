import React, { useState } from "react";
import Chat from "../components/Chat";

type MessageType = {
    id: string;
    author: "user" | "client";
    text: string;
};
type Option = {
    id: string;
    text: string;
};
const mockTickets = [
    { id: 't1', title: 'Problema con login', lastMsg: 'No puedo acceder a mi cuenta', unread: 2 },
    { id: 't2', title: 'Error en pago', lastMsg: 'El pago fue rechazado', unread: 0 },
    { id: 't3', title: 'Consulta API', lastMsg: '¿Cómo uso el endpoint X?', unread: 1 },
];

const Home: React.FC = () => {
    const [selectedTicket, setSelectedTicket] = useState(mockTickets[0]);
    const [messages, setMessages] = useState<MessageType[]>([
        { id: '1', author: 'client', text: 'Hola, tengo un problema con mi login.' },
        { id: '2', author: 'user', text: 'Claro, ¿puedes darme más detalles?' },
    ]);
    const [options, setOptions] = useState<Option[]>([
        { id: 'a', text: 'Revisar si el servidor está activo' },
        { id: 'b', text: 'Preguntar si el usuario recuerda su contraseña' },
        { id: 'c', text: 'Decir que no es tu problema 😅' },
    ]);

    const handleSelect = (id: string) => {
        const selected = options.find((opt) => opt.id === id);
        if (!selected) return;
        setMessages((prev) => [
            ...prev,
            { id: Date.now().toString(), author: 'user', text: selected.text },
        ]);
        setOptions([]);
    };

    return (
        <div className="main-layout">
            {/* Panel Tickets */}
            <aside className="tickets-panel">
                <div className="tickets-header">Tickets</div>
                <div className="flex-1 overflow-y-auto">
                    {mockTickets.map((ticket) => (
                        <button
                            key={ticket.id}
                            onClick={() => setSelectedTicket(ticket)}
                            className={`ticket-item${selectedTicket.id === ticket.id ? ' active' : ''}`}
                        >
                            <div className="ticket-content">
                                <span className="ticket-title">{ticket.title}</span>
                                <span className="ticket-lastmsg">{ticket.lastMsg}</span>
                                {ticket.unread > 0 && (
                                    <span className="ticket-unread">{ticket.unread}</span>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </aside>

            {/* Panel Chat */}
            <main className="chat-panel">
                <div className="chat-box">
                    <div className="chat-header">{selectedTicket.title}</div>
                    <div className="flex-1 flex flex-col">
                        <Chat messages={messages} options={options} onSelect={handleSelect} />
                    </div>
                </div>
            </main>

            {/* Panel X canal */}
            <aside className="details-panel">
                <div className="details-header">X canal</div>
                <div className="details-content">
                    <p>Selecciona un ticket para ver sus detalles aquí.<br/>Puedes mostrar instrucciones, hints, historial, etc.</p>
                </div>
            </aside>
        </div>
    );
}

export default Home;