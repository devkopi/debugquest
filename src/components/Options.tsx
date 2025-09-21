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
        <div className="flex flex-col gap-2 mt-4">
            {options.map((option) => (
                <button
                    key={option.id}
                    onClick={() => onSelect(option.id)} // llamamos a la función con el id de la opción
                    className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                    {option.text}
                </button>
            ))}
        </div>
    )
}

export default Options;