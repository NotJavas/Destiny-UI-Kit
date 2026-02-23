import React from 'react';
import { MapPin, Calendar, Star, Flame, Users, ArrowRight, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const CardsSection = () => {
    const { theme } = useTheme();

    return (
        <section className="space-y-10 pb-12">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className={`p-1.5 rounded-lg ${theme.transBg} ${theme.pText}`}>
                    <MapPin size={20} />
                </span>
                Galería de Tarjetas (Eventos & Nightlife)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* 1. Tarjeta de Evento Principal (Hero Card) */}
                <div className="group relative h-[400px] rounded-2xl overflow-hidden shadow-2xl transition-all hover:shadow-purple-900/20 hover:-translate-y-1">
                    {/* Background Image Placeholder */}
                    <div className="absolute inset-0 bg-neutral-800">
                        <img 
                            src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1000&auto=format&fit=crop" 
                            alt="Event" 
                            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent`}></div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-md bg-white/10 border border-white/20`}>
                            <Flame size={12} className="text-orange-500" fill="currentColor" /> Trending
                        </div>
                        <h3 className="text-3xl font-black text-white leading-tight">Neon Nights Festival</h3>
                        <p className="text-neutral-300 text-sm line-clamp-2">
                            La fiesta electrónica más grande del año. DJs internacionales, show de luces y experiencia inmersiva.
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-neutral-400 pt-2">
                            <span className="flex items-center gap-1"><Calendar size={14} /> 24 Oct, 22:00</span>
                            <span className="flex items-center gap-1"><MapPin size={14} /> Arena CDMX</span>
                        </div>

                        <button className={`w-full mt-4 py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 group-hover:gap-4 transition-all ${theme.grad}`}>
                            Reservar Entrada <ArrowRight size={18} />
                        </button>
                    </div>

                    {/* Floating Date Badge */}
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 text-center text-white">
                        <span className="block text-xs font-bold uppercase">Oct</span>
                        <span className="block text-2xl font-black">24</span>
                    </div>
                </div>

                {/* 2. Tarjeta de Lugar (Compacta) */}
                <div className="bg-[#181818] border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all group flex flex-col">
                    <div className="h-48 relative overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop" 
                            alt="Club" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                            <span className={`px-2 py-1 rounded-md text-xs font-bold bg-black/60 text-white backdrop-blur-sm border border-white/10`}>
                                Rooftop Bar
                            </span>
                        </div>
                        <button className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white hover:bg-red-500 hover:text-white transition-colors backdrop-blur-sm">
                            <Heart size={16} />
                        </button>
                    </div>
                    
                    <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white">Sky Bar Polanco</h3>
                                <div className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                                    <Star size={14} fill="currentColor" /> 4.8
                                </div>
                            </div>
                            <p className="text-neutral-400 text-sm flex items-center gap-1 mb-4">
                                <MapPin size={14} /> A 1.2 km de ti
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                            <div className="flex items-center gap-2">
                                <div className={`flex -space-x-2`}>
                                    <div className="w-8 h-8 rounded-full bg-neutral-700 border-2 border-[#181818]"></div>
                                    <div className="w-8 h-8 rounded-full bg-neutral-600 border-2 border-[#181818]"></div>
                                    <div className="w-8 h-8 rounded-full bg-neutral-500 border-2 border-[#181818] flex items-center justify-center text-[10px] text-white font-bold">+40</div>
                                </div>
                                <span className="text-xs text-neutral-400">Aquí ahora</span>
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${theme.transBg} ${theme.pText} flex items-center gap-1`}>
                                <Flame size={12} fill="currentColor" /> Muy Concurrido
                            </span>
                        </div>
                    </div>
                </div>

                {/* 3. Tarjeta de Zona de Calor (Heatmap Alert) */}
                <div className="space-y-6">
                    {/* Heatmap Card */}
                    <div className={`p-6 rounded-2xl border border-neutral-800 bg-[#181818] relative overflow-hidden group`}>
                        <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-20 blur-[40px] ${theme.pBg}`}></div>
                        
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`p-3 rounded-xl ${theme.grad} text-white shadow-lg`}>
                                <Flame size={24} fill="currentColor" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Zona en Tendencia</h4>
                                <p className="text-xs text-neutral-400">Actividad inusual detectada</p>
                            </div>
                        </div>
                        
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-neutral-400">Roma Norte</span>
                                <span className="text-green-400 font-bold flex items-center gap-1">
                                    <Users size={14} /> +850 personas
                                </span>
                            </div>
                            <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                                <div className={`h-full w-[85%] rounded-full ${theme.grad}`}></div>
                            </div>
                            <p className="text-xs text-neutral-500 mt-2">
                                El tráfico de personas ha aumentado un 40% en la última hora.
                            </p>
                        </div>

                        <button className={`w-full mt-5 py-2 rounded-lg text-sm font-bold border border-neutral-700 hover:bg-neutral-800 text-white transition-colors`}>
                            Ver en Mapa
                        </button>
                    </div>

                    {/* Mini Event Card */}
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-[#181818] border border-neutral-800 hover:border-neutral-600 transition-colors cursor-pointer">
                        <div className="w-16 h-16 rounded-lg bg-neutral-800 overflow-hidden flex-shrink-0">
                            <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">After Party Exclusivo</h4>
                            <p className="text-xs text-neutral-400 mt-1">Solo con invitación • 02:00 AM</p>
                        </div>
                        <button className={`ml-auto p-2 rounded-full hover:bg-white/10 ${theme.pText}`}>
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};