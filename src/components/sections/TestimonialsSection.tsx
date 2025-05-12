'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  project: string;
  rating: number;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Henrique",
      role: "Gestor do Escritório Imobiliário",
      text: "O site ficou incrível! Já no primeiro mês tivemos um aumento significativo no número de contatos de proprietários interessados. A performance e o visual passaram muita credibilidade.",
      project: "Landing page para escritório imobiliário",
      rating: 5
    },
    {
      id: 2,
      name: "Juliana Martins",
      role: "Fundadora do Salão One",
      text: "Nosso novo site trouxe uma experiência moderna e prática para os clientes. Estamos recebendo agendamentos online com facilidade e os visitantes elogiam o design direto e elegante.",
      project: "Landing page para salão de beleza",
      rating: 5
    },
    {
      id: 3,
      name: "Ricardo Lopes",
      role: "CEO na DevSolution",
      text: "Precisávamos de uma presença digital forte, e o resultado superou nossas expectativas. A estrutura e a usabilidade do site refletem exatamente o que somos como empresa.",
      project: "Site institucional DevSolution",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-dark text-light">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
        O que meus <span className="text-gradient">clientes dizem</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 max-w-7xl mx-auto">
        {testimonials.map((testimonial) => (
          <motion.div 
            key={testimonial.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-light/10 rounded-2xl p-6 backdrop-blur-md border border-white/10 shadow-lg"
          >
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`text-xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-500'}`}
                >
                  ★
                </span>
              ))}
            </div>

            <p className="italic mb-4 text-light/90 leading-relaxed">
              &quot;{testimonial.text}&quot;
            </p>

            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-full bg-primary" />
              <div>
                <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
                <p className="text-sm text-light/60">{testimonial.role}</p>
                <p className="text-xs text-light/40 italic mt-1">Projeto: {testimonial.project}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
