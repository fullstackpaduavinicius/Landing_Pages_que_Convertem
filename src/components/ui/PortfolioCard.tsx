'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
  result: string;
  link: string;
  techs: string[];
}

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="card-3d rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative h-64">
        <motion.img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover"
          variants={{
            hover: { scale: 1.05 }
          }}
        />
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            <a 
              href={item.link} 
              target="_blank"
              className="bg-primary text-white px-6 py-2 rounded-lg font-bold"
            >
              Ver Projeto
            </a>
          </motion.div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-sm text-primary mt-1">{item.result}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {item.techs.map((tech) => (
            <span key={tech} className="bg-dark/10 px-2 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}