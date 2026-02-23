import React, { useState } from 'react';
import { MapPin, Calendar, ArrowLeft, Heart, Share2, User, Lock, Mail, Eye, EyeOff, Navigation, LayoutTemplate, QrCode, Ticket, Settings, Filter, Search, MessageSquare, MoreVertical } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// --- Template: Login Screen ---
const LoginTemplate = ({ theme }) => (
    <div className="w-full max-w-sm mx-auto bg-[#121212] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative h-[600px] flex flex-col">
        <div className="p-8 flex-1 flex flex-col justify-center relative z-10">
            <div className="mb-8 text-center">
                <div className={`w-16 h-16 mx-auto rounded-2xl ${theme.grad} flex items-center justify-center text-white text-3xl font-black mb-4 shadow-lg shadow-purple-900/40`}>
                    D
                </div>
                <h2 className="text-2xl font-bold text-white">Bienvenido</h2>
                <p className="text-neutral-400 text-sm">Ingresa para descubrir tu ciudad</p>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase">Email</label>
                    <div className="relative">
                        <Mail size={16} className="absolute left-3 top-3.5 text-neutral-500" />
                        <input type="email" className={`w-full bg-[#181818] border border-neutral-800 rounded-xl py-3 pl-10 text-white text-sm focus:border-purple-500 outline-none transition-colors`} placeholder="usuario@destiny.app" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase">Contraseña</label>
                    <div className="relative">
                        <Lock size={16} className="absolute left-3 top-3.5 text-neutral-500" />
                        <input type="password" className={`w-full bg-[#181818] border border-neutral-800 rounded-xl py-3 pl-10 text-white text-sm focus:border-purple-500 outline-none transition-colors`} placeholder="••••••••" />
                    </div>
                </div>
                <button className={`w-full py-3.5 rounded-xl font-bold text-white shadow-lg shadow-purple-900/20 mt-4 ${theme.grad}`}>
                    Iniciar Sesión
                </button>
            </div>
        </div>
        <div className={`absolute top-0 left-0 right-0 h-64 opacity-20 blur-[60px] pointer-events-none ${theme.grad}`}></div>
    </div>
);

