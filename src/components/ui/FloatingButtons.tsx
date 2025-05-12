'use client';
import { motion, useAnimation, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import { FiInstagram, FiMessageSquare } from 'react-icons/fi';

export default function FloatingButtons() {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start("visible");
    }, 5000);

    return () => clearTimeout(timer);
  }, [controls]);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > 0.2) controls.start("visible");
    });
  }, [scrollYProgress, controls]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="fixed bottom-8 right-8 flex flex-col gap-4 z-50"
    >
      <motion.a
        href="https://wa.me/5579998807035"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: [1, 1.1, 1],
          transition: { repeat: Infinity, duration: 2 }
        }}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg"
      >
        <FiMessageSquare size={24} />
      </motion.a>
      
      <motion.a
        href="https://www.instagram.com/paduaviniciusdev?igsh=bWltaHF6aWxkendo"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg"
      >
        <FiInstagram size={24} />
      </motion.a>
    </motion.div>
  );
}