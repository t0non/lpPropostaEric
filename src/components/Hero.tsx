"use client";

import React from "react";
import { proposal } from "@/config/proposal";
import { PromoNoAlvoLogo } from "@/components/PromoNoAlvoLogo";
import { Search, Users, TrendingUp, ChevronDown, Target } from "lucide-react";

export function Hero() {
  const benefits = [
    {
      icon: Search,
      label: "Ser encontrado",
      desc: "Ampliar oportunidades de descoberta pelas pesquisas.",
    },
    {
      icon: TrendingUp,
      label: "Atrair interessados",
      desc: "Apresentar conteúdos e recomendações relevantes.",
    },
    {
      icon: Users,
      label: "Crescer a comunidade",
      desc: "Facilitar o acesso aos grupos de achadinhos.",
    },
  ];

  return (
    <section
      id="topo"
      className="relative min-h-[90vh] flex items-center justify-center bg-white text-slate-900 pt-10 pb-16 overflow-hidden"
    >
      {/* Fundo sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-red-50/40 via-slate-50/20 to-transparent blur-3xl -z-10" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Etiqueta de contexto */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs mb-7">
          <Target className="w-3.5 h-3.5 text-[#E50914]" />
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-600">
            Proposta Comercial · {proposal.client} · {proposal.agency.name}
          </span>
        </div>

        {/* Logomarca direta */}
        <div className="flex justify-center mb-8">
          <PromoNoAlvoLogo className="h-24 sm:h-32 md:h-40 w-auto" variant="light" />
        </div>

        {/* Headline principal */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.15] mb-5">
          Transforme a Promo no Alvo em um novo canal de descoberta{" "}
          <span className="text-[#E50914]">para seus grupos.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed mb-12">
          Uma plataforma profissional com blog estratégico, SEO, painel
          administrativo e mensuração — preparada para conectar pessoas
          interessadas em ofertas aos seus grupos.
        </p>

        {/* Três benefícios */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-slate-50 border border-slate-200/80"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E50914] flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-sm font-bold text-slate-900 mb-1">{b.label}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Scroll cue */}
        <div className="animate-bounce flex justify-center">
          <a href="#problema" aria-label="Rolar para baixo">
            <ChevronDown className="w-5 h-5 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
