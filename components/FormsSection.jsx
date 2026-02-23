import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Upload, Check, ChevronDown, AlertCircle, Search, User, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const FormGroup = ({ label, children, error }) => (
    <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-400 ml-1">{label}</label>
        {children}
        {error && <p className="text-xs text-red-500 ml-1 flex items-center gap-1"><AlertCircle size={12} /> {error}</p>}
    </div>
);

export const FormsSection = () => {
    const { theme } = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const [toggle1, setToggle1] = useState(true);
    const [toggle2, setToggle2] = useState(false);

    const inputBase = `w-full bg-[#181818] border border-neutral-800 text-white text-sm rounded-xl focus:ring-2 focus:border-transparent block p-3 outline-none transition-all placeholder-neutral-600 ${theme.ring}`;

    return (
        <section className="space-y-10 pb-12">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className={`p-1.5 rounded-lg ${theme.transBg} ${theme.pText}`}>
                    <User size={20} />
                </span>
                Galería de Formularios
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Columna 1: Inputs Básicos */}
                <div className="space-y-6">
                    <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2">Campos de Texto</h3>
                    
                    <FormGroup label="Correo Electrónico">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail size={18} className="text-neutral-500 group-focus-within:text-white transition-colors" />
                            </div>
                            <input type="email" className={`${inputBase} pl-10`} placeholder="usuario@destiny.ui" />
                        </div>
                    </FormGroup>

                    <FormGroup label="Contraseña">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock size={18} className="text-neutral-500 group-focus-within:text-white transition-colors" />
                            </div>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                className={`${inputBase} pl-10 pr-10`} 
                                placeholder="••••••••" 
                            />
                            <button 
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-500 hover:text-white transition-colors"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </FormGroup>

                    <FormGroup label="Búsqueda Global">
                        <div className="relative">
                            <input type="text" className={`${inputBase} rounded-full pl-4 pr-10`} placeholder="Buscar comandos..." />
                            <div className={`absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none ${theme.pText}`}>
                                <Search size={18} />
                            </div>
                        </div>
                    </FormGroup>

                    <div className="grid grid-cols-2 gap-4">
                        <FormGroup label="Fecha">
                            <div className="relative">
                                <input type="date" className={`${inputBase} text-neutral-400`} />
                                <Calendar size={16} className="absolute right-3 top-3.5 text-neutral-500 pointer-events-none" />
                            </div>
                        </FormGroup>
                        <FormGroup label="Selección">
                            <div className="relative">
                                <select className={`${inputBase} appearance-none cursor-pointer`}>
                                    <option>Opción 1</option>
                                    <option>Opción 2</option>
                                    <option>Opción 3</option>
                                </select>
                                <ChevronDown size={16} className="absolute right-3 top-3.5 text-neutral-500 pointer-events-none" />
                            </div>
                        </FormGroup>
                    </div>
                </div>

                {/* Columna 2: Controles y Upload */}
                <div className="space-y-6">
                    <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2">Controles y Archivos</h3>

                    {/* Toggles */}
                    <div className="flex items-center justify-between p-4 bg-[#181818] rounded-xl border border-neutral-800">
                        <span className="text-sm font-medium text-white">Notificaciones Push</span>
                        <button 
                            onClick={() => setToggle1(!toggle1)}
                            className={`w-12 h-6 rounded-full transition-colors relative ${toggle1 ? theme.pBg : 'bg-neutral-700'}`}
                        >
                            <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${toggle1 ? 'left-7' : 'left-1'}`}></div>
                        </button>
                    </div>

                    {/* Checkboxes & Radios */}
                    <div className="space-y-3 p-4 bg-[#181818] rounded-xl border border-neutral-800">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 border-2 border-neutral-600 rounded flex items-center justify-center transition-colors ${theme.pBorder} group-hover:border-white bg-[#121212]`}>
                                <Check size={14} className={`${theme.pText}`} />
                            </div>
                            <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Acepto los términos y condiciones</span>
                        </label>
                        
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 rounded-full border-2 border-neutral-600 flex items-center justify-center ${theme.pBorder} group-hover:border-white bg-[#121212]`}>
                                <div className={`w-2.5 h-2.5 rounded-full ${theme.pBg}`}></div>
                            </div>
                            <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Opción Predeterminada</span>
                        </label>
                    </div>

                    {/* File Upload */}
                    <FormGroup label="Subir Archivos">
                        <div className={`border-2 border-dashed border-neutral-700 rounded-xl p-8 text-center hover:border-neutral-500 hover:bg-[#181818] transition-all cursor-pointer group`}>
                            <div className={`w-12 h-12 mx-auto rounded-full bg-[#242424] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${theme.pText}`}>
                                <Upload size={24} />
                            </div>
                            <p className="text-sm text-white font-medium">Haz clic o arrastra archivos aquí</p>
                            <p className="text-xs text-neutral-500 mt-1">Soporta JPG, PNG, PDF (Max 10MB)</p>
                        </div>
                    </FormGroup>

                    {/* Validation States */}
                    <FormGroup label="Input con Error" error="El nombre de usuario ya existe">
                        <input type="text" className={`w-full bg-red-900/10 border border-red-500/50 text-white text-sm rounded-xl block p-3 outline-none focus:border-red-500 transition-all`} defaultValue="UsuarioDuplicado" />
                    </FormGroup>
                </div>
            </div>
        </section>
    );
};