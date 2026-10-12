"use client";

import React from "react";
import { proposal } from "@/config/proposal";
import { PromoNoAlvoLogo } from "@/components/PromoNoAlvoLogo";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="apresentacao"
      className="relative bg-white text-slate-900 overflow-hidden"
    >
      {/* Top red accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E50914]" />

      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(229,9,20,0.05),transparent)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pb-28 text-center relative z-10">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <PromoNoAlvoLogo className="h-16 sm:h-20 w-auto" variant="light" />
        </div>

        {/* Context tag */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-8 border border-slate-200">
          Proposta exclusiva para {proposal.client}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6">
          {proposal.client}, a{" "}
          <span className="text-[#E50914]">Promo no Alvo</span> merece
          <br className="hidden sm:inline" /> um espaço próprio na internet.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
          Um portal com blog, otimizado para o Google e com painel de gestão —
          para que suas ofertas encontrem novas pessoas{" "}
          <strong className="text-slate-700">mesmo enquanto você dorme.</strong>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#oportunidade"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-black text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Ver a proposta completa</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#investimento"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            Ver o investimento →
          </a>
        </div>

        {/* 3 benefit strips */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          {[
            "Site + Blog profissional",
            "Otimizado para o Google",
            "Painel de gestão incluso",
          ].map((label, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm font-semibold text-slate-600"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shrink-0" />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
