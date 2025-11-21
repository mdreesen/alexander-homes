// components/FAQSection.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
    question: string,
    answer: string,
    isOpen: number,
    setOpen: any
};

// Data for the FAQ items
const faqItems = [
    {
        question: "What areas does Alexander Homes serve?",
        answer: "We primarily serve the entire greater metro area and all surrounding counties. For projects outside this area, please contact us for a specific assessment and estimate.",
    },
    {
        question: "Do you offer consultations to help choose colors?",
        answer: "Yes! Our service includes a **free, in-depth color consultation** with one of our design experts. We help you navigate modern palettes and select the perfect shade for your space and lighting.",
    },
    {
        question: "What type of paint brands and materials do you use?",
        answer: "We only use premium, high-quality, **low-VOC paints** from industry-leading brands (e.g., Sherwin-Williams, Benjamin Moore). This ensures a durable, beautiful finish and a healthier environment.",
    },
    {
        question: "How long does a typical exterior or interior project take?",
        answer: "Project duration varies based on square footage, surface condition, and complexity. After your free on-site estimate, we'll provide a detailed timeline, but most standard residential projects are completed within **3 to 7 days**.",
    },
    {
        question: "Are you licensed and insured?",
        answer: "Absolutely. Alexander Homes is fully **licensed, bonded, and insured** to protect both our team and your property throughout the entire duration of the project. We prioritize safety and professionalism.",
    },
    {
        question: "What is your process for surface preparation?",
        answer: "Preparation is key to a flawless finish. Our process includes power washing (exterior), detailed scraping, sanding, patching, caulking, and applying high-quality primers to ensure maximum adhesion and smoothness.",
    },
];

const AccordionItem = ({ question, answer, isOpen, setOpen }: FAQProps | any) => {
    return (
        <motion.div
            className="border-b border-gray-200"
            initial={false}
            animate={{ backgroundColor: isOpen ? '#F8F8F8' : 'white' }}
        >
            <button
                className="flex justify-between items-center w-full py-5 px-2 text-left font-semibold text-lg text-[#1E1E1E] hover:text-[#2F4F4F] transition-colors"
                onClick={setOpen}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <motion.span
                    className="text-[#2F4F4F]"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown size={24} />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 px-2 text-neutral-600 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E1E] text-center mb-12">
                    Frequently asked questions
                </h2>

                {/* Accordion Container */}
                <div className="space-y-0 shadow-xl rounded-xl overflow-hidden border border-gray-100">
                    {faqItems.map((item, index) => (
                        <AccordionItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            setOpen={() => toggleItem(index)}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <p className="text-lg text-neutral-500 mb-4">
                        Still have questions? We're here to help you start your project.
                    </p>
                    <motion.a
                        href="/contact"
                        className="inline-block px-8 py-3 text-base font-semibold text-white bg-[#2F4F4F] rounded-full shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-[#1E3E3E]"
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Our Team
                    </motion.a>
                </div>
            </div>
        </section>
    );
}