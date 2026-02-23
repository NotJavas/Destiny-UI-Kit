import React, { useState } from 'react';

import { Bell, Search, Heart, Share2, ChevronRight, Check, X, User, Palette } from 'lucide-react';



// --- Configuration ---

const themes = {

    1: {

        id: 1,

        name: 'Nebulosa',

        desc: 'Morado a Azul',

        grad: 'bg-gradient-to-r from-purple-600 to-blue-600',

        gradHover: 'hover:from-purple-500 hover:to-blue-500',

        gradText: 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400',

        pBg: 'bg-purple-600',

        sBg: 'bg-blue-600',

        pText: 'text-purple-400',

        pBorder: 'border-purple-500/50',

        transBg: 'bg-purple-500/10',

        ring: 'focus:ring-purple-500/50',

    },

    2: {

        id: 2,

        name: 'Miami Vice',

        desc: 'Rosa a Amarillo',

        grad: 'bg-gradient-to-r from-pink-500 to-yellow-400',

        gradHover: 'hover:from-pink-400 hover:to-yellow-300',

        gradText: 'bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-300',

        pBg: 'bg-pink-500',

        sBg: 'bg-yellow-400',

        pText: 'text-pink-400',

        pBorder: 'border-pink-500/50',

        transBg: 'bg-pink-500/10',

        ring: 'focus:ring-pink-500/50',

    },

    3: {

        id: 3,

        name: 'Voltaje',

        desc: 'Amarillo a Rosa',

        grad: 'bg-gradient-to-r from-yellow-400 to-pink-500',

        gradHover: 'hover:from-yellow-300 hover:to-pink-400',

        gradText: 'bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400',

        pBg: 'bg-yellow-400',

        sBg: 'bg-pink-500',

        pText: 'text-yellow-400',

        pBorder: 'border-yellow-400/50',

        transBg: 'bg-yellow-400/10',

        ring: 'focus:ring-yellow-400/50',

    },

    4: {

        id: 4,

        name: 'Ciberpunk',

        desc: 'Cyan a Púrpura',

        grad: 'bg-gradient-to-r from-cyan-500 to-purple-600',

        gradHover: 'hover:from-cyan-400 hover:to-purple-500',

        gradText: 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400',

        pBg: 'bg-cyan-500',

        sBg: 'bg-purple-600',

        pText: 'text-cyan-400',

        pBorder: 'border-cyan-500/50',

        transBg: 'bg-cyan-500/10',

        ring: 'focus:ring-cyan-500/50',

    }

};



// --- Components ---



const ThemeSelector = ({ currentTheme, activeThemeId, onThemeChange }) => (

    <div className={`p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center justify-between sticky top-4 z-50 card`}>

        <div className="flex items-center gap-3">

            <Palette className={currentTheme.pText} size={24} />

            <span className="font-bold text-white">Selector de Gradientes:</span>

        </div>

        <div className="flex flex-wrap gap-2 justify-center">

            {Object.values(themes).map(theme => {

                const isActive = activeThemeId === theme.id;

                const activeClasses = `${theme.grad} text-white shadow-lg transform scale-105 border-transparent`;

                const inactiveClasses = "bg-[#242424] text-neutral-400 hover:text-white hover:bg-[#2a2a2a] border border-neutral-800";


                return (

                    <button

                        key={theme.id}

                        onClick={() => onThemeChange(theme.id)}

                        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isActive ? activeClasses : inactiveClasses}`}

                    >

                        <div className={`w-4 h-4 rounded-full border border-[#181818] ${theme.grad}`}></div>

                        <span className="text-sm">{theme.name}</span>

                    </button>

                );

            })}

        </div>

    </div>

);



const Header = ({ theme }) => (

    <header className="border-b border-neutral-800 pb-6">

        <h1 className="text-4xl font-extrabold text-white tracking-tight">

            Dark Mode <span className={theme.gradText}>{theme.name}</span>

        </h1>

        <p className="text-lg text-neutral-400 mt-2">{theme.desc} — Inspiración Spotify & Terminal</p>

    </header>

);



