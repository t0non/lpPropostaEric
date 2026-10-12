"use client";

import React from "react";
import { proposal } from "@/config/proposal";
import { PromoNoAlvoLogo } from "@/components/PromoNoAlvoLogo";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="apresentacao"
      className="relative min-h-[75vh] flex items-center justify-center bg-white text-slate-900 pt-16 pb-20 overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Logo Oficial Promo no Alvo */}
        <div className="flex justify-center mb-8">
          <PromoNoAlvoLogo className="h-20 sm:h-28 md:h-32 w-auto" variant="light" />
        </div>

        {/* Tag discreta */}
        <div className="inline-block px-3.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wide uppercase mb-6 border border-slate-200">
          Proposta Comercial Exclusiva para {proposal.client}
        </div>

        {/* Título Principal */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.15] mb-6">
          {proposal.client}, vamos colocar a{" "}
          <span className="text-[#E50914]">Promo no Alvo</span> no Google?
        </h1>

        {/* Subtítulo */}
        <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Um site profissional com blog estratégico, preparado para atrair visitantes pelas pesquisas e direcioná-los aos seus grupos de achadinhos.
        </p>

        {/* Botão de Ação */}
        <div className="flex justify-center">
          <a
            href="#problema"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-bold text-base transition-all shadow-sm hover:shadow-md hover:translate-y-[-1px]"
          >
            <span>Conhecer o projeto</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
