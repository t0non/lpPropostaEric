"use client";

import React from "react";
import { proposal } from "@/config/proposal";
import { CheckCircle2 } from "lucide-react";

export function Deliverables() {
  const deliverables = [
    "Site profissional e 100% responsivo com a marca Promo no Alvo",
    "Blog otimizado e estruturado para publicação de conteúdos",
    "SEO técnico e semântico inicial para mecanismos de busca",
    "Estrutura para buscas com Inteligência Artificial (AEO / GEO)",
    "Preparação técnica para anúncios no Google Ads e Meta Ads",
    "Rastreamento de eventos de conversão no Google Analytics 4 e Pixel",
    "Painel administrativo para gerenciar artigos, categorias e links",
    `Publicação de até ${proposal.includedInitialArticles} artigos estratégicos iniciais revisados`,
    "Publicação em ambiente de produção e orientação inicial de uso",
  ];

  return (
    <section id="incluso" className="py-20 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-2">
            Entregáveis
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            O que está incluso no projeto.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Tudo o que você precisa para colocar sua plataforma no ar de forma profissional e sem custos escondidos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-slate-400">
          * Não estão inclusos custos externos obrigatórios como anuidade de domínio (~R$ 40/ano no Registro.br) e verba de anúncios paga ao Google/Meta.
        </p>
      </div>
    </section>
  );
}
