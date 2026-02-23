import React from 'react';
import { Home, Map, Ticket, User, Bell, ChevronRight, Settings, LogOut, X, MoreHorizontal, GripHorizontal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const StructureSection = () => {
    const { theme } = useTheme();

    return (
        <section className="space-y-10 pb-12">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className={`p-1.5 rounded-lg ${theme.transBg} ${theme.pText}`}>
                    <GripHorizontal size={20} />
                </span>
                Navegación y Estructura
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Columna 1: Navegación */}
                <div className="space-y-8">
                    {/* Bottom Navigation */}
                    <div>
                        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2 mb-4">Bottom Navigation (Glass)</h3>
                        <div className="bg-[#121212] p-4 rounded-xl border border-neutral-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop')] opacity-20 bg-cover bg-center"></div>
                            
                            {/* Componente Bottom Nav */}
                            <div className="relative mt-10 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 flex justify-between items-center shadow-2xl">
                                <button className={`flex flex-col items-center gap-1 ${theme.pText}`}>
                                    <Home size={24} fill="currentColor" className="opacity-20" />
                                    <div className={`w-1 h-1 rounded-full ${theme.pBg}`}></div>
                                </button>
                                <button className="flex flex-col items-center gap-1 text-neutral-500 hover:text-white transition-colors">
                                    <Map size={24} />
                                </button>
                                <div className="relative -top-8">
                                    <button className={`w-14 h-14 rounded-full ${theme.grad} flex items-center justify-center text-white shadow-lg shadow-purple-900/40 border-4 border-[#121212]`}>
                                        <Ticket size={24} />
                                    </button>
                                </div>
                                <button className="flex flex-col items-center gap-1 text-neutral-500 hover:text-white transition-colors">
                                    <Bell size={24} />
                                </button>
                                <button className="flex flex-col items-center gap-1 text-neutral-500 hover:text-white transition-colors">
                                    <User size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tabs / Segmented Control */}
                    <div>
                        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2 mb-4">Pestañas (Tabs)</h3>
                        <div className="space-y-4">
                            {/* Pill Tabs */}
                            <div className="bg-[#181818] p-1 rounded-xl border border-neutral-800 inline-flex">
                                <button className={`px-4 py-2 rounded-lg text-sm font-bold text-white shadow-sm ${theme.pBg}`}>
                                    Próximos
                                </button>
                                <button className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-500 hover:text-white transition-colors">
                                    Pasados
                                </button>
                                <button className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-500 hover:text-white transition-colors">
                                    Guardados
                                </button>
                            </div>

                            {/* Underline Tabs */}
                            <div className="flex gap-6 border-b border-neutral-800">
                                <button className={`pb-3 text-sm font-bold text-white border-b-2 ${theme.pBorder.replace('border-opacity-50', '')}`}>
                                    General
                                </button>
                                <button className="pb-3 text-sm font-medium text-neutral-500 hover:text-white transition-colors">
                                    Detalles
                                </button>
                                <button className="pb-3 text-sm font-medium text-neutral-500 hover:text-white transition-colors">
                                    Reseñas
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* List Items */}
                    <div>
                        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2 mb-4">Elementos de Lista</h3>
                        <div className="bg-[#181818] border border-neutral-800 rounded-xl overflow-hidden divide-y divide-neutral-800">
                            <div className="p-4 flex items-center justify-between hover:bg-[#242424] cursor-pointer transition-colors group">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-neutral-800 text-white group-hover:bg-neutral-700">
                                        <Settings size={20} />
                                    </div>
                                    <span className="text-white font-medium">Configuración</span>
                                </div>
                                <ChevronRight size={18} className="text-neutral-600" />
                            </div>
                            <div className="p-4 flex items-center justify-between hover:bg-[#242424] cursor-pointer transition-colors group">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-red-900/20 text-red-500 group-hover:bg-red-900/30">
                                        <LogOut size={20} />
                                    </div>
                                    <span className="text-red-400 font-medium">Cerrar Sesión</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna 2: Modales y Sheets */}
                <div className="space-y-8">
                    {/* Modal Dialog */}
                    <div>
                        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2 mb-4">Modal / Diálogo</h3>
                        <div className="relative h-64 bg-[#121212] rounded-xl border border-neutral-800 flex items-center justify-center overflow-hidden">
                            {/* Backdrop */}
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                            
                            {/* Modal Content */}
                            <div className="relative bg-[#181818] border border-neutral-700 rounded-2xl p-6 w-64 shadow-2xl transform scale-100">
                                <div className="w-10 h-10 rounded-full bg-red-900/20 flex items-center justify-center text-red-500 mb-4 mx-auto">
                                    <LogOut size={20} />
                                </div>
                                <h4 className="text-white font-bold text-center mb-2">¿Salir del evento?</h4>
                                <p className="text-neutral-400 text-xs text-center mb-6">Perderás tu lugar en la fila virtual si sales ahora.</p>
                                <div className="flex gap-2">
                                    <button className="flex-1 py-2 rounded-lg bg-neutral-800 text-white text-xs font-bold hover:bg-neutral-700">Cancelar</button>
                                    <button className="flex-1 py-2 rounded-lg bg-red-600 text-white text-xs font-bold hover:bg-red-500">Salir</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Sheet */}
                    <div>
                        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2 mb-4">Bottom Sheet (Panel Inferior)</h3>
                        <div className="relative h-80 bg-[#121212] rounded-xl border border-neutral-800 overflow-hidden flex flex-col justify-end">
                            {/* Map Background */}
                            <div className="absolute inset-0 bg-[#1a1a1a]" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                            
                            {/* Sheet Content */}
                            <div className="relative bg-[#181818] rounded-t-2xl p-5 border-t border-neutral-700 shadow-2xl">
                                <div className="w-12 h-1.5 bg-neutral-700 rounded-full mx-auto mb-6"></div>
                                
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Opciones de Mapa</h4>
                                        <p className="text-neutral-400 text-xs">Personaliza tu vista</p>
                                    </div>
                                    <button className="p-1 rounded-full hover:bg-neutral-800 text-neutral-400"><X size={20} /></button>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#242424] border border-neutral-800">
                                        <span className="text-white text-sm font-medium">Mostrar Tráfico</span>
                                        <div className={`w-10 h-6 rounded-full ${theme.pBg} relative`}>
                                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#242424] border border-neutral-800">
                                        <span className="text-white text-sm font-medium">Modo Satélite</span>
                                        <div className="w-10 h-6 rounded-full bg-neutral-700 relative">
                                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skeletons (Loading) */}
                    <div>
                        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2 mb-4">Estados de Carga (Skeletons)</h3>
                        <div className="bg-[#181818] p-4 rounded-xl border border-neutral-800 space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-neutral-800 animate-pulse"></div>
                                <div className="space-y-2 flex-1">
                                    <div className="h-4 bg-neutral-800 rounded w-3/4 animate-pulse"></div>
                                    <div className="h-3 bg-neutral-800 rounded w-1/2 animate-pulse"></div>
                                </div>
                            </div>
                            <div className="h-32 bg-neutral-800 rounded-xl animate-pulse"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};