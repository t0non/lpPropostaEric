"use client";

import React from "react";
import { proposal } from "@/config/proposal";
import { PromoNoAlvoLogo } from "@/components/PromoNoAlvoLogo";
import { ArrowRight, Users, TrendingUp, Settings } from "lucide-react";

export function Hero() {
  const highlights = [
    { icon: TrendingUp, label: "Atração orgânica" },
    { icon: Users, label: "Crescimento dos grupos" },
    { icon: Settings, label: "Gestão simplificada" },
  ];

  return (
    <section id="apresentacao" className="relative bg-white text-slate-900 overflow-hidden">
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E50914]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Logo */}
            <div className="mb-8">
              <PromoNoAlvoLogo className="h-16 sm:h-20 w-auto" variant="light" />
            </div>

            {/* Context tag */}
            <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-6 border border-slate-200">
              Proposta exclusiva para {proposal.client}
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1] mb-5">
              {proposal.client}, vamos transformar a{" "}
              <span className="text-[#E50914]">Promo no Alvo</span> em um novo
              canal de descoberta para seus grupos?
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
              Seu próprio portal de ofertas, com blog estratégico, estrutura
              otimizada para o Google e painel para gerenciar tudo em um só
              lugar.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-10">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-700"
                  >
                    <Icon className="w-4 h-4 text-[#E50914]" />
                    {h.label}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#demonstracao"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-bold text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Conhecer meu futuro site</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* RIGHT: Visual Mockup Preview */}
          <div className="lg:col-span-6 relative">
            {/* Decorative blur behind mockup */}
            <div className="absolute -inset-4 bg-gradient-to-br from-red-50 via-white to-slate-50 rounded-3xl -z-10" />

            {/* Browser mockup frame */}
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Browser bar */}
              <div className="bg-slate-100 px-4 py-2.5 flex items-center gap-3 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1 text-[11px] font-mono text-slate-500 border border-slate-200">
                  promonoalvo.com.br
                </div>
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Demonstração
                </span>
              </div>

              {/* Site Preview Content */}
              <div className="p-5">
                {/* Header strip */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <PromoNoAlvoLogo className="h-6 w-auto" variant="light" />
                  <button type="button" className="px-3 py-1.5 rounded-lg bg-[#E50914] text-white text-[11px] font-bold">
                    Entrar no Grupo
                  </button>
                </div>

                {/* Hero strip */}
                <div className="bg-slate-50 rounded-xl p-4 mb-4 text-center border border-slate-100">
                  <span className="text-[10px] font-black text-[#E50914] uppercase tracking-wider bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Curadoria de Achadinhos
                  </span>
                  <h3 className="text-sm font-black text-slate-900 leading-snug">
                    As melhores ofertas da internet,{" "}
                    <span className="text-[#E50914]">no alvo.</span>
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1.5">
                    Análises e comparativos para economizar de verdade.
                  </p>
                </div>

                {/* Category pills */}
                <div className="grid grid-cols-4 gap-1.5 mb-4">
                  {["Tecnologia", "Moda", "Casa", "Beleza"].map((c) => (
                    <div key={c} className="text-center py-1.5 px-2 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-semibold text-slate-700">
                      {c}
                    </div>
                  ))}
                </div>

                {/* Article cards */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { cat: "Tecnologia", title: "5 fones Bluetooth com bom custo-benefício" },
                    { cat: "Casa", title: "Air Fryer: Mondial vs Philips Walita" },
                  ].map((a, i) => (
                    <div key={i} className="p-2.5 bg-white border border-slate-200 rounded-xl">
                      <span className="text-[9px] font-black text-[#E50914] uppercase block mb-0.5">{a.cat}</span>
                      <p className="text-[10px] font-bold text-slate-800 leading-snug">{a.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 bg-[#E50914] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
              Visual demonstrativo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
