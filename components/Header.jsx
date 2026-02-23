import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const Header = () => {
    const { theme } = useTheme();

    return (
        <header className="border-b border-neutral-800 pb-6">
            <h1 className="text-4xl font-extrabold text-white tracking-tight">
                Destiny <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">UI Kit</span>
            </h1>
            <p className="text-lg text-neutral-400 mt-2">Sistema de Diseño — Conectando experiencias en tiempo real</p>
        </header>
    );
};