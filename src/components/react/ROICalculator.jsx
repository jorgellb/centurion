import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, TrendingUp } from 'lucide-react';

const ROICalculator = () => {
    const [habitaciones, setHabitaciones] = useState('2');
    const [temporada, setTemporada] = useState('media');
    const [ingresos, setIngresos] = useState(0);

    // Tarifas base estimadas por noche (promedio conservador)
    const preciosBase = {
        '1': 65,
        '2': 95,
        '3': 130,
        '4+': 180
    };

    // Multiplicadores por temporada
    const multiplicadores = {
        'baja': 0.7,   // Invierno
        'media': 1.0,  // Mayo, Junio, Septiembre
        'alta': 1.9    // Julio, Agosto
    };

    // Tasa de ocupación estimada
    const ocupacion = {
        'baja': 0.30, // 30%
        'media': 0.65, // 65%
        'alta': 0.95   // 95%
    };

    useEffect(() => {
        calculateROI();
    }, [habitaciones, temporada]);

    const calculateROI = () => {
        const precioNoche = preciosBase[habitaciones] * multiplicadores[temporada];
        const diasOcupados = 30 * ocupacion[temporada];
        const total = precioNoche * diasOcupados;
        setIngresos(Math.round(total));
    };

    return (
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                    <Calculator size={24} />
                </div>
                <h3 className="text-2xl font-bold italic text-slate-900 leading-tight">Calculadora de Ingresos</h3>
            </div>

            <div className="space-y-8">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Nº de Habitaciones</label>
                    <div className="grid grid-cols-4 gap-2">
                        {['1', '2', '3', '4+'].map(num => (
                            <button
                                key={num}
                                onClick={() => setHabitaciones(num)}
                                className={`py-3 rounded-xl text-sm font-bold transition-all ${habitaciones === num
                                    ? 'bg-slate-900 text-white shadow-lg scale-105'
                                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                                    }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Temporada</label>
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            { id: 'baja', label: 'Baja' },
                            { id: 'media', label: 'Media' },
                            { id: 'alta', label: 'Alta' }
                        ].map(t => (
                            <button
                                key={t.id}
                                onClick={() => setTemporada(t.id)}
                                className={`py-3 rounded-xl text-sm font-bold transition-all ${temporada === t.id
                                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                                    }`}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                    <p className="text-center text-sm text-slate-400 mb-2 font-medium">Ingresos brutos estimados / mes</p>
                    <div className="text-center text-5xl md:text-6xl font-black text-slate-900 flex items-center justify-center gap-2">
                        <span className="text-3xl text-slate-300">€</span>
                        {ingresos.toLocaleString()}
                    </div>
                    <p className="text-center text-xs text-slate-400 mt-4 italic">
                        *Estimación basada en datos de mercado de Vera Playa. No contractual.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ROICalculator;
