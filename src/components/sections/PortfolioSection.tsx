'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PortfolioCard, { PortfolioItem } from '../ui/PortfolioCard';

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Escritório Imobiliário",
    imageUrl: "/imagens/escritorio-imobiliario.jpeg",
    result: "Landing page estratégica para captação de leads com foco em performance, responsividade e alta conversão. Formulário totalmente integrado ao funil do cliente.",
    link: "https://landing-page-escritorio-smoky.vercel.app/",
    techs: []
  },
  {
    id: 2,
    title: "Salão de Beleza",
    imageUrl: "/imagens/salao.jpeg",
    result: "Experiência digital completa para negócios locais: apresentação de serviços, portfólio visual, agendamento online e geração de orçamento automatizada.",
    link: "https://sal-o-one.vercel.app/",
    techs: []
  },
  {
    id: 3,
    title: "DevSolution",
    imageUrl: "/imagens/devsolution.jpeg",
    result: "Site institucional com 5 páginas personalizadas e design de alto impacto, pensado para transmitir autoridade e atrair clientes de software sob demanda com uma UI/UX refinada.",
    link: "https://devsolutions-lvpryiwc2-padua-vinicius-projects.vercel.app/",
    techs: []
  },
  
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);

  return (
    <section ref={ref} className="py-24 bg-light text-dark relative overflow-hidden">
      {/* Título animado */}
      <motion.h2 
        style={{ y }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 leading-tight"
      >
        Projetos que transformam <span className="text-gradient">negócios em presença digital</span>
      </motion.h2>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-12">
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <PortfolioCard item={item} />
          </motion.div>
        ))}
      </div>

      {/* Aviso profissional */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }}
        className="mt-16 px-6 py-5 bg-white border border-gray-200 rounded-xl shadow-sm max-w-2xl mx-auto text-center text-sm text-gray-600"
      >
        <p>
          <strong className="text-gray-800">Nota:</strong> Todos os projetos exibidos são versões demonstrativas. Imagens, textos e dados reais foram substituídos por conteúdo genérico para garantir a privacidade dos meus clientes — o foco aqui é mostrar meu processo, qualidade e resultados entregues.
        </p>
      </motion.div>
    </section>
  );
}
