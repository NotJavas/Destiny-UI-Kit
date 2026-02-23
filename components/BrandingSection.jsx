import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { MapPin, Zap, Users, Smartphone } from 'lucide-react';

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

            {/* Typography & Color Psychology */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {/* Typography */}
                <div className="bg-[#181818] p-6 rounded-2xl border border-neutral-800">
                    <h3 className="text-neutral-500 text-xs font-bold mb-6 uppercase tracking-widest">Tipografía: Onest</h3>
                    <p className="text-neutral-400 text-sm mb-6">
                        Seleccionada por su geometría moderna y alta legibilidad en pantallas móviles, ideal para lectura rápida en entornos nocturnos o en movimiento.
                    </p>
                    <div className="space-y-4 border-l-2 border-neutral-700 pl-4">
                        <div>
                            <span className="text-3xl font-black text-white block">Headline</span>
                            <span className="text-neutral-500 text-xs">Impacto y Atracción</span>
                        </div>
                        <div>
                            <span className="text-xl font-medium text-white block">Body Text</span>
                            <span className="text-neutral-500 text-xs">Claridad en la información</span>
                        </div>
                    </div>
                </div>

                {/* Color Palette Meaning */}
                <div className="space-y-4">
                    <h3 className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-2">Psicología de Color</h3>
                    
                    <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-xl ${theme.pBg} shadow-lg shadow-purple-900/20 flex-shrink-0`}></div>
                        <div>
                            <h4 className="text-white font-bold">Púrpura Neón</h4>
                            <p className="text-neutral-500 text-xs">Representa la vida nocturna, creatividad y exclusividad. Atrae al público joven.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-xl ${theme.sBg} shadow-lg shadow-blue-900/20 flex-shrink-0`}></div>
                        <div>
                            <h4 className="text-white font-bold">Azul Eléctrico</h4>
                            <p className="text-neutral-500 text-xs">Transmite tecnología, confianza y la geolocalización precisa.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-[#121212] border border-neutral-800 flex-shrink-0"></div>
                        <div>
                            <h4 className="text-white font-bold">Fondo Oscuro (Dark Mode)</h4>
                            <p className="text-neutral-500 text-xs">Esencial para reducir la fatiga visual y resaltar el contenido vibrante de los eventos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};