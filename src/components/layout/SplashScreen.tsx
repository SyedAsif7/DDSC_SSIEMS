import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getAssetPath } from '@/lib/utils';

export default function SplashScreen({ onFinished }: { onFinished: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 600),
      setTimeout(() => setStep(2), 1400),
      setTimeout(() => setStep(3), 2200),
      setTimeout(() => onFinished(), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onFinished]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Actual DCode Logo reveal */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-600/10 via-indigo-500/10 to-blue-600/10 flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.6)] border border-purple-500/30"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            src={getAssetPath('/images/club/Dcode-Logo.png')}
            alt="DCode Logo"
            className="w-32 h-32 object-contain"
          />
        </motion.div>

        {/* Text reveal steps */}
        <div className="flex flex-col items-center gap-4">
          <AnimatePresence mode="wait">
            {step >= 1 && (
              <motion.h1
                key="dcode"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-4xl md:text-6xl font-black text-white tracking-tight italic"
              >
                D<span className="gradient-text">Code</span>
              </motion.h1>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {step >= 2 && (
              <motion.p
                key="tagline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-sm md:text-base font-medium tracking-widest uppercase"
              >
                Developers Club
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {step >= 3 && (
              <motion.div
                key="enter"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5 }}
                className="flex items-center gap-2 text-purple-400 text-sm font-medium"
              >
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                Entering the world of code...
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
