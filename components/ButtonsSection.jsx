import React from 'react';
import { Play, Settings, Loader2, Trash2, Plus, ArrowRight, Download, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ButtonGroup = ({ title, children }) => (
    <div className="space-y-4">
        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2">{title}</h3>
        <div className="flex flex-wrap gap-4 items-center">
            {children}
        </div>
    </div>
);

export const ButtonsSection = () => {
    const { theme } = useTheme();

    const baseClasses = "font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#121212]";

    return (
        <section className="space-y-10 pb-12">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className={`p-1.5 rounded-lg ${theme.transBg} ${theme.pText}`}>
                    <Play size={20} fill="currentColor" />
                </span>
                Galería de Botones
            </h2>

            {/* 1. Estilos Principales (Brand) */}
            <ButtonGroup title="Estilos de Marca (Brand)">
                {/* Gradient Fill */}
                <button className={`${baseClasses} px-6 py-2.5 text-white shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 hover:-translate-y-0.5 ${theme.grad} ${theme.ring}`}>
                    <Play size={18} fill="currentColor" /> Explorar
                </button>

                {/* Solid Primary */}
                <button className={`${baseClasses} px-6 py-2.5 text-white hover:bg-opacity-90 ${theme.pBg} ${theme.ring}`}>
                    Confirmar
                </button>

                {/* Outline Brand */}
                <button className={`${baseClasses} px-6 py-2.5 border bg-transparent hover:bg-white/5 ${theme.pBorder} ${theme.pText} ${theme.ring}`}>
                    Detalles
                </button>

                {/* Ghost Brand */}
                <button className={`${baseClasses} px-4 py-2.5 bg-transparent hover:bg-white/5 ${theme.pText}`}>
                    Cancelar
                </button>
            </ButtonGroup>

            {/* 2. Monocromáticos */}
            <ButtonGroup title="Monocromático (Alto Contraste)">
                {/* Solid White */}
                <button className={`${baseClasses} px-6 py-2.5 bg-white text-black hover:bg-neutral-200 shadow-lg shadow-white/10`}>
                    <Download size={18} /> Descargar
                </button>

                {/* Solid Black (Deep) */}
                <button className={`${baseClasses} px-6 py-2.5 bg-[#0a0a0a] text-neutral-200 border border-neutral-800 hover:border-neutral-600 hover:text-white`}>
                    <Settings size={18} /> Configuración
                </button>

                {/* Outline White */}
                <button className={`${baseClasses} px-6 py-2.5 border border-neutral-600 text-white hover:border-white hover:bg-white/5`}>
                    Documentación
                </button>
            </ButtonGroup>

            {/* 3. Tamaños */}
            <ButtonGroup title="Tamaños">
                <button className={`${baseClasses} px-3 py-1.5 text-xs bg-[#242424] text-white border border-neutral-700 hover:border-neutral-500`}>
                    Pequeño
                </button>
                <button className={`${baseClasses} px-5 py-2.5 text-sm bg-[#242424] text-white border border-neutral-700 hover:border-neutral-500`}>
                    Normal
                </button>
                <button className={`${baseClasses} px-8 py-3.5 text-lg bg-[#242424] text-white border border-neutral-700 hover:border-neutral-500`}>
                    Grande
                </button>
            </ButtonGroup>

            {/* 4. Estados y Funcionales */}
            <ButtonGroup title="Estados y Funcionales">
                {/* Loading */}
                <button disabled className={`${baseClasses} px-6 py-2.5 text-white/50 bg-[#1a1a1a] border border-neutral-800 cursor-not-allowed`}>
                    <Loader2 size={18} className="animate-spin" /> Procesando
                </button>

                {/* Disabled */}
                <button disabled className={`${baseClasses} px-6 py-2.5 text-neutral-600 bg-[#1a1a1a] border border-neutral-800 cursor-not-allowed`}>
                    Deshabilitado
                </button>

                {/* Destructive */}
                <button className={`${baseClasses} px-6 py-2.5 text-red-400 border border-red-900/30 bg-red-900/10 hover:bg-red-900/20 hover:border-red-500/50`}>
                    <Trash2 size={18} /> Eliminar
                </button>

                {/* Icon Only (Circular) */}
                <button className={`p-3 rounded-full text-white shadow-lg hover:scale-110 active:scale-95 transition-transform ${theme.grad}`}>
                    <Plus size={24} />
                </button>
            </ButtonGroup>

            {/* 5. Glassmorphism Special */}
            <ButtonGroup title="Especial: Glassmorphism">
                <button className={`${baseClasses} px-6 py-2.5 text-white backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 shadow-xl`}>
                    Glass Button
                </button>
                <button className={`${baseClasses} px-6 py-2.5 text-white backdrop-blur-md bg-black/40 border border-white/5 hover:bg-black/60`}>
                    Dark Glass
                </button>
            </ButtonGroup>
        </section>
    );
};