'use client';

import { motion } from 'framer-motion';

export default function CTAButton() {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        boxShadow: ["0px 0px 0px #FF6B35", "0px 0px 10px #FF6B35", "0px 0px 0px #FF6B35"],
        transition: { repeat: Infinity, duration: 2 }
      }}
      className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold"
      onClick={scrollToBottom}
    >
      Quero minha LP Agora →
    </motion.button>
  );
}
