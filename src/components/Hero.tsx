"use client";

import React from "react";
import { proposal } from "@/config/proposal";
import { PromoNoAlvoLogo } from "@/components/PromoNoAlvoLogo";
import {
  Search,
  ArrowRight,
  TrendingUp,
  Cpu,
  Sliders,
  ChevronDown,
  Target,
} from "lucide-react";

export function Hero() {
  const badges = [
    { label: "SEO Otimizado", icon: Search },
    { label: "Busca com IA", icon: Cpu },
    { label: "Google e Meta Ads", icon: TrendingUp },
    { label: "Tracking de Cliques", icon: Target },
    { label: "Painel Administrativo", icon: Sliders },
  ];

  return (
    <section
      id="topo"
      className="relative min-h-[85vh] flex items-center justify-center bg-white text-slate-900 pt-12 sm:pt-16 pb-16 overflow-hidden"
    >
      {/* Elemento de fundo sutil e clean */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-red-50/50 via-slate-50/30 to-transparent blur-3xl -z-10" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Identificação Superior Clean */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs mb-6">
          <Target className="w-3.5 h-3.5 text-[#E50914]" />
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-600">
            Proposta Comercial Personalizada
          </span>
        </div>

        {/* Logomarca Oficial Direta (sem nenhum container/caixa) */}
        <div className="flex justify-center mb-6">
          <PromoNoAlvoLogo className="h-24 sm:h-32 md:h-40 w-auto" variant="light" />
        </div>

        {/* Headline Principal Direta e Elegante */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.15] mb-5">
          Vamos colocar a Promo no Alvo{" "}
          <span className="text-[#E50914]">no radar</span> de novos visitantes.
        </h1>

        {/* Subheadline Clara e Objetiva */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
          Um site profissional preparado para buscas no Google, inteligência artificial e anúncios, com painel para você gerenciar seus grupos e ofertas.
        </p>

        {/* Indicador de rolagem */}
        <div className="animate-bounce text-slate-400 flex justify-center mt-6">
          <a href="#problema" aria-label="Rolar para baixo">
            <ChevronDown className="w-5 h-5 text-slate-400" />
          </a>
        </div>

        {/* Indicador de rolagem */}
        <div className="animate-bounce text-slate-400 flex justify-center">
          <a href="#problema" aria-label="Rolar para baixo">
            <ChevronDown className="w-5 h-5 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
