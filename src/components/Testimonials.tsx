"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina S.",
    treatment: "Harmonização Facial",
    rating: 5,
    text: "Resultado incrível e super natural! A equipe foi extremamente atenciosa e o ambiente é maravilhoso. Me senti segura durante todo o procedimento.",
    avatar: "AC",
  },
  {
    name: "Mariana Oliveira",
    treatment: "Botox Premium",
    rating: 5,
    text: "Já fiz botox em outros lugares, mas aqui o resultado foi outro nível. A Dra. tem um olhar artístico incrível. Recomendo de olhos fechados!",
    avatar: "MO",
  },
  {
    name: "Patrícia Lima",
    treatment: "Peeling Avançado",
    rating: 5,
    text: "Minha pele nunca esteve tão bonita! Depois do protocolo de peeling, as manchas sumiram e minha pele ficou muito mais luminosa e uniforme.",
    avatar: "PL",
  },
  {
    name: "Fernanda Costa",
    treatment: "Skincare Avançado",
    rating: 5,
    text: "O protocolo de skincare personalizado transformou minha pele. Em 3 sessões já notei diferença. A clínica é linda e o atendimento é impecável.",
    avatar: "FC",
  },
  {
    name: "Juliana Ramos",
    treatment: "Preenchimento Labial",
    rating: 5,
    text: "Ficou perfeito e natural! Tinha medo de ficar artificial mas a profissional entendeu exatamente o que eu queria. Amei o resultado!",
    avatar: "JR",
  },
  {
    name: "Camila Duarte",
    treatment: "Limpeza de Pele",
    rating: 5,
    text: "Faço limpeza de pele aqui regularmente e a qualidade é incomparável. Os produtos são de primeira e o resultado dura muito mais tempo.",
    avatar: "CD",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-background">
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
            Depoimentos
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4 tracking-tight">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="max-w-2xl mx-auto text-muted mt-4 text-lg leading-relaxed">
            A satisfação dos nossos pacientes é o nosso maior reconhecimento.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative bg-surface rounded-2xl p-8 border border-border-light hover:border-accent/20 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(201,169,110,0.08)]"
            >
              {/* Decorative Quote */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/10" strokeWidth={1.5} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                    strokeWidth={1}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted">{testimonial.treatment}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
