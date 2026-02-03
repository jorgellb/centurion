import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            category: "Sobre los Drones y Contenido Audiovisual",
            items: [
                {
                    question: "¿Es legal grabar con drones en mi urbanización?",
                    answer: "Sí, totalmente. Contamos con pilotos certificados y cumplimos con la normativa de AESA (Agencia Estatal de Seguridad Aérea). Realizamos grabaciones respetando siempre la privacidad de los vecinos y enfocándonos en el valor estético de su propiedad y su entorno."
                },
                {
                    question: "¿Tengo que pagar aparte por las fotos y el vídeo de dron?",
                    answer: "El pack audiovisual profesional está incluido sin coste adicional en nuestro modelo de Gestión Integral. Queremos que su anuncio sea el mejor de la zona porque su éxito es el nuestro."
                }
            ]
        },
        {
            category: "Sobre la Gestión y Seguridad",
            items: [
                {
                    question: "¿Quién se encarga de la entrega de llaves?",
                    answer: "Nosotros personalmente. Realizamos un check-in presencial para conocer al huésped, explicarle las normas de la casa y verificar su identidad. Nada de cajetines inseguros en la calle."
                },
                {
                    question: "¿Qué pasa si un huésped rompe algo?",
                    answer: "Como especialistas en multiservicios, tenemos la capacidad de reparar pequeñas averías de inmediato. Además, gestionamos la reclamación de la fianza o el seguro de Airbnb/Booking para que usted no tenga que preocuparse por nada."
                }
            ]
        },
        {
            category: "Sobre Pagos y Legalidad",
            items: [
                {
                    question: "¿Cuándo recibo el dinero de mis reservas?",
                    answer: "El dinero de las plataformas (Airbnb/Booking) llega directamente a su cuenta bancaria. Nosotros emitimos una factura mensual por nuestros servicios de gestión sobre las reservas completadas. Transparencia total."
                },
                {
                    question: "¿Me ayudan con la Licencia Turística y el registro de viajeros?",
                    answer: "Por supuesto. Le asesoramos en el trámite de la licencia y nos encargamos del registro obligatorio de viajeros en el portal de la Policía/Guardia Civil (Hospederías), cumpliendo estrictamente con la normativa vigente en Andalucía."
                }
            ]
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Schema.org structured data generator
    const generateSchema = () => {
        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.flatMap(cat => cat.items.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                }
            })))
        };
        return JSON.stringify(schema);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateSchema() }} />

            <div className="space-y-12">
                {faqs.map((category, catIndex) => (
                    <div key={catIndex} className="space-y-6">
                        <h3 className="text-xl font-bold px-4 text-purple-600 uppercase tracking-widest">{category.category}</h3>
                        <div className="space-y-4">
                            {category.items.map((faq, itemIndex) => {
                                const globalIndex = `${catIndex}-${itemIndex}`;
                                const isOpen = activeIndex === globalIndex;
                                return (
                                    <div
                                        key={itemIndex}
                                        className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-purple-200 shadow-lg' : 'border-slate-100 hover:border-purple-100'}`}
                                    >
                                        <button
                                            onClick={() => toggleAccordion(globalIndex)}
                                            className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none"
                                            aria-expanded={isOpen}
                                        >
                                            <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>
                                                {faq.question}
                                            </span>
                                            <span className={`p-1 rounded-full shrink-0 transition-colors ${isOpen ? 'bg-purple-100 text-purple-600' : 'bg-slate-50 text-slate-400'}`}>
                                                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                            </span>
                                        </button>

                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-transparent">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <a
                    href="https://wa.me/34657085019"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-green-50 text-green-700 rounded-2xl font-bold hover:bg-green-100 transition-colors border border-green-100"
                >
                    <MessageCircle size={24} />
                    <span>¿Tienes otra duda? Escríbenos por WhatsApp</span>
                </a>
            </div>
        </div>
    );
};

export default FAQSection;
