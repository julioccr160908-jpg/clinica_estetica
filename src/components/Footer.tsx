"use client";

import { Sparkles } from "lucide-react";

const footerLinks = {
  tratamentos: [
    { label: "Harmonização Facial", href: "#tratamentos" },
    { label: "Botox Premium", href: "#tratamentos" },
    { label: "Peeling Avançado", href: "#tratamentos" },
    { label: "Limpeza de Pele", href: "#tratamentos" },
    { label: "Preenchimento Labial", href: "#tratamentos" },
    { label: "Skincare Avançado", href: "#tratamentos" },
  ],
  institucional: [
    { label: "Sobre Nós", href: "#diferenciais" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-accent" strokeWidth={1.5} />
              <span className="font-[family-name:var(--font-serif)] text-lg font-semibold text-white">
                Estética <span className="text-accent">Premium</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-white/50 mb-6">
              Referência em tratamentos estéticos de alto padrão. Realçamos
              sua beleza natural com segurança e sofisticação.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {["Instagram", "Facebook", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/30 transition-all duration-300 text-xs font-medium"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Tratamentos */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Tratamentos
            </h4>
            <ul className="space-y-3">
              {footerLinks.tratamentos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Institucional
            </h4>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <span className="text-white/30 text-xs uppercase tracking-wider">Endereço</span>
                <p className="mt-1">
                  Av. Paulista, 1000 - Sala 1201
                  <br />
                  Bela Vista, São Paulo - SP
                </p>
              </li>
              <li>
                <span className="text-white/30 text-xs uppercase tracking-wider">Telefone</span>
                <p className="mt-1">(11) 99999-9999</p>
              </li>
              <li>
                <span className="text-white/30 text-xs uppercase tracking-wider">E-mail</span>
                <p className="mt-1">contato@esteticapremium.com.br</p>
              </li>
              <li>
                <span className="text-white/30 text-xs uppercase tracking-wider">Horário</span>
                <p className="mt-1">Seg - Sex: 9h às 19h | Sáb: 9h às 14h</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Estética Premium. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-white/30">
            CNPJ: 00.000.000/0001-00 | CRM/SP 000000
          </p>
        </div>
      </div>
    </footer>
  );
}
