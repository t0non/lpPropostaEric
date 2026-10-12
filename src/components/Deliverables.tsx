"use client";

import React from "react";
import {
  Smartphone,
  BookOpen,
  Sparkles,
  LayoutDashboard,
  BarChart3,
  Megaphone
} from "lucide-react";

export function Deliverables() {
  const cards = [
    {
      icon: Smartphone,
      title: "Site profissional",
      desc: "Design personalizado, rápido e adaptado para celular.",
    },
    {
      icon: BookOpen,
      title: "Blog estratégico",
      desc: "Estrutura para publicar conteúdos e dois artigos iniciais.",
    },
    {
      icon: Sparkles,
      title: "SEO + Buscas com IA",
      desc: "Otimizações técnicas para facilitar a descoberta e compreensão do conteúdo.",
    },
    {
      icon: LayoutDashboard,
      title: "Painel administrativo",
      desc: "Gerencie artigos, categorias e links dos grupos.",
    },
    {
      icon: BarChart3,
      title: "Métricas e rastreamento",
      desc: "Acompanhe visitas, origens dos acessos e cliques nos grupos.",
    },
    {
      icon: Megaphone,
      title: "Preparado para anúncios",
      desc: "Estrutura técnica para Google Ads e Meta Ads, caso queira anunciar futuramente.",
    },
  ];

  return (
    <section id="o-que-esta-incluso" className="py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-2">
            Escopo Completo & Direto
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Tudo o que você precisa para começar.
          </h2>
        </div>

        {/* 6 Cards com ícone, título e descrição curta */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-start"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#E50914] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
