import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { MapPin, Zap, Users, Smartphone, Type } from 'lucide-react';

export const BrandingSection = () => {
    const { theme } = useTheme();

    return (
        <section className="space-y-10 pb-12">
            {/* Hero Branding */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 text-center md:text-left space-y-4">
                    <div className={`w-24 h-24 mx-auto md:mx-0 rounded-3xl ${theme.grad} flex items-center justify-center text-white text-5xl font-black shadow-2xl shadow-purple-900/40 rotate-3 hover:rotate-0 transition-transform duration-500`}>
                        D
                    </div>
                    <div>
                        <h2 className="text-4xl font-black text-white tracking-tighter">Destiny</h2>
                        <p className={`text-xl font-bold ${theme.gradText}`}>El Pulso de tu Ciudad</p>
                    </div>
                    <p className="text-neutral-400 leading-relaxed max-w-lg text-sm md:text-base">
                        La plataforma definitiva que conecta la oferta de entretenimiento local con quienes buscan vivirla. 
                        <span className="text-white font-medium"> Geolocalización en tiempo real</span> para eliminar la barrera entre el evento y tu próxima experiencia.
                    </p>
                </div>

                {/* Brand Values / Pillars */}
                <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                    <div className="bg-[#181818] p-4 rounded-xl border border-neutral-800">
                        <MapPin className="text-purple-500 mb-2" size={24} />
                        <h4 className="text-white font-bold text-sm">Inmediatez</h4>
                        <p className="text-neutral-500 text-xs mt-1">Descubrimiento basado en ubicación real.</p>
                    </div>
                    <div className="bg-[#181818] p-4 rounded-xl border border-neutral-800">
                        <Users className="text-blue-500 mb-2" size={24} />
                        <h4 className="text-white font-bold text-sm">Conexión</h4>
                        <p className="text-neutral-500 text-xs mt-1">Uniendo organizadores con su audiencia ideal.</p>
                    </div>
                    <div className="bg-[#181818] p-4 rounded-xl border border-neutral-800">
                        <Zap className="text-yellow-400 mb-2" size={24} />
                        <h4 className="text-white font-bold text-sm">Visibilidad</h4>
                        <p className="text-neutral-500 text-xs mt-1">Escaparate digital para eventos locales.</p>
                    </div>
                    <div className="bg-[#181818] p-4 rounded-xl border border-neutral-800">
                        <Smartphone className="text-pink-500 mb-2" size={24} />
                        <h4 className="text-white font-bold text-sm">Estilo de Vida</h4>
                        <p className="text-neutral-500 text-xs mt-1">Diseñado para nativos digitales (18-28 años).</p>
                    </div>
                </div>
            </div>

            {/* Typography System (Expanded) */}
            <div className="bg-[#181818] rounded-2xl border border-neutral-800 overflow-hidden">
                <div className="p-6 border-b border-neutral-800 flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${theme.transBg} ${theme.pText}`}>
                        <Type size={20} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg">Sistema Tipográfico</h3>
                        <p className="text-neutral-500 text-xs">Familia: <span className="text-white font-mono">Onest</span> (Google Fonts)</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
                    {/* Pesos y Estilos */}
                    <div className="p-8 space-y-6">
                        <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Pesos Disponibles</h4>
                        <div className="space-y-4">
                            <div className="flex items-baseline justify-between group">
                                <span className="text-4xl font-black text-white group-hover:tracking-widest transition-all">Aa</span>
                                <span className="text-neutral-600 font-mono text-xs">Black / 900</span>
                            </div>
                            <div className="flex items-baseline justify-between group">
                                <span className="text-4xl font-bold text-white group-hover:tracking-wider transition-all">Aa</span>
                                <span className="text-neutral-600 font-mono text-xs">Bold / 700</span>
                            </div>
                            <div className="flex items-baseline justify-between group">
                                <span className="text-4xl font-medium text-white group-hover:tracking-wide transition-all">Aa</span>
                                <span className="text-neutral-600 font-mono text-xs">Medium / 500</span>
                            </div>
                            <div className="flex items-baseline justify-between group">
                                <span className="text-4xl font-light text-white">Aa</span>
                                <span className="text-neutral-600 font-mono text-xs">Light / 300</span>
                            </div>
                            <div className="flex items-baseline justify-between group">
                                <span className="text-4xl font-thin text-white opacity-70">Aa</span>
                                <span className="text-neutral-600 font-mono text-xs">Thin / 100</span>
                            </div>
                        </div>
                    </div>

                    {/* Jerarquía y Uso */}
                    <div className="p-8 space-y-8">
                        <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Jerarquía Visual</h4>
                        
                        <div className="space-y-6">
                            <div>
                                <p className="text-xs text-neutral-600 mb-1 font-mono">H1 - Display / Hero</p>
                                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
                                    Vive la Noche
                                </h1>
                            </div>

                            <div>
                                <p className="text-xs text-neutral-600 mb-1 font-mono">H2 - Section Title</p>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">
                                    Eventos Cercanos
                                </h2>
                            </div>

                            <div>
                                <p className="text-xs text-neutral-600 mb-1 font-mono">H3 - Card Title</p>
                                <h3 className="text-xl font-bold text-white">
                                    Festival de Jazz 2024
                                </h3>
                            </div>

                            <div>
                                <p className="text-xs text-neutral-600 mb-1 font-mono">Body - Regular</p>
                                <p className="text-neutral-300 leading-relaxed">
                                    Descubre los mejores eventos en tu ciudad. La música, el arte y la cultura se unen en un solo lugar para crear experiencias inolvidables.
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-neutral-600 mb-1 font-mono">Caption / Label</p>
                                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                                    Solo para mayores de 18 años
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Color Psychology */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#181818] p-6 rounded-xl border border-neutral-800 flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full ${theme.pBg} shadow-lg shadow-purple-900/20 mb-4`}></div>
                    <h4 className="text-white font-bold">Púrpura Neón</h4>
                    <p className="text-neutral-500 text-xs mt-2">Creatividad, Misterio y Vida Nocturna.</p>
                </div>

                <div className="bg-[#181818] p-6 rounded-xl border border-neutral-800 flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full ${theme.sBg} shadow-lg shadow-blue-900/20 mb-4`}></div>
                    <h4 className="text-white font-bold">Azul Eléctrico</h4>
                    <p className="text-neutral-500 text-xs mt-2">Tecnología, Confianza y Geolocalización.</p>
                </div>

                <div className="bg-[#181818] p-6 rounded-xl border border-neutral-800 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#121212] border border-neutral-700 mb-4"></div>
                    <h4 className="text-white font-bold">Dark Mode</h4>
                    <p className="text-neutral-500 text-xs mt-2">Elegancia, Contraste y Menor Fatiga Visual.</p>
                </div>
            </div>
        </section>
    );
};