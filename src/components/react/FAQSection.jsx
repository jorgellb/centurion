import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const FAQSection = ({ items, title, description }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    // Normalize items to handle both categorized and flat array
    const categories = items && items[0]?.items
        ? items
        : items
            ? [{ category: null, items: items }]
            : [];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Schema.org structured data generator
    const generateSchema = () => {
        const allItems = categories.flatMap(cat => cat.items);
        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allItems.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                }
            }))
        };
        return JSON.stringify(schema);
    };

    if (categories.length === 0) return null;

    return (
        <div className="max-w-4xl mx-auto">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateSchema() }} />

            <div className="space-y-12">
                {categories.map((category, catIndex) => (
                    <div key={catIndex} className="space-y-6">
                        {category.category && (
                            <h3 className="text-xl font-bold px-4 text-slate-900 uppercase tracking-widest">{category.category}</h3>
                        )}
                        <div className="space-y-4">
                            {category.items.map((faq, itemIndex) => {
                                const globalIndex = `${catIndex}-${itemIndex}`;
                                const isOpen = activeIndex === globalIndex;
                                return (
                                    <div
                                        key={itemIndex}
                                        className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-slate-900 shadow-xl' : 'border-slate-100 hover:border-slate-200'}`}
                                    >
                                        <button
                                            onClick={() => toggleAccordion(globalIndex)}
                                            className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none"
                                            aria-expanded={isOpen}
                                        >
                                            <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>
                                                {faq.question}
                                            </span>
                                            <span className={`p-1 rounded-full shrink-0 transition-colors ${isOpen ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-400'}`}>
                                                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                            </span>
                                        </button>

                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-transparent italic">
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
                    className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors shadow-xl"
                >
                    <MessageCircle size={24} />
                    <span>¿Tienes otra duda? Escríbenos por WhatsApp</span>
                </a>
            </div>
        </div>
    );
};

export default FAQSection;
