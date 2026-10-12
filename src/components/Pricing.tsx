"use client";

import React from "react";
import { proposal } from "@/config/proposal";
import { formatCurrency } from "@/lib/formatters";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function Pricing() {
  const highlights = [
    "Site profissional e exclusivo com a marca Promo no Alvo",
    "Blog otimizado e estruturado para conteúdos",
    "SEO técnico e semântico inicial para o Google",
    "Estrutura para buscas com Inteligência Artificial",
    "Preparação técnica para Google Ads e Meta Ads",
    "Rastreamento avançado de eventos e conversões",
    "Painel administrativo para gerenciar tudo",
    "Publicação e orientação inicial de uso",
  ];

  return (
    <section id="investimento" className="py-20 bg-slate-50 text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-2">
            Investimento
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
            Uma estrutura completa. Um investimento acessível.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Valor único pela implantação completa descrita na proposta.
          </p>
        </div>

        {/* CARD DE PREÇO R$ 997 CLEAN E ELEGANTE */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E50914] bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                PROMO NO ALVO
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                Plataforma Digital Completa
              </h3>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-slate-400 block">Pagamento Único</span>
              <span className="text-4xl font-black text-[#E50914]">
                {formatCurrency(proposal.price)}
              </span>
            </div>
          </div>

          {/* Condições 50% / 50% */}
          <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
            <div>
              <p className="text-slate-400">Entrada na contratação (50%):</p>
              <p className="font-bold text-slate-900 text-base">{formatCurrency(proposal.downPaymentValue)}</p>
            </div>
            <div>
              <p className="text-slate-400">Entrega e publicação (50%):</p>
              <p className="font-bold text-slate-900 text-base">{formatCurrency(proposal.deliveryValue)}</p>
            </div>
          </div>

          <div className="space-y-2.5 mb-8">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          <a
            href="#proximos-passos"
            className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-[#E50914] hover:bg-[#B91C1C] text-white font-bold text-sm transition-all shadow-sm hover:shadow"
          >
            <span>Quero colocar a Promo no Alvo no ar</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
