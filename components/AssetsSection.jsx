import React from 'react';
import { 
    // UI / Navigation
    Home, Map, Ticket, User, Bell, Settings, Search, Menu, X, ChevronRight, ArrowLeft, MoreVertical, LogOut, Navigation, Share2, Filter, GripHorizontal, LayoutTemplate, Layers, Maximize, Box,
    // Feedback / Status
    Check, CheckCircle, AlertTriangle, AlertCircle, XCircle, Info, Loader2, Heart, Star, Flame, Zap,
    // Media / Content
    Play, Image, Music, Video, Mic, Camera,
    // Business / Commerce
    CreditCard, DollarSign, ShoppingBag, QrCode, Gift, Crown, GlassWater,
    // Communication
    Mail, Phone, MessageSquare, Send, Calendar, MapPin, Lock, Eye, EyeOff, Upload, Download, Copy
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const IconGroup = ({ title, icons, theme }) => (
    <div className="space-y-4">
        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 pb-2">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {icons.map(({ icon: Icon, name }, index) => (
                <div key={index} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-[#181818] border border-neutral-800 hover:border-neutral-600 hover:bg-[#242424] transition-all group cursor-pointer">
                    <Icon size={24} className={`text-neutral-400 group-hover:text-white transition-colors ${theme.gradHover.replace('hover:', 'group-hover:')}`} />
                    <span className="text-xs text-neutral-500 font-mono group-hover:text-white truncate w-full text-center">{name}</span>
                </div>
            ))}
        </div>
    </div>
);

export const AssetsSection = () => {
    const { theme } = useTheme();

    const navigationIcons = [
        { icon: Home, name: 'Home' },
        { icon: Map, name: 'Map' },
        { icon: Ticket, name: 'Ticket' },
        { icon: User, name: 'User' },
        { icon: Bell, name: 'Bell' },
        { icon: Settings, name: 'Settings' },
        { icon: Search, name: 'Search' },
        { icon: Menu, name: 'Menu' },
        { icon: Navigation, name: 'Navigation' },
        { icon: LayoutTemplate, name: 'Layout' },
        { icon: Layers, name: 'Layers' },
        { icon: GripHorizontal, name: 'Grip' },
    ];

    const actionIcons = [
        { icon: Check, name: 'Check' },
        { icon: X, name: 'Close' },
        { icon: ChevronRight, name: 'ChevronRight' },
        { icon: ArrowLeft, name: 'ArrowLeft' },
        { icon: MoreVertical, name: 'More' },
        { icon: LogOut, name: 'LogOut' },
        { icon: Share2, name: 'Share' },
        { icon: Filter, name: 'Filter' },
        { icon: Upload, name: 'Upload' },
        { icon: Download, name: 'Download' },
        { icon: Copy, name: 'Copy' },
        { icon: Box, name: 'Box' },
    ];

    const statusIcons = [
        { icon: CheckCircle, name: 'Success' },
        { icon: AlertTriangle, name: 'Warning' },
        { icon: XCircle, name: 'Error' },
        { icon: Info, name: 'Info' },
        { icon: Loader2, name: 'Loading' },
        { icon: Heart, name: 'Like' },
        { icon: Star, name: 'Rating' },
        { icon: Flame, name: 'Trending' },
        { icon: Zap, name: 'Energy' },
        { icon: Lock, name: 'Lock' },
        { icon: Eye, name: 'Visible' },
        { icon: EyeOff, name: 'Hidden' },
    ];

    const contentIcons = [
        { icon: MapPin, name: 'Location' },
        { icon: Calendar, name: 'Date' },
        { icon: Mail, name: 'Email' },
        { icon: Phone, name: 'Phone' },
        { icon: MessageSquare, name: 'Chat' },
        { icon: Image, name: 'Image' },
        { icon: Music, name: 'Music' },
        { icon: Video, name: 'Video' },
        { icon: QrCode, name: 'QR' },
        { icon: Crown, name: 'VIP' },
        { icon: GlassWater, name: 'Bar' },
        { icon: Play, name: 'Play' },
    ];

    return (
        <section className="space-y-10 pb-12">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <span className={`p-1.5 rounded-lg ${theme.transBg} ${theme.pText}`}>
                        <Box size={20} />
                    </span>
                    Assets & Iconografía
                </h2>
                <p className="text-neutral-400 text-sm">
                    Colección estandarizada de íconos (Lucide React). Todos los componentes deben usar exclusivamente estos íconos para mantener la consistencia visual.
                </p>
            </div>

            <IconGroup title="Navegación y Estructura" icons={navigationIcons} theme={theme} />
            <IconGroup title="Acciones y Utilidades" icons={actionIcons} theme={theme} />
            <IconGroup title="Estados y Feedback" icons={statusIcons} theme={theme} />
            <IconGroup title="Contenido y Negocio" icons={contentIcons} theme={theme} />
        </section>
    );
};