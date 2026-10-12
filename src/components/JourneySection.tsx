"use client";

import React from "react";
import { Search, Globe, MessageCircle, ArrowRight } from "lucide-react";

export function JourneySection() {
  const steps = [
    {
      num: "01",
      platform: "GOOGLE",
      icon: Search,
      title: "Pesquisa por produtos",
      desc: "Alguém pesquisa por produtos, promoções e recomendações no Google com intenção de compra.",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      num: "02",
      platform: "PROMO NO ALVO",
      icon: Globe,
      title: "Encontra o seu site",
      desc: "Encontra um artigo informativo, conhece as ofertas selecionadas e descobre os seus grupos.",
      badgeColor: "bg-red-50 text-[#E50914] border-red-200",
    },
    {
      num: "03",
      platform: "WHATSAPP",
      icon: MessageCircle,
      title: "Entra para o grupo",
      desc: "Clica no convite de acesso rápido para participar do seu grupo de ofertas em tempo real.",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-2">
            Fluxo Simples & Eficaz
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Como o site poderá atrair novos participantes?
          </h2>
        </div>

        {/* 3 Etapas com Setas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={idx} className="relative flex flex-col">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex-1 flex flex-col justify-between hover:border-slate-300 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${step.badgeColor}`}>
                        {step.platform}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {step.num}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 mb-4">
                      <Icon className="w-6 h-6 text-[#E50914]" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Seta indicativa no desktop */}
                {!isLast && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-300 items-center justify-center text-slate-400 shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Frase e transparência */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm sm:text-base font-medium text-slate-700 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            "Uma estratégia para conquistar visibilidade orgânica ao longo do tempo, sem precisar pagar por cada acesso."
          </p>
          <span className="text-[11px] text-slate-600 block mt-3">
            * O ranqueamento orgânico e o crescimento de participantes acontecem gradualmente conforme a publicação de novos conteúdos.
          </span>
        </div>
      </div>
    </section>
  );
}
