import React from 'react';
import { Palette, Copy } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ColorPalette = () => {
    const { theme } = useTheme();

    const gradients = [
        { name: "Destiny Primary", classes: "from-purple-600 to-blue-600" },
        { name: "Cosmic Fusion", classes: "from-violet-600 to-indigo-600" },
        { name: "Neon Aurora", classes: "from-emerald-400 to-cyan-500" },
        { name: "Cyber Punk", classes: "from-pink-500 to-rose-500" },
        { name: "Deep Ocean", classes: "from-blue-800 to-indigo-900" },
        { name: "Sunset Mars", classes: "from-orange-500 to-red-600" },
        { name: "Toxic Lime", classes: "from-lime-400 to-green-500" },
        { name: "Royal Gold", classes: "from-amber-300 to-yellow-500" },
        { name: "Midnight", classes: "from-slate-900 to-slate-800" },
        { name: "Mystic Teal", classes: "from-teal-400 to-blue-500" },
        { name: "Electric Violet", classes: "from-purple-500 to-fuchsia-500" },
        { name: "Dark Matter", classes: "from-gray-700 to-gray-900" },
        { name: "Solar Flare", classes: "from-orange-400 to-rose-400" },
        { name: "Berry Smoothie", classes: "from-pink-500 to-purple-500" },
        { name: "Arctic Ice", classes: "from-cyan-300 to-blue-400" }
    ];

    return (
        <section className="space-y-6 pb-12">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className={`p-1.5 rounded-lg transition-colors ${theme.transBg} ${theme.pText}`}>
                    <Palette size={20} />
                </span>
                Galería de Gradientes
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {gradients.map((grad, index) => (
                    <div key={index} className="group relative bg-[#181818] border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                        {/* Visual Gradient Area */}
                        <div className={`h-32 w-full bg-gradient-to-r ${grad.classes} relative`}>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2">
                                    <Copy size={12} /> Copiar CSS
                                </span>
                            </div>
                        </div>
                        
                        {/* Info Area */}
                        <div className="p-4">
                            <h3 className="text-white font-bold text-lg">{grad.name}</h3>
                            <div className="mt-2 space-y-1">
                                <p className="text-xs text-neutral-500 font-mono bg-[#121212] p-1.5 rounded border border-neutral-800 truncate">
                                    bg-gradient-to-r
                                </p>
                                <p className="text-xs text-neutral-400 font-mono truncate">
                                    {grad.classes}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};