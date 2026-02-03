import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Building, Key } from 'lucide-react';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        ubicacion: '',
        tipo: 'Apartamento',
        dormitorios: '2',
        alquilada: 'No',
        necesidad: 'Gestión Integral',
        nombre: '',
        telefono: '',
        email: '',
        estudio: true
    });
    const [enviando, setEnviando] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = (e) => {
        // En una implementación real, esto enviaría los datos.
        // Aquí dejamos que el formulario HTML nativo maneje el envío a FormSubmit si es posible,
        // o simulamos el envío si estamos en un componente cliente puro.
        // Para integación con FormSubmit.co, lo ideal es enviar un fetch POST.

        e.preventDefault();
        setEnviando(true);

        fetch("https://formsubmit.co/ajax/info@multiserviciosveraplaya.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: "Nuevo Lead: Gestión Airbnb",
                ...formData
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location.href = "/gracias/";
            })
            .catch(error => console.log(error))
            .finally(() => setEnviando(false));
    };

    return (
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
            {/* Header del Formulario */}
            <div className="bg-slate-900 p-8 text-white flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-xl italic">Estudio Gratuito</h3>
                    <p className="text-slate-400 text-sm">Paso {step} de 3</p>
                </div>
                <div className="flex gap-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`h-2 w-8 rounded-full transition-all ${step >= i ? 'bg-blue-500' : 'bg-slate-700'}`}></div>
                    ))}
                </div>
            </div>

            <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit}>

                    {/* PASO 1: PROPIEDAD */}
                    {step === 1 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                            <h4 className="text-2xl font-bold italic text-slate-800 mb-6">Tu Propiedad</h4>

                            <div className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Ubicación</label>
                                <select
                                    name="ubicacion"
                                    value={formData.ubicacion}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-slate-900 transition-all"
                                >
                                    <option value="" disabled>Selecciona zona</option>
                                    <option value="Vera Playa">Vera Playa</option>
                                    <option value="Puerto Rey">Puerto Rey</option>
                                    <option value="Garrucha">Garrucha</option>
                                    <option value="Villaricos">Villaricos</option>
                                    <option value="Mojácar">Mojácar</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Tipo</label>
                                    <select
                                        name="tipo"
                                        value={formData.tipo}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-slate-900 transition-all"
                                    >
                                        <option value="Apartamento">Apartamento</option>
                                        <option value="Ático">Ático</option>
                                        <option value="Bajo con jardín">Bajo con jardín</option>
                                        <option value="Chalet/Villa">Chalet/Villa</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Dormitorios</label>
                                    <select
                                        name="dormitorios"
                                        value={formData.dormitorios}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-slate-900 transition-all"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4+">4+</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* PASO 2: NECESIDADES */}
                    {step === 2 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                            <h4 className="text-2xl font-bold italic text-slate-800 mb-6">Tus Objetivos</h4>

                            <div className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">¿Ya se alquila actualmente?</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, alquilada: 'No' })}
                                        className={`py-4 rounded-2xl font-bold border-2 transition-all ${formData.alquilada === 'No' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-100 text-slate-500 hover:border-slate-300'}`}
                                    >
                                        No, es nueva
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, alquilada: 'Sí' })}
                                        className={`py-4 rounded-2xl font-bold border-2 transition-all ${formData.alquilada === 'Sí' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-100 text-slate-500 hover:border-slate-300'}`}
                                    >
                                        Sí, ya alquilo
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">¿Qué buscas?</label>
                                <div className="space-y-3">
                                    <label className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${formData.necesidad === 'Gestión Integral' ? 'border-blue-500 bg-blue-50' : 'border-slate-100 hover:border-slate-200'}`}>
                                        <input
                                            type="radio"
                                            name="necesidad"
                                            value="Gestión Integral"
                                            checked={formData.necesidad === 'Gestión Integral'}
                                            onChange={handleChange}
                                            className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                                        />
                                        <div>
                                            <span className="font-bold block text-slate-900">Gestión Integral Airbnb/Booking</span>
                                            <span className="text-xs text-slate-500">Despreocúpate de todo. Nosotros nos encargamos.</span>
                                        </div>
                                    </label>
                                    <label className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${formData.necesidad === 'Solo Limpieza' ? 'border-blue-500 bg-blue-50' : 'border-slate-100 hover:border-slate-200'}`}>
                                        <input
                                            type="radio"
                                            name="necesidad"
                                            value="Solo Limpieza"
                                            checked={formData.necesidad === 'Solo Limpieza'}
                                            onChange={handleChange}
                                            className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                                        />
                                        <div>
                                            <span className="font-bold block text-slate-900">Solo Limpieza y Llaves</span>
                                            <span className="text-xs text-slate-500">Tú gestionas las reservas, nosotros el campo.</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-slate-100">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        name="reportaje"
                                        checked={formData.reportaje || false}
                                        onChange={handleChange}
                                        className="w-5 h-5 rounded text-purple-600 border-slate-300 focus:ring-purple-500"
                                    />
                                    <span className="text-sm font-medium text-slate-600 group-hover:text-purple-600 transition-colors">
                                        Me interesa un reportaje audiovisual profesional (Dron + Foto Pro)
                                    </span>
                                </label>
                            </div>
                        </div>
                    )}

                    {/* PASO 3: CONTACTO */}
                    {step === 3 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                            <h4 className="text-2xl font-bold italic text-slate-800 mb-6">Datos de Contacto</h4>

                            <div className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        name="nombre"
                                        placeholder="Nombre Completo"
                                        required
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-slate-900 transition-all"
                                    />
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    <input
                                        type="tel"
                                        name="telefono"
                                        placeholder="Teléfono Móvil"
                                        required
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-slate-900 transition-all"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Correo Electrónico"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-slate-900 transition-all"
                                    />
                                </div>
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="estudio"
                                        checked={formData.estudio}
                                        onChange={handleChange}
                                        className="mt-1 w-5 h-5 rounded text-blue-600 border-slate-300 focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-slate-500">Quiero recibir el estudio de rentabilidad gratuito y acepto la política de privacidad.</span>
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Footer con Botones */}
                    <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                        {step > 1 ? (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="text-slate-500 font-bold hover:text-slate-900 px-4"
                            >
                                Atrás
                            </button>
                        ) : (
                            <div></div>
                        )}

                        {step < 3 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2"
                            >
                                Siguiente
                                <ArrowRight size={18} />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={enviando}
                                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-2 shadow-xl shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {enviando ? 'Enviando...' : 'Obtener Propuesta'}
                                {!enviando && <Check size={18} />}
                            </button>
                        )}
                    </div>

                </form>
            </div>
        </div>
    );
};

export default MultiStepForm;
