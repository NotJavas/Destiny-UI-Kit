import React from 'react';
import { Bell, CheckCircle, AlertTriangle, XCircle, Info, Music, GlassWater, Crown, Ticket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Alert = ({ type, title, message, icon: Icon }) => {
    const { theme } = useTheme(); // Usamos el hook aquí para asegurar que theme siempre exista

    const styles = {
        success: { bg: 'bg-green-900/10', border: 'border-green-500/20', text: 'text-green-400', iconColor: 'text-green-500' },
        warning: { bg: 'bg-yellow-900/10', border: 'border-yellow-500/20', text: 'text-yellow-400', iconColor: 'text-yellow-500' },
        error: { bg: 'bg-red-900/10', border: 'border-red-500/20', text: 'text-red-400', iconColor: 'text-red-500' },
        info: { bg: 'bg-blue-900/10', border: 'border-blue-500/20', text: 'text-blue-400', iconColor: 'text-blue-500' },
        brand: { bg: theme.transBg, border: theme.pBorder, text: theme.pText, iconColor: theme.pText }
    };

    const style = styles[type] || styles.brand;

    return (
        <div className={`p-4 rounded-xl border ${style.bg} ${style.border} flex items-start gap-3`}>
            <Icon className={`mt-0.5 flex-shrink-0 ${style.iconColor}`} size={20} />
            <div>
                <h4 className={`font-bold text-sm ${style.text}`}>{title}</h4>
                <p className="text-neutral-400 text-xs mt-1 leading-relaxed">{message}</p>
            </div>
        </div>
    );
};

const Badge = ({ children, variant = 'default' }) => {
    const { theme } = useTheme(); // Usamos el hook aquí también

    const variants = {
        default: "bg-[#242424] text-neutral-300 border-neutral-700",
        brand: `${theme.transBg} ${theme.pText} ${theme.pBorder}`,
        outline: "bg-transparent text-neutral-400 border-neutral-700 hover:text-white hover:border-neutral-500",
        glow: `${theme.grad} text-white border-transparent shadow-lg shadow-purple-900/20`
    };

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-bold border transition-all flex items-center gap-1.5 ${variants[variant]}`}>
            {children}
        </span>
    );
};

export const AlertsSection = () => {
    const { theme } = useTheme();

    return (
        <section className="space-y-10 pb-12">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className={`p-1.5 rounded-lg ${theme.transBg} ${theme.pText}`}>
                    <Bell size={20} />
                </span>
                Alertas y Etiquetas
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Column 1: Alerts */}
                <div className="space-y-4">
                    <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2">Notificaciones</h3>
                    
                    <Alert 
                        type="brand" 
                        title="¡Estás en la Guest List!" 
                        message="Tu acceso VIP ha sido confirmado para esta noche. Muestra tu código QR en la entrada."
                        icon={Crown}
                    />

                    <Alert 
                        type="success" 
                        title="Reserva Exitosa" 
                        message="Mesa reservada para 4 personas en Sky Bar Polanco. Te hemos enviado el ticket al correo."
                        icon={CheckCircle}
                    />

                    <Alert 
                        type="warning" 
                        title="Aforo Limitado" 
                        message="Quedan menos de 10 entradas disponibles para este evento. ¡Date prisa!"
                        icon={AlertTriangle}
                    />

                    <Alert 
                        type="error" 
                        title="Pago Rechazado" 
                        message="No pudimos procesar tu tarjeta. Por favor intenta con otro método de pago."
                        icon={XCircle}
                    />
                </div>

                {/* Column 2: Badges & Tags */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2 mb-4">Categorías Musicales</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="brand"><Music size={12} /> Techno</Badge>
                            <Badge variant="default">House</Badge>
                            <Badge variant="default">Reggaeton</Badge>
                            <Badge variant="default">Hip-Hop</Badge>
                            <Badge variant="outline">Indie Rock</Badge>
                            <Badge variant="outline">Jazz</Badge>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2 mb-4">Estados del Evento</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="glow"><Ticket size={12} /> Sold Out</Badge>
                            <Badge variant="brand">Últimos Boletos</Badge>
                            <Badge variant="default"><GlassWater size={12} /> Open Bar</Badge>
                            <Badge variant="outline">Acceso General</Badge>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2 mb-4">Niveles de Usuario</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-yellow-400 to-yellow-600 text-black`}>Gold Member</span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-slate-300 to-slate-400 text-black`}>Silver</span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border border-neutral-700 text-neutral-500`}>Standard</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};