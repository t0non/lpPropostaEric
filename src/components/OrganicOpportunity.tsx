"use client";

import React from "react";
import { GoogleSearchAnimation } from "@/components/GoogleSearchAnimation";

export function OrganicOpportunity() {
  return (
    <section id="oportunidade" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Label */}
        <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-4">
          A Oportunidade
        </span>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5 max-w-3xl mx-auto">
          E se a Promo no Alvo tivesse um divulgador trabalhando{" "}
          <span className="text-[#E50914]">24 horas por dia?</span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mb-4">
          É o que um site com conteúdo faz. Enquanto você dorme, um artigo
          publicado na <strong className="text-slate-700">Promo no Alvo</strong>{" "}
          pode estar aparecendo no Google para alguém buscando exatamente o que
          você divulga — e conduzindo essa pessoa direto pro seu grupo.
        </p>

        {/* Mini bullets */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 text-sm font-semibold text-slate-600">
          {[
            { icon: "🕐", text: "Disponível 24h por dia, 7 dias por semana" },
            { icon: "🔍", text: "Encontrado por quem já está procurando" },
            { icon: "📲", text: "Leva o leitor direto ao botão do grupo" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-base">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Animação centralizada */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl px-6 py-10 sm:px-12 sm:py-12 relative overflow-hidden max-w-2xl mx-auto">
          <div className="absolute -top-10 -right-10 w-56 h-56 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <GoogleSearchAnimation />
          </div>
        </div>

      </div>
    </section>
  );
}