// --- Template: Map Exploration ---
const MapTemplate = ({ theme }) => (
    <div className="w-full max-w-sm mx-auto bg-[#121212] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative h-[600px] flex flex-col">
        <div className="absolute inset-0 bg-[#1a1a1a] opacity-50" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex flex-col">
                <span className="text-neutral-400 text-xs font-bold uppercase">Ubicación Actual</span>
                <div className="flex items-center gap-1 text-white font-bold">
                    <MapPin size={16} className="text-purple-500" /> Roma Norte, CDMX
                </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                <User size={18} className="text-white" />
            </div>
        </div>

        <div className="absolute top-1/3 left-1/4">
            <div className={`w-4 h-4 rounded-full ${theme.pBg} animate-ping absolute opacity-75`}></div>
            <div className={`w-4 h-4 rounded-full ${theme.pBg} relative border-2 border-white shadow-lg`}></div>
        </div>

        <div className="mt-auto bg-[#181818] rounded-t-3xl p-6 relative z-10 border-t border-neutral-800 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
            <div className="w-12 h-1 bg-neutral-700 rounded-full mx-auto mb-6"></div>
            <div className="flex gap-4">
                <div className="w-20 h-20 rounded-xl bg-neutral-800 overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1570572225617-63b0d4c84b83?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <h3 className="text-white font-bold text-lg">Terraza Catedral</h3>
                    <p className="text-neutral-400 text-sm">Rooftop Bar • $$</p>
                    <div className="flex items-center gap-2 mt-2">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${theme.transBg} ${theme.pText}`}>Abierto</span>
                    </div>
                </div>
            </div>
            <button className={`w-full mt-6 py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 ${theme.grad}`}>
                <Navigation size={18} /> Cómo llegar
            </button>
        </div>
    </div>
);

// --- Template: Event Details ---
const EventTemplate = ({ theme }) => (
    <div className="w-full max-w-sm mx-auto bg-[#121212] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative h-[600px] flex flex-col">
        <div className="h-1/2 relative">
            <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/60"></div>
            <div className="absolute top-6 left-6 z-20">
                <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10"><ArrowLeft size={20} /></button>
            </div>
        </div>

        <div className="flex-1 p-6 -mt-10 relative z-10 bg-gradient-to-t from-[#121212] via-[#121212] to-transparent">
            <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-black text-white leading-tight w-3/4">Neon Future Festival</h2>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-2 text-center min-w-[60px]">
                    <span className="block text-xs text-neutral-400 uppercase font-bold">Oct</span>
                    <span className="block text-xl font-black text-white">24</span>
                </div>
            </div>
            <div className="flex items-center gap-2 text-neutral-400 text-sm mb-6">
                <MapPin size={14} /> Auditorio BlackBox
            </div>
            <div className="mt-auto pt-4 border-t border-neutral-800 flex items-center justify-between gap-4">
                <div>
                    <span className="block text-xs text-neutral-500">Precio Total</span>
                    <span className="block text-xl font-black text-white">$450</span>
                </div>
                <button className={`flex-1 py-3 rounded-xl font-bold text-white shadow-lg shadow-purple-900/20 ${theme.grad}`}>
                    Comprar Ticket
                </button>
            </div>
        </div>
    </div>
);

// --- Template: Profile ---
const ProfileTemplate = ({ theme }) => (
    <div className="w-full max-w-sm mx-auto bg-[#121212] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative h-[600px] flex flex-col">
        <div className="p-6 pb-0">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Mi Perfil</h2>
                <Settings size={20} className="text-neutral-400" />
            </div>
            
            <div className="flex items-center gap-4 mb-8">
                <div className={`w-20 h-20 rounded-full p-1 ${theme.grad}`}>
                    <div className="w-full h-full rounded-full bg-[#181818] p-1">
                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" className="w-full h-full rounded-full object-cover" />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Alex Design</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded bg-gradient-to-r from-yellow-400 to-yellow-600 text-black`}>GOLD MEMBER</span>
                </div>
            </div>

            <div className="flex justify-between gap-4 mb-8">
                <div className="flex-1 bg-[#181818] rounded-xl p-3 text-center border border-neutral-800">
                    <span className="block text-xl font-black text-white">12</span>
                    <span className="text-xs text-neutral-500">Eventos</span>
                </div>
                <div className="flex-1 bg-[#181818] rounded-xl p-3 text-center border border-neutral-800">
                    <span className="block text-xl font-black text-white">4</span>
                    <span className="text-xs text-neutral-500">Tickets</span>
                </div>
                <div className="flex-1 bg-[#181818] rounded-xl p-3 text-center border border-neutral-800">
                    <span className="block text-xl font-black text-white">85</span>
                    <span className="text-xs text-neutral-500">Puntos</span>
                </div>
            </div>
        </div>

        <div className="flex-1 bg-[#181818] rounded-t-3xl p-6 border-t border-neutral-800">
            <h4 className="text-sm font-bold text-white mb-4">Próximos Eventos</h4>
            <div className="space-y-4">
                <div className="flex gap-4 items-center bg-[#121212] p-3 rounded-xl border border-neutral-800">
                    <div className="w-12 h-12 rounded-lg bg-neutral-800 flex-shrink-0 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <h5 className="text-white font-bold text-sm">Techno Bunker</h5>
                        <p className="text-xs text-neutral-500">Mañana, 22:00</p>
                    </div>
                    <button className={`p-2 rounded-full ${theme.transBg} ${theme.pText}`}>
                        <QrCode size={16} />
                    </button>
                </div>
            </div>
        </div>
    </div>
);

