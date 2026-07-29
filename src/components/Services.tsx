"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Harmonização Facial",
    description:
      "Técnicas avançadas de preenchimento para realçar os contornos naturais do rosto com resultado natural e sofisticado.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Botox Premium",
    description:
      "Aplicação precisa de toxina botulínica para suavizar linhas de expressão e prevenir o envelhecimento precoce.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Peeling Avançado",
    description:
      "Renovação celular profunda com protocolos personalizados para uma pele mais luminosa e uniforme.",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Limpeza de Pele",
    description:
      "Tratamento completo de higienização e hidratação profunda com produtos de alta performance.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Preenchimento Labial",
    description:
      "Volume e definição labial com ácido hialurônico de última geração, resultado natural e duradouro.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Skincare Avançado",
    description:
      "Protocolos personalizados de cuidado com a pele, combinando tecnologias e dermocosméticos premium.",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=400&fit=crop&q=80",
  },
];

export default function Services() {
  return (
    <section id="tratamentos" className="py-24 lg:py-32 bg-surface-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
            Nossos Tratamentos
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4 tracking-tight">
            Tratamentos Exclusivos
          </h2>
          <p className="max-w-2xl mx-auto text-muted mt-4 text-lg leading-relaxed">
            Protocolos desenvolvidos com as técnicas mais avançadas do mercado,
            sempre priorizando sua segurança e bem-estar.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-surface rounded-2xl overflow-hidden border border-border-light hover:border-accent/30 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(201,169,110,0.12)] hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-serif)] text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o tratamento de ${service.title}."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent text-sm font-medium group/link"
                >
                  Saiba mais
                  <span className="ml-1 transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
