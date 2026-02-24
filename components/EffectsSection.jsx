import React from 'react';
import { Box, Layers, Zap, Maximize } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const EffectsSection = () => {
    const { theme } = useTheme();

    return (
        <section className="space-y-10 pb-12">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className={`p-1.5 rounded-lg ${theme.transBg} ${theme.pText}`}>
                    <Box size={20} />
                </span>
                Efectos Visuales y Profundidad 3D
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Columna 1: Sombras y Elevación */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2 mb-6">Sombras de Neón (Glow)</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div className={`h-24 rounded-2xl bg-[#181818] border border-neutral-800 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(147,51,234,0.3)] transition-transform hover:-translate-y-1`}>
                                <span className="text-purple-400 font-bold">Purple Glow</span>
                            </div>
                            <div className={`h-24 rounded-2xl bg-[#181818] border border-neutral-800 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(37,99,235,0.3)] transition-transform hover:-translate-y-1`}>
                                <span className="text-blue-400 font-bold">Blue Glow</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2 mb-6">Niveles de Elevación</h3>
                        <div className="flex flex-col gap-6">
                            {/* Nivel 1 */}
                            <div className="bg-[#181818] p-4 rounded-xl border border-neutral-800 shadow-md flex justify-between items-center">
                                <span className="text-neutral-400">Nivel 1 (Flat)</span>
                                <span className="text-xs font-mono text-neutral-600">shadow-md</span>
                            </div>
                            {/* Nivel 2 */}
                            <div className="bg-[#202020] p-4 rounded-xl border border-neutral-700 shadow-xl flex justify-between items-center transform -translate-y-1">
                                <span className="text-neutral-200">Nivel 2 (Floating)</span>
                                <span className="text-xs font-mono text-neutral-600">shadow-xl</span>
                            </div>
                            {/* Nivel 3 */}
                            <div className="bg-[#282828] p-4 rounded-xl border border-neutral-600 shadow-2xl flex justify-between items-center transform -translate-y-2 shadow-black/50">
                                <span className="text-white font-bold">Nivel 3 (Pop-out)</span>
                                <span className="text-xs font-mono text-neutral-600">shadow-2xl</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna 2: 3D y Profundidad */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2 mb-6">Efecto 3D (Perspectiva)</h3>
                        <div className="flex justify-center py-8" style={{ perspective: '1000px' }}>
                            <div 
                                className="relative w-48 h-64 transition-all duration-500 group cursor-pointer"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Card Container with Hover Effect */}
                                <div className="w-full h-full transition-transform duration-500 group-hover:[transform:rotateY(12deg)_rotateX(12deg)]">
                                    {/* Card Face */}
                                    <div className={`absolute inset-0 rounded-2xl ${theme.grad} p-1 shadow-2xl shadow-purple-900/40`}>
                                        <div className="bg-[#121212] w-full h-full rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                                            <Zap className="text-white" size={32} />
                                            <div>
                                                <h4 className="text-white font-bold text-xl">Destiny</h4>
                                                <p className="text-neutral-400 text-xs mt-1">Premium Access</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Floating Element (Z-Index simulation) */}
                                    <div 
                                        className="absolute -right-4 -bottom-4 bg-white text-black font-bold px-4 py-2 rounded-lg shadow-xl transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"
                                        style={{ transform: 'translateZ(20px)' }}
                                    >
                                        3D
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-xs text-neutral-500 mt-4">Pasa el mouse para ver la rotación</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2 mb-6">Profundidad Interior (Inset)</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#0a0a0a] p-6 rounded-xl shadow-inner border border-neutral-800 flex items-center justify-center">
                                <span className="text-neutral-500 font-medium">Hundido (Input)</span>
                            </div>
                            <div className="bg-[#181818] p-6 rounded-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border-t border-black/50 flex items-center justify-center">
                                <span className="text-neutral-400 font-medium">Pressed State</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};