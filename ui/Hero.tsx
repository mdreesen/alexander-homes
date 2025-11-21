// components/HeroSection.jsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Drip } from '@/components/drips';
import { containerVariants, itemVariants } from '@/utils/variants';

export default function Hero() {

  return (
    <section className="min-h-screen bg-[#F8F8F8] flex items-center justify-center p-8 overflow-hidden relative">

      {/* Green Drip */}
      <Drip
        duration={11}
        animateY={[-250, 0]}
        color={'#2F4F4F'}
        dropStyle={'absolute top-0 left-[12%] w-4 h-80 opacity-90 z-0'}
        dropHeadStyle={'absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-8 h-12 rounded-b-full shadow-lg'}
        dropBodyStyle={'absolute top-0 left-0 h-full rounded-t-full'}
      />

      {/* Warm Greige (greyish) */}
      <Drip
        duration={15}
        animateY={[-350, 0,]}
        color={'#C8C7C1'}
        dropStyle={'absolute top-0 left-1/2 -translate-x-1/2 w-5 h-96 opacity-70 z-0'}
        dropHeadStyle={'absolute bottom-[-25px] left-1/2 -translate-x-1/2 w-10 h-14 rounded-b-full shadow-lg bg-[#C8C7C1]'}
        dropBodyStyle={'absolute top-0 left-0 h-full rounded-t-full bg-[#C8C7C1]'}
      />


      {/* Muted Terracotta (red orange) */}
      <Drip
        duration={10}
        animateY={[-200, 0,]}
        color={'#A85547'}
        dropStyle={'absolute top-0 right-[15%] w-4 h-72 opacity-85 z-0'}
        dropHeadStyle={'absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-7 h-10 rounded-b-full shadow-lg bg-[#A85547]'}
        dropBodyStyle={'absolute top-0 left-0 h-full rounded-t-full bg-[#A85547]'}
      />

      {/* Deep Teal (Realistic Drop Shape) */}
      <Drip
        duration={10}
        animateY={[-200, 0,]}
        color={'#0F766E'}
        dropStyle={'absolute top-0 left-[35%] w-3 h-64 opacity-90 z-0'}
        dropHeadStyle={'absolute bottom-[-18px] left-1/2 -translate-x-1/2 w-6 h-9 rounded-b-full shadow-lg bg-[#0F766E]'}
        dropBodyStyle={'absolute top-0 left-0 w-full h-full rounded-t-full bg-[#0F766E]'}
      />

      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Content */}
        <div className="space-y-6">
          <motion.h1
            className="text-6xl md:text-[4.9rem] font-extrabold text-[#1E1E1E] leading-tight"
            variants={itemVariants}
          >
            Alexander <br />
            <motion.span className="text-[#2F4F4F] inline-block"
              variants={itemVariants}>
              Homes
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl text-[#C8C7C1] max-w-lg"
            variants={itemVariants}
          >
            Elevate Your Home. Define Your Vision.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href="/colors">
              <div className="inline-block px-10 py-4 text-lg font-semibold bg-[#2F4F4F] text-[#F8F8F8] rounded-full shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                Explore Colors
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Right: Modern Visual Area */}
        <motion.div
          className="relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl from-neutral-100 to-neutral-200"
          variants={itemVariants}
        >
          {/* Main Hero Image */}
          <Image
            src="/hero.webp"
            alt="Beautifully painted modern interior"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}