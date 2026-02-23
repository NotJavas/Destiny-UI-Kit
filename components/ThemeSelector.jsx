import React from 'react';
import { Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeSelector = () => {
    const { theme, activeSection, setActiveSection } = useTheme();

    const components = [
        "Concepto de Branding",
        "Gradientes y Acentos",
        "Botones",
        "Formularios",
        "Tarjetas",
        "Alertas y Etiquetas"
    ];

    return (
        <div className="p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center justify-between sticky top-4 z-50 card bg-[#181818] border border-neutral-800 rounded-xl shadow-xl">
            <div className="flex items-center gap-3">
                <Layers className={theme.pText} size={24} />
                <span className="font-bold text-white text-lg">Selector de Componentes:</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                {components.map((component, index) => {
                    const isActive = activeSection === index;
                    const activeClasses = `${theme.grad} text-white shadow-lg transform scale-105 border-transparent`;
                    const inactiveClasses = "bg-[#242424] text-neutral-400 hover:text-white hover:bg-[#2a2a2a] border border-neutral-800";

                    return (
                        <button
                            key={index}
                            onClick={() => setActiveSection(index)}
                            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${isActive ? activeClasses : inactiveClasses}`}
                        >
                            {component}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};