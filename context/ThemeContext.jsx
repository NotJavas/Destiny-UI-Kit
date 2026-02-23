import React, { createContext, useContext, useState } from 'react';
import { themes } from '../config/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Solo usamos el tema 1 (Destiny)
    const theme = themes[1];
    
    // Estado para la navegación del carrusel (0: Branding, 1: Gradientes, etc.)
    const [activeSection, setActiveSection] = useState(0);

    return (
        <ThemeContext.Provider value={{ theme, activeSection, setActiveSection }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);