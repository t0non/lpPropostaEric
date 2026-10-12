"use client";

import React from "react";
import { Search, Code2, Binary, LineChart, FileText, CheckCircle2 } from "lucide-react";

export function SEOSection() {
  const pillars = [
    {
      title: "SEO Técnico & Estrutura",
      desc: "URLs amigáveis, sitemap XML, robots.txt, metadados semânticos e alta velocidade de carregamento.",
      icon: Code2,
    },
    {
      title: "SEO de Conteúdo",
      desc: "Estrutura de blog para responder pesquisas reais com ganchos diretos para seus grupos.",
      icon: FileText,
    },
    {
      title: "Dados Estruturados",
      desc: "Marcação Schema.org e JSON-LD para identificação correta pelos mecanismos de busca.",
      icon: Binary,
    },
    {
      title: "Google Search Console",
      desc: "Acompanhamento transparente das impressões, cliques e consultas de busca da Promo no Alvo.",
      icon: LineChart,
    },
  ];

  return (
    <section id="seo" className="py-20 bg-slate-50 text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-2">
            Presença no Google
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Um site preparado para ser encontrado nas buscas.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Base técnica e editorial organizada para aumentar as chances de descoberta orgânica ao longo do tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E50914] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{pil.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{pil.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-400">
          * SEO é uma estratégia de médio a longo prazo que constrói presença contínua sem cobrança por clique.
        </p>
      </div>
    </section>
  );
}
