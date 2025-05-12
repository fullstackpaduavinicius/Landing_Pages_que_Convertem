'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSend,
  FiCheckCircle,
  FiUser,
  FiMail,
  FiPhone,
  FiFileText,
  FiArrowRight,
} from 'react-icons/fi';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, "Nome muito curto (mínimo 2 caracteres)"),
  email: z.string().email("Por favor, insira um e-mail válido"),
  whatsapp: z.string().min(11, "WhatsApp precisa ter DDD + 9 dígitos").max(11, "Número muito longo"),
  details: z.string().min(20, "Descreva com pelo menos 20 caracteres").max(500, "Máximo de 500 caracteres"),
  productType: z.string().min(1, "Selecione uma opção")
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange'
  });

  const onSubmit = (data: FormData) => {
    const message = `*NOVA SOLICITAÇÃO DE LANDING PAGE*%0A%0A` +
      `*Nome:* ${data.name}%0A` +
      `*E-mail:* ${data.email}%0A` +
      `*WhatsApp:* ${data.whatsapp}%0A` +
      `*Tipo de Produto:* ${data.productType}%0A%0A` +
      `*Detalhes da Landing Page:*%0A${data.details}%0A%0A` +
      `*Mensagem automática enviada pelo site*`;

    const whatsappUrl = `https://wa.me/5579998807035?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark to-primary/10">
      <div className="max-w-3xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200"
            >
              <h3 className="text-3xl font-bold mb-6 text-center text-dark">
                Solicite sua <span className="text-gradient">Landing Page Profissional</span>
              </h3>

              <p className="text-center text-gray-600 mb-8">
                Preencha os detalhes e receba uma proposta personalizada
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        {...register("name")}
                        placeholder="Seu nome completo"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-sm mt-1 pl-2">{errors.name.message}</p>}
                  </div>

                  <div>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        {...register("email")}
                        placeholder="Seu melhor e-mail"
                        type="email"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1 pl-2">{errors.email.message}</p>}
                  </div>

                  <div>
                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        {...register("whatsapp")}
                        placeholder="WhatsApp com DDD"
                        type="tel"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                      />
                    </div>
                    {errors.whatsapp && <p className="text-red-500 text-sm mt-1 pl-2">{errors.whatsapp.message}</p>}
                  </div>

                  <div>
                    <div className="relative">
                      <FiFileText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        {...register("productType")}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all appearance-none"
                      >
                        <option value="">Tipo de produto/serviço</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Serviço Profissional">Serviço Profissional</option>
                        <option value="Produto Digital">Produto Digital</option>
                        <option value="Produto Físico">Produto Físico</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                    {errors.productType && <p className="text-red-500 text-sm mt-1 pl-2">{errors.productType.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Como você imagina sua Landing Page?
                  </label>
                  <textarea
                    {...register("details")}
                    placeholder="Descreva com detalhes: cores, estilo, funcionalidades desejadas, público-alvo..."
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  />
                  {errors.details && <p className="text-red-500 text-sm mt-1 pl-2">{errors.details.message}</p>}
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full md:w-auto py-4 px-8 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                      isSubmitting || !isValid
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary hover:bg-primary/90 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="inline-block"
                        >
                          ⏳
                        </motion.span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <FiSend /> Quero minha Landing Page
                      </>
                    )}
                  </motion.button>

                  <a
                    href="https://docs.google.com/forms/d/1qd5azGbGfdgQNtg98vWvBQvZiaL7d8LvL20-IhPV4Ec/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 flex items-center gap-2 text-sm"
                  >
                    <FiArrowRight /> Prefere preencher um formulário guiado?
                  </a>
                </div>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center bg-white p-8 rounded-2xl shadow-2xl border border-gray-200"
            >
              <FiCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-dark mb-3">Solicitação enviada!</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Você foi redirecionado para o WhatsApp. Caso não tenha aberto automaticamente,{' '}
                <a
                  href="https://wa.me/5579998807035"
                  className="text-primary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  clique aqui para abrir o WhatsApp
                </a>.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-primary hover:text-primary/80 underline text-sm"
              >
                Enviar outra solicitação
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}