// --- Template: Ticket (QR) ---
const TicketTemplate = ({ theme }) => (
    <div className="w-full max-w-sm mx-auto bg-[#121212] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative h-[600px] flex flex-col">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
        
        <div className="p-6 relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
                <button className="w-10 h-10 rounded-full bg-[#181818] border border-neutral-700 flex items-center justify-center text-white">
                    <ArrowLeft size={20} />
                </button>
                <h2 className="text-white font-bold">Tu Ticket</h2>
                <button className="w-10 h-10 rounded-full bg-[#181818] border border-neutral-700 flex items-center justify-center text-white">
                    <Share2 size={20} />
                </button>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex-1 mb-8 flex flex-col relative">
                {/* Ticket Header */}
                <div className={`h-32 ${theme.grad} p-6 flex flex-col justify-between relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
                    <h3 className="text-white font-black text-2xl z-10">Neon Future</h3>
                    <p className="text-white/80 text-sm font-medium z-10">Acceso General • VIP</p>
                </div>
                
                {/* Ticket Body */}
                <div className="flex-1 bg-white p-6 flex flex-col items-center justify-center relative">
                    {/* Cutout Circles */}
                    <div className="absolute -left-4 top-1/2 w-8 h-8 bg-[#121212] rounded-full"></div>
                    <div className="absolute -right-4 top-1/2 w-8 h-8 bg-[#121212] rounded-full"></div>
                    <div className="absolute left-4 right-4 top-1/2 border-t-2 border-dashed border-neutral-200"></div>

                    <div className="mb-8 text-center">
                        <p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Escanear en la entrada</p>
                        <div className="bg-black p-4 rounded-xl">
                            <QrCode size={140} className="text-white" />
                        </div>
                    </div>
                    
                    <div className="w-full flex justify-between text-sm">
                        <div>
                            <span className="block text-neutral-400 text-xs">Fecha</span>
                            <span className="block text-black font-bold">24 Oct</span>
                        </div>
                        <div className="text-right">
                            <span className="block text-neutral-400 text-xs">Hora</span>
                            <span className="block text-black font-bold">22:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>

            <button className={`w-full py-3 rounded-xl font-bold text-white bg-[#181818] border border-neutral-700 hover:bg-[#242424]`}>
                Guardar en Wallet
            </button>
        </div>
    </div>
);

// --- Template: Explore (Feed) ---
const ExploreTemplate = ({ theme }) => (
    <div className="w-full max-w-sm mx-auto bg-[#121212] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative h-[600px] flex flex-col">
        <div className="p-6 pb-2">
            <div className="flex gap-3 mb-6">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-3 text-neutral-500" />
                    <input type="text" className="w-full bg-[#181818] border border-neutral-800 rounded-xl py-2.5 pl-10 text-white text-sm placeholder-neutral-600" placeholder="Buscar eventos..." />
                </div>
                <button className="p-2.5 bg-[#181818] border border-neutral-800 rounded-xl text-white">
                    <Filter size={20} />
                </button>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white whitespace-nowrap ${theme.grad}`}>Para ti</span>
                <span className="px-4 py-1.5 rounded-full text-xs font-bold text-neutral-400 bg-[#181818] border border-neutral-800 whitespace-nowrap">Hoy</span>
                <span className="px-4 py-1.5 rounded-full text-xs font-bold text-neutral-400 bg-[#181818] border border-neutral-800 whitespace-nowrap">Música</span>
                <span className="px-4 py-1.5 rounded-full text-xs font-bold text-neutral-400 bg-[#181818] border border-neutral-800 whitespace-nowrap">Arte</span>
            </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-4 scrollbar-hide">
            {[1, 2].map((i) => (
                <div key={i} className="bg-[#181818] border border-neutral-800 rounded-2xl overflow-hidden">
                    <div className="h-32 relative">
                        <img src={`https://images.unsplash.com/photo-${i === 1 ? '1514525253440-b393452e8d26' : '1540039155795-c26891810360'}?q=80&w=400&auto=format&fit=crop`} className="w-full h-full object-cover" />
                        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-white">
                            $200
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-white font-bold">Electric Dreams</h3>
                        <p className="text-neutral-400 text-xs mt-1 flex items-center gap-1"><MapPin size={12} /> Centro Histórico</p>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Bottom Nav Simulation */}
        <div className="bg-[#181818] border-t border-neutral-800 p-4 flex justify-around text-neutral-500">
            <div className={`${theme.pText}`}><MapPin size={24} /></div>
            <Ticket size={24} />
            <MessageSquare size={24} />
            <User size={24} />
        </div>
    </div>
);

export const TemplatesSection = () => {
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState('login');

    const tabs = [
        { id: 'login', label: 'Login' },
        { id: 'map', label: 'Mapa' },
        { id: 'explore', label: 'Feed' },
        { id: 'event', label: 'Evento' },
        { id: 'ticket', label: 'Ticket' },
        { id: 'profile', label: 'Perfil' },
    ];

    return (
        <section className="space-y-8 pb-12">
            <div className="flex flex-col gap-6 border-b border-neutral-800 pb-6">
                <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className={`p-1.5 rounded-lg ${theme.transBg} ${theme.pText}`}>
                            <LayoutTemplate size={20} />
                        </span>
                        Plantillas de Pantalla
                    </h2>
                    <p className="text-neutral-400 text-sm mt-2">Flujos completos de usuario.</p>
                </div>
                
                <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap border ${
                                activeTab === tab.id 
                                ? `${theme.transBg} ${theme.pText} ${theme.pBorder}` 
                                : 'bg-[#181818] text-neutral-500 border-neutral-800 hover:text-white'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex justify-center py-12 bg-[#0a0a0a] rounded-3xl border border-neutral-900">
                {activeTab === 'login' && <LoginTemplate theme={theme} />}
                {activeTab === 'map' && <MapTemplate theme={theme} />}
                {activeTab === 'event' && <EventTemplate theme={theme} />}
                {activeTab === 'profile' && <ProfileTemplate theme={theme} />}
                {activeTab === 'ticket' && <TicketTemplate theme={theme} />}
                {activeTab === 'explore' && <ExploreTemplate theme={theme} />}
            </div>
        </section>
    );
};