import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ThemeSelector } from './components/ThemeSelector';
import { Header } from './components/Header';
import { BrandingSection } from './components/BrandingSection';
import { ColorPalette } from './components/ColorPalette';
import { ButtonsSection } from './components/ButtonsSection';
import { FormsSection } from './components/FormsSection';
import { CardsSection } from './components/CardsSection';
import { AlertsSection } from './components/AlertsSection';
import { StructureSection } from './components/StructureSection';
import { TemplatesSection } from './components/TemplatesSection';

const CarouselContainer = () => {
    const { activeSection } = useTheme();

    const sections = [
        <BrandingSection />,
        <ColorPalette />,
        <ButtonsSection />,
        <FormsSection />,
        <CardsSection />,
        <AlertsSection />,
        <StructureSection />,
        <TemplatesSection />
    ];

    return (
        <div className="overflow-hidden relative w-full">
            <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSection * 100}%)` }}
            >
                {sections.map((section, index) => (
                    <div key={index} className="min-w-full w-full flex-shrink-0 px-1">
                        {section}
                    </div>
                ))}
            </div>
        </div>
    );
};

const AppContent = () => {
    return (
        <>
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap');`}
            </style>
            <div className="min-h-screen bg-[#121212] text-neutral-200 p-6 md:p-12 transition-colors duration-500" style={{ fontFamily: "'Onest', sans-serif" }}>
                <div className="max-w-5xl mx-auto space-y-12">
                    <ThemeSelector />
                    <Header />
                    <CarouselContainer />
                </div>
            </div>
        </>
    );
};

const App = () => (
    <ThemeProvider>
        <AppContent />
    </ThemeProvider>
);

export default App;