const ColorPalette = ({ theme }) => (

    <section className="space-y-6">

        <h2 className="text-2xl font-bold text-white flex items-center gap-2">

<span className={`p-1.5 rounded-lg transition-colors ${theme.transBg} ${theme.pText}`}>

<User size={20} />

</span>

            Gradientes y Acentos

        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* Main Gradient */}

            <div className={`h-32 flex flex-col justify-end p-4 card card-hover ${theme.grad} border-none`}>

                <span className="text-white font-bold">Gradiente Principal</span>

                <span className="text-white/70 text-xs font-mono truncate">{theme.grad.replace('bg-gradient-to-r ', '')}</span>

            </div>


            {/* Primary Base */}

            <div className={`h-32 flex flex-col justify-end p-4 card card-hover ${theme.pBg} border-neutral-800`}>

                <span className="text-white font-semibold">Base Primaria</span>

                <span className="text-white/70 text-sm font-mono">{theme.pBg.replace('bg-', '')}</span>

            </div>


            {/* Card Background */}

            <div className={`h-32 flex flex-col justify-end p-4 card card-hover`}>

                <span className="text-white font-semibold">Fondo Tarjetas</span>

                <span className="text-neutral-500 text-sm font-mono">#181818</span>

            </div>


            {/* App Background */}

            <div className={`h-32 flex flex-col justify-end p-4 rounded-2xl shadow-sm transition-all hover:-translate-y-1 bg-[#121212] border border-neutral-800`}>

                <span className="text-white font-semibold">Fondo App</span>

                <span className="text-neutral-500 text-sm font-mono">#121212</span>

            </div>

        </div>

    </section>

);



const ButtonsSection = ({ theme }) => (

    <section className="space-y-6">

        <h2 className="section-title">Botones</h2>

        <div className="flex flex-wrap gap-4 items-center">

            {/* Primary Button */}

            <button className={`px-6 py-2.5 text-white btn ${theme.grad} ${theme.gradHover} ${theme.ring}`}>

                Reproducir Deploy

            </button>


            {/* Icon Button */}

            <button className={`p-3 text-white btn-icon ${theme.grad} ${theme.gradHover} ${theme.ring}`}>

                <Bell size={20} fill="currentColor" />

            </button>



            {/* Secondary Button */}

            <button className="px-6 py-2.5 rounded-full font-bold transition-colors shadow-sm outline-none border border-neutral-800 bg-[#242424] hover:bg-[#2a2a2a] hover:border-neutral-600 text-white">

                Secundario

            </button>



            {/* Outline Button */}

            <button className={`px-6 py-2.5 border border-neutral-700 hover:bg-[#242424] btn ${theme.pText} ${theme.ring}`}>

                Contorno

            </button>



            {/* Text Button */}

            <button className="px-6 py-2.5 rounded-full font-bold transition-colors outline-none flex items-center gap-2 text-neutral-400 hover:text-white">

                Siguiente <ChevronRight size={18} />

            </button>

        </div>

    </section>

);



const UsernameInput = ({ theme }) => (

    <div className="space-y-2">

        <label className="block text-sm font-semibold text-neutral-300">Nombre de Usuario</label>

        <div className="relative">

            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">

                <User size={18} className="text-neutral-500" />

            </div>

            <input

                type="text"

                className={`pl-10 pr-4 py-3 font-medium input-field ${theme.ring}`}

                placeholder="ej. root_admin"

            />

        </div>

    </div>

);



const SearchInput = ({ theme }) => (

    <div className="space-y-2">

        <label className="block text-sm font-semibold text-neutral-300">Búsqueda Global</label>

        <div className="relative">

            <input

                type="text"

                className={`pl-4 pr-10 py-3 input-field ${theme.ring}`}

                placeholder="Buscar en el clúster..."

            />

            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">

                <Search size={18} className={theme.pText} />

            </div>

        </div>

    </div>

);



