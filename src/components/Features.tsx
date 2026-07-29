"use client";

import { motion } from "framer-motion";
import { Users, Cpu, Flower2, Award } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Equipe Especializada",
    description:
      "Profissionais com formação internacional e anos de experiência em procedimentos estéticos avançados.",
  },
  {
    icon: Cpu,
    title: "Tecnologia Avançada",
    description:
      "Equipamentos de última geração importados, garantindo resultados superiores com máxima segurança.",
  },
  {
    icon: Flower2,
    title: "Ambiente Exclusivo",
    description:
      "Espaço projetado para proporcionar conforto, privacidade e uma experiência única de cuidado pessoal.",
  },
  {
    icon: Award,
    title: "Resultados Comprovados",
    description:
      "Mais de 5.000 procedimentos realizados com 98% de satisfação entre nossos pacientes.",
  },
];

export default function Features() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-background">
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
            Por que nos escolher
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4 tracking-tight">
            Excelência em Cada Detalhe
          </h2>
          <p className="max-w-2xl mx-auto text-muted mt-4 text-lg leading-relaxed">
            Cada aspecto da nossa clínica foi pensado para entregar a melhor
            experiência em cuidados estéticos.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-surface rounded-2xl p-8 border border-border-light hover:border-accent/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(201,169,110,0.1)]"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-warm text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>

              <h3 className="font-[family-name:var(--font-serif)] text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>

              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-accent/20 rounded-tr-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
