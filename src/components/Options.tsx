import React from "react";

// Definimos el tipo de una opción individual
type Option = {
    id: string;
    text: string;
}

// Props que recibe el componente Options
type OptionsProps = {
    options: Option[]; // Lista de opciones a mostrar
    onSelect: (id: string) => void; // Función que se llama al seleccionar una opción
}

const Options: React.FC<OptionsProps> = ({ options, onSelect }) => {
    return (
        <div>
            {options.map((option) => (
                <button
                    key={option.id}
                    onClick={() => onSelect(option.id)}
                    className="options-btn"
                >
                    {option.text}
                </button>
            ))}
        </div>
    )
}

export default Options;