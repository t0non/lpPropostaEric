"use client";

import React from "react";
import { proposal } from "@/config/proposal";
import {
  Sparkles,
  Sliders,
  TrendingUp,
  Target,
  CheckCircle2,
} from "lucide-react";

export function WhyThisStructure() {
  const differentials = [
    {
      title: "Identidade Própria",
      desc: "A Promo no Alvo terá uma presença digital forte, profissional e alinhada à sua marca, destacando-se de quem opera apenas com links dispersos em redes sociais.",
      icon: Sparkles,
    },
    {
      title: "Autonomia Operacional",
      desc: "O painel administrativo exclusivo facilitará atualizações rápidas de artigos, categorias e links de grupos sem nenhuma dependência de alterações manuais de código.",
      icon: Sliders,
    },
    {
      title: "Preparação para Crescimento",
      desc: "A arquitetura técnica permitirá incluir novas páginas, guias de compras, campanhas no Google/Meta Ads e otimizações contínuas sem retrabalho estrutural.",
      icon: TrendingUp,
    },
    {
      title: "Mensuração Real",
      desc: "As principais interações dos visitantes serão acompanhadas via GA4 e Pixel para orientar futuras decisões de conteúdo com base no comportamento dos usuários.",
      icon: Target,
    },
  ];

  return (
    <section className="py-24 bg-[#151515] text-white relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-900/60 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
            <span className="text-xs font-bold text-red-300 tracking-wide uppercase">
              Diferenciais do Projeto
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Pensado para funcionar hoje e evoluir amanhã.
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Uma base digital robusta que entrega resultados imediatos e permanece preparada
            para acompanhar o crescimento do seu negócio.
          </p>
        </div>

        {/* Grid de 4 Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-red-900/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-neutral-950 border border-neutral-800 text-[#E50914] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