const Toggles = ({ theme, toggle, setToggle }) => (

    <div className="flex flex-col gap-4 justify-center">

        {/* Toggle Switch */}

        <label className="flex items-center gap-3 cursor-pointer group">

            <div className="relative">

                <input type="checkbox" className="sr-only" checked={toggle} onChange={() => setToggle(!toggle)} />

                <div className={`block w-14 h-8 rounded-full transition-all duration-300 ${toggle ? theme.pBg : 'bg-[#333]'}`}></div>

                <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${toggle ? 'transform translate-x-6' : ''}`}></div>

            </div>

            <span className="text-sm font-medium text-neutral-300">Modo Dios (Root)</span>

        </label>



        {/* Checkbox */}

        <label className="flex items-center gap-3 cursor-pointer">

            <div className={`w-6 h-6 border-2 border-neutral-600 rounded-md flex items-center justify-center bg-[#242424] transition-colors`}>

                <input type="checkbox" className="w-full h-full opacity-0 absolute cursor-pointer peer" />

                <Check size={16} className="text-white hidden peer-checked:block pointer-events-none absolute z-10" />

                <div className={`absolute inset-0 rounded-md hidden peer-checked:block pointer-events-none ${theme.grad}`}></div>

            </div>

            <span className="text-sm font-medium text-neutral-300">Confirmar despliegue a producción</span>

        </label>

    </div>

);



const FormsSection = ({ theme, toggle, setToggle }) => (

    <section className="space-y-6">

        <h2 className="section-title">Formularios</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">

            <UsernameInput theme={theme} />

            <SearchInput theme={theme} />

            <Toggles theme={theme} toggle={toggle} setToggle={setToggle} />

        </div>

    </section>

);



const ProfileCard = ({ theme }) => (

    <div className={`overflow-hidden group card hover:border-neutral-700`}>

        <div className={`h-24 transition-all duration-500 opacity-90 group-hover:opacity-100 ${theme.grad}`}></div>

        <div className="px-6 pb-6 relative">

            <div className={`w-20 h-20 bg-[#242424] rounded-full border-4 border-[#181818] absolute -top-10 flex-center text-neutral-400 shadow-xl`}>

                <User size={36} />

            </div>

            <div className="mt-12">

                <h3 className="text-xl font-black text-white">SysAdmin / DevOps</h3>

                <p className={`text-sm font-bold mt-1 ${theme.gradText}`}>Nivel 4 - Infraestructura</p>

                <p className="text-sm text-neutral-400 font-light mt-3 line-clamp-2">

                    Especialista en despliegues automatizados, orquestación con Kubernetes y optimización de bases de datos de alta concurrencia.

                </p>

                <div className="mt-5 flex gap-2">

                    <button className={`flex-1 py-2.5 rounded-full text-sm font-bold transition-colors hover:bg-white/10 ${theme.transBg} ${theme.pText}`}>

                        Ver Logs

                    </button>

                </div>

            </div>

        </div>

    </div>

);



const StatsCard = ({ theme }) => (

    <div className={`p-6 flex flex-col justify-between group card hover:border-neutral-700`}>

        <div>

            <div className="flex justify-between items-start mb-4">

                <div className={`p-3 rounded-2xl transition-colors group-hover:scale-110 duration-300 ${theme.transBg} ${theme.pText}`}>

                    <Heart size={24} fill="currentColor" className="opacity-80" />

                </div>

                <span className={`text-xs font-extrabold px-3 py-1 rounded-full border border-current/20 ${theme.transBg} ${theme.pText}`}>-12ms</span>

            </div>

            <h3 className="text-neutral-400 text-sm font-medium">Latencia del Clúster</h3>

            <p className="text-4xl font-black text-white mt-2">14<span className="text-xl text-neutral-500 ml-1">ms</span></p>

        </div>

        <div className="mt-6 pt-4 border-t border-neutral-800 text-sm text-neutral-500 flex justify-between items-center font-thin">

            <span>Último ping hace 2s</span>

            <button className={`p-1 transition-colors hover:text-white ${theme.pText}`}><Search size={18} /></button>

        </div>

    </div>

);



const ActionCard = ({ theme }) => (

    <div className={`p-6 text-white flex flex-col justify-center items-center text-center relative overflow-hidden transition-all duration-300 hover:border-neutral-600 group card`}>

        {/* Glow orbs */}

        <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-20 blur-[50px] transition-colors duration-500 group-hover:opacity-30 ${theme.pBg}`}></div>

        <div className={`absolute -left-10 -bottom-10 w-40 h-40 rounded-full opacity-20 blur-[50px] transition-colors duration-500 group-hover:opacity-30 ${theme.sBg}`}></div>



        <Share2 size={40} className={`mb-5 z-10 transition-colors ${theme.pText}`} />

        <h3 className="text-xl font-extrabold mb-2 z-10 text-white">Pipeline CI/CD</h3>

        <p className="text-neutral-400 text-sm font-normal mb-8 z-10">Ejecuta las pruebas unitarias antes del despliegue en producción.</p>

        <button className={`w-full py-3 text-white btn ${theme.grad} ${theme.gradHover} z-10`}>

            Iniciar Deploy

        </button>

    </div>

);



const CardsSection = ({ theme }) => (

    <section className="space-y-6">

        <h2 className="section-title">Tarjetas (Cards)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <ProfileCard theme={theme} />

            <StatsCard theme={theme} />

            <ActionCard theme={theme} />

        </div>

    </section>

);



const AlertsSection = ({ theme }) => (

    <section className="space-y-6 pb-12">

        <h2 className="section-title">Alertas y Etiquetas</h2>



        <div className="flex flex-col gap-4 max-w-2xl">

            <div className={`border border-neutral-800 border-l-4 p-4 rounded-r-xl flex justify-between items-start transition-colors relative overflow-hidden bg-[#181818] ${theme.pBorder.replace('/50', '')}`}>

                <div className={`absolute left-0 top-0 bottom-0 w-1 ${theme.grad}`}></div>

                <div className="pl-2">

                    <h4 className="text-white font-bold text-sm">Notificación del Sistema</h4>

                    <p className="text-neutral-400 text-sm mt-1">El servidor de bases de datos ha sido actualizado con éxito. El uptime es del 99.9%.</p>

                </div>

                <button className="text-neutral-500 hover:text-white transition-colors"><X size={18} /></button>

            </div>

        </div>



        <div className="flex flex-wrap gap-2 mt-6">

            <span className={`badge ${theme.transBg} ${theme.pBorder} ${theme.pText}`}>React</span>

            <span className={`badge bg-[#242424] border-neutral-700 text-neutral-300`}>C++</span>

            <span className={`badge bg-[#242424] border-neutral-700 text-neutral-300`}>Linux</span>

            <span className={`badge bg-[#242424] border-neutral-700 text-neutral-300`}>Cisco OSPF</span>

        </div>

    </section>

);



// --- Main App Component ---



const App = () => {

    const [toggle, setToggle] = useState(false);

    const [activeTheme, setActiveTheme] = useState(1);



// Dynamic pointer to current theme

    const currentTheme = themes[activeTheme];



    return (

        <>

            <style>

                {`@import url('https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap');`}

            </style>

            <div className="min-h-screen bg-[#121212] text-neutral-200 p-6 md:p-12 transition-colors duration-500" style={{ fontFamily: "'Onest', sans-serif" }}>

                <div className="max-w-5xl mx-auto space-y-12">



                    <ThemeSelector

                        currentTheme={currentTheme}

                        activeThemeId={activeTheme}

                        onThemeChange={setActiveTheme}

                    />



                    <Header theme={currentTheme} />



                    <ColorPalette theme={currentTheme} />



                    <ButtonsSection theme={currentTheme} />



                    <FormsSection

                        theme={currentTheme}

                        toggle={toggle}

                        setToggle={setToggle}

                    />



                    <CardsSection theme={currentTheme} />



                    <AlertsSection theme={currentTheme} />



                </div>

            </div>

        </>

    );

};



export default App;