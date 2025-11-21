import { motion } from 'framer-motion';

interface DripProps {
  duration: number;
  animateY: Array<number>
  color: string
  dropStyle: string,
  dropHeadStyle: string
  dropBodyStyle: string
  // ... other properties
}

const dropPulse = {
  scaleY: [1, 1.1, 0.95, 1],
  borderRadius: ['50%', '50%', '50%', '50%'], // Keep it rounded
};

export function Drip({ dropStyle, dropHeadStyle, dropBodyStyle, color,  animateY, duration }: DripProps) {
    return (
      <motion.div
      className={`bg-[${color}] ${dropStyle}`}
      initial={{ y: -250 }}
      animate={{ y: animateY }}
      transition={{ duration: duration, ease: "linear" }}
    >
      {/* Main body of the drip */}
      <div className={`bg-[${color}] ${dropBodyStyle}`} /> 
      
      {/* The Realistic Drop Head - Small, rounded bottom part with animation */}
      <motion.div 
          className={`bg-[${color}] ${dropHeadStyle}`}
          animate={dropPulse}
          transition={{ duration: duration, ease: "easeInOut" }}
      />
    </motion.div>
    );
}