import React from 'react';
import { Check, X } from 'lucide-react';

const PricingSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Plan Básico: Solo Logística */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative group">
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-500 uppercase tracking-widest mb-4">Solo Logística</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl md:text-5xl font-black text-slate-900">A medida</span>
                        <span className="text-slate-400 font-medium">/ servicio</span>
                    </div>
                    <p className="text-slate-500 mt-4 text-sm leading-relaxed">
                        Ideal si prefieres gestionar tus propios anuncios y reservas online, pero necesitas ayuda en el terreno.
                    </p>
                </div>

                <ul className="space-y-4 mb-12 flex-1">
                    <li className="flex items-center gap-3 text-slate-600">
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                            <Check size={14} />
                        </div>
                        <span className="text-sm font-medium">Check-in y Entrega de Llaves</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600">
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                            <Check size={14} />
                        </div>
                        <span className="text-sm font-medium">Limpieza Profesional y Lavandería</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600">
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                            <Check size={14} />
                        </div>
                        <span className="text-sm font-medium">Atención de Urgencias in-situ</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-400">
                        <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 shrink-0">
                            <X size={14} />
                        </div>
                        <span className="text-sm line-through decoration-slate-300">Gestión de Anuncio y Tarifas</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-400">
                        <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 shrink-0">
                            <X size={14} />
                        </div>
                        <span className="text-sm line-through decoration-slate-300">Comunicación 24/7 con Huésped</span>
                    </li>
                </ul>

                <a href="#contacto" className="w-full py-4 rounded-xl border-2 border-slate-100 text-slate-600 font-bold hover:border-slate-300 hover:text-slate-900 transition-colors text-center text-sm uppercase tracking-widest">
                    Consultar Precios
                </a>
            </div>

            {/* Plan Premium: Gestión Integral */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-800 flex flex-col hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 relative overflow-hidden">
                {/* Badge */}
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-widest shadow-lg z-10">
                    Más Popular
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <div className="mb-8 relative z-10">
                    <h3 className="text-xl font-bold text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        Gestión Integral
                    </h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-5xl md:text-6xl font-black text-white">20%</span>
                        <span className="text-slate-400 font-medium">/ reserva</span>
                    </div>
                    <p className="text-slate-400 mt-4 text-sm leading-relaxed">
                        La solución definitiva para ingresos pasivos. Nosotros nos ocupamos de absolutamente todo. Tú solo cobras.
                    </p>
                </div>

                <ul className="space-y-4 mb-12 flex-1 relative z-10">
                    <li className="flex items-center gap-3 text-white">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/30">
                            <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-sm font-bold">Todo lo incluido en Logística</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-blue-400 shrink-0">
                            <Check size={14} />
                        </div>
                        <span className="text-sm font-medium">Creación y Optimización de Anuncio (SEO)</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-blue-400 shrink-0">
                            <Check size={14} />
                        </div>
                        <span className="text-sm font-medium">Fotografía Profesional HDR + Dron</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-blue-400 shrink-0">
                            <Check size={14} />
                        </div>
                        <span className="text-sm font-medium">Estrategia de Precios Dinámicos</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-blue-400 shrink-0">
                            <Check size={14} />
                        </div>
                        <span className="text-sm font-medium">Atención al Huésped 24/7 y Reseñas</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-blue-400 shrink-0">
                            <Check size={14} />
                        </div>
                        <span className="text-sm font-medium">Gestión de Fianzas e Incidencias</span>
                    </li>
                </ul>

                <a href="#contacto" className="w-full py-5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all text-center text-sm uppercase tracking-widest relative z-10 transform hover:scale-[1.02]">
                    Elegir Plan Integral
                </a>
            </div>
        </div>
    );
};

export default PricingSection;
