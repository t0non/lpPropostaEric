"use client";

import React from "react";
import {
  Smartphone, BookOpen, Sparkles, LayoutDashboard,
  BarChart3, Megaphone,
} from "lucide-react";

export function Deliverables() {
  const cards = [
    {
      icon: Smartphone,
      title: "Site profissional responsivo",
      benefit: "Éric terá um portal próprio com a identidade visual da Promo no Alvo, rápido em qualquer dispositivo — especialmente no celular, onde a maioria dos visitantes está.",
    },
    {
      icon: BookOpen,
      title: "Blog otimizado + 2 artigos iniciais",
      benefit: "Estrutura de blog pronta para publicar reviews, comparativos e listas de produtos. Dois artigos estratégicos inclusos para dar o pontapé inicial no conteúdo.",
    },
    {
      icon: Sparkles,
      title: "SEO técnico + estrutura para buscas com IA",
      benefit: "O site é configurado para que o Google e assistentes de inteligência artificial consigam ler e entender cada artigo publicado — base essencial para visibilidade orgânica.",
    },
    {
      icon: LayoutDashboard,
      title: "Painel de gerenciamento",
      benefit: "Área administrativa intuitiva para publicar artigos, alterar textos, mudar o link dos grupos de WhatsApp ou Telegram e tudo mais, sem depender de nenhum programador.",
    },
    {
      icon: BarChart3,
      title: "Analytics e rastreamento de cliques",
      benefit: "Configuração do Google Analytics e do Search Console para acompanhar quais artigos geram mais visitas, de onde vêm os acessos e quantos visitantes clicam no botão do grupo.",
    },
    {
      icon: Megaphone,
      title: "Preparação para Google Ads e Meta Ads",
      benefit: "Se no futuro Éric quiser impulsionar com anúncios, a estrutura técnica já estará pronta. Sem necessidade de retrabalho ou custo adicional para essa base.",
    },
  ];

  return (
    <section id="o-que-esta-incluso" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-3">
            O que está incluso
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Tudo o que você precisa para começar.
          </h2>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#E50914] flex items-center justify-center mb-4 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                  {c.benefit}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
