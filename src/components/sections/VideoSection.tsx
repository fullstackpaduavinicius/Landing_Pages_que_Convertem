'use client';

import { motion } from 'framer-motion';

export default function VideoSection() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-24 bg-light text-dark">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Está perdendo vendas por <span className="text-gradient">não ter uma presença digital forte?</span>
        </h2>

        <p className="text-lg text-dark/80 mb-12 max-w-3xl mx-auto">
          Hoje, quem está fora do digital simplesmente não compete. Seus concorrentes já estão online, atraindo clientes com sites modernos, rápidos e pensados para converter.
          <br />
          O que <strong>Tiago Tessmann, especialista em marketing digital e referência no que faz, tem a dizer sobre landing pages?</strong>
        </p>

        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border-2 border-dark/10"
        >
          <video
            controls
            poster="/imagens/video-thumbnail.png"
            className="w-full h-full object-cover"
          >
            <source src="/imagens/video_lp.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button
            onClick={scrollToBottom}
            className="inline-block px-8 py-4 bg-primary text-white font-bold text-lg rounded-full shadow-lg hover:brightness-110 transition"
          >
            Quero isso no meu negócio!
          </button>
          <p className="mt-6 text-xl font-semibold text-primary">
            Vamos criar uma solução digital que realmente gera resultados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
