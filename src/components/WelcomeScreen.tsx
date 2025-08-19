import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import type { WelcomeScreenProps } from '@/types';

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const floatingIcons: string[] = ["🎨", "🏃‍♂️", "🧘‍♀️", "🎭", "🔬", "🍳"];

  const handleStart = (): void => {
    onStart();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Floating icons */}
      {floatingIcons.map((icon: string, index: number) => (
        <motion.div
          key={`${icon}-${index}`}
          className="absolute text-4xl opacity-20 select-none pointer-events-none"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600)
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            left: `${10 + (index * 15)}%`,
            top: `${20 + (index * 10)}%`
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center z-10"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-2">
            Activity
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Swipe
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl text-white/90 mb-12 max-w-md mx-auto leading-relaxed"
        >
          Découvrez votre prochaine passion près de chez vous
        </motion.p>

        {/* Start button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStart}
          className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center gap-3 mx-auto hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label="Commencer à découvrir des activités"
        >
          Commencer à découvrir
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Features preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto"
        >
          {[
            { icon: "🎨", label: "Art" },
            { icon: "🏃‍♂️", label: "Sport" },
            { icon: "🍳", label: "Cuisine" }
          ].map((item, index: number) => (
            <div key={`${item.label}-${index}`} className="text-center">
              <div className="text-2xl mb-1" role="img" aria-label={item.label}>
                {item.icon}
              </div>
              <div className="text-white/70 text-sm">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
