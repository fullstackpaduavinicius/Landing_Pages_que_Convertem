'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const PALAVRAS_ACAO = ["AUMENTAM VENDAS", "GERAM LEADS", "ELEVAM CONVERSÕES", "MULTIPLICAM CLIENTES", "MAXIMIZAM LUCROS"];

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function CTAButton({ children, onClick }: CTAButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full py-4 px-8 rounded-lg font-bold flex items-center justify-center gap-2 transition-all bg-primary hover:bg-primary/90 text-white"
    >
      {children}
    </button>
  );
}

export default function HeroSection() {
  const [indicePalavraAtual, setIndicePalavraAtual] = useState(0);
  const [textoExibido, setTextoExibido] = useState("");
  const [estaApagando, setEstaApagando] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const velocidadeDigitacao = estaApagando ? 30 : 80;
    const palavraAtual = PALAVRAS_ACAO[indicePalavraAtual];
    
    const timeout = setTimeout(() => {
      if (estaApagando) {
        setTextoExibido(palavraAtual.substring(0, textoExibido.length - 1));
        if (textoExibido.length === 0) {
          setEstaApagando(false);
          setIndicePalavraAtual((prev) => (prev + 1) % PALAVRAS_ACAO.length);
        }
      } else {
        setTextoExibido(palavraAtual.substring(0, textoExibido.length + 1));
        if (textoExibido.length === palavraAtual.length) {
          setTimeout(() => setEstaApagando(true), 1000);
        }
      }
    }, velocidadeDigitacao);

    return () => clearTimeout(timeout);
  }, [textoExibido, indicePalavraAtual, estaApagando]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark to-gray-900 text-light px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-primary">Landing Pages</span> que<br />
          <div className="h-24 md:h-32 flex items-center justify-center">
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary min-w-[200px] text-center">
              {textoExibido}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1"
              >
                |
              </motion.span>
            </span>
          </div>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          <strong className="text-primary">94% dos visitantes</strong> julgam uma empresa pela qualidade do seu site. 
          Sua landing page atual está perdendo <strong className="text-accent">dinheiro todos os dias</strong> se não for 
          otimizada para conversão. Projeto páginas que convertem até <strong>300% mais</strong> que a média do mercado.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 max-w-md"
          >
            <CTAButton onClick={scrollToBottom}>Quero uma proposta personalizada</CTAButton>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="text-2xl font-bold text-primary">+300%</div>
            <div className="text-sm">Conversão</div>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="text-2xl font-bold text-primary">48h</div>
            <div className="text-sm">Entrega Rápida</div>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-sm">Otimizadas</div>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="text-2xl font-bold text-primary">∞</div>
            <div className="text-sm">Retorno</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}