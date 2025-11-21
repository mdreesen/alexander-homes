'use client';

import { motion } from 'framer-motion';
import { Palette, Feather, Home, CheckCircle } from 'lucide-react'; // Icons for the features
import Link from 'next/link';
import { containerVariants, cardVariants } from '@/utils/variants';

// Data for the feature cards
const features = [
  {
    icon: Palette,
    title: "Curated Color Selection",
    description: "Access to our modern, expertly chosen palette and personalized consultations to find your perfect hue.",
    color: "text-[#2F4F4F]", // Deep Forest Green
  },
  {
    icon: CheckCircle,
    title: "Premium Materials Only",
    description: "We use top-tier, low-VOC paints and industry-leading supplies for a superior, long-lasting finish.",
    color: "text-[#A85547]", // Muted Terracotta
  },
  {
    icon: Home,
    title: "Flawless Surface Prep",
    description: "Detailed patching, sanding, and priming ensure a pristine canvas, maximizing paint adhesion and beauty.",
    color: "text-neutral-500", // Supporting Neutral
  },
  {
    icon: Feather,
    title: "Zero-Stress Execution",
    description: "From careful masking to meticulous cleanup, we guarantee a swift process with minimal disruption to your life.",
    color: "text-[#0F766E]", // Deep Teal
  },
];

export default function Feature() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Hook */}
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E1E] tracking-tight">
            Everything You Need
          </h2>
          <p className="mt-4 text-xl text-[#C8C7C1] max-w-3xl mx-auto">
            From the initial consultation to the final brushstroke, Alexander Homes covers every detail for a perfect finish.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#F8F8F8] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-transparent hover:border-t-[#2F4F4F]"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <feature.icon size={40} className={`mb-4 ${feature.color}`} />
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action at the Bottom */}
        <div className="mt-16 text-center">
          <Link href="/estimate">
            <motion.a
              className="inline-block px-12 py-4 text-lg font-semibold text-[#F8F8F8] bg-[#A85547] rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:bg-[#85453A]"
              whileTap={{ scale: 0.95 }}
            >
              Book Your Free Consultation Today
            </motion.a>
          </Link>
        </div>
      </div>
    </section>
  );
}