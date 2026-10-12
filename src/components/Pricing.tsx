"use client";

import React from "react";
import { proposal } from "@/config/proposal";
import { formatCurrency } from "@/lib/formatters";
import { CheckCircle2, Info, CreditCard } from "lucide-react";

export function Pricing() {
  const features = [
    "Site profissional com domínio próprio",
    "Blog otimizado + 2 artigos iniciais",
    "SEO técnico e estrutura para buscas com IA",
    "Painel de gerenciamento de artigos e grupos",
    "Google Analytics e rastreamento de cliques",
    "Preparação técnica para Google Ads e Meta Ads",
  ];

  const price = proposal.price; // R$ 997
  const downPayment = proposal.downPaymentValue; // R$ 498,50
  const delivery = proposal.deliveryValue; // R$ 498,50

  return (
    <section id="investimento" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-3">
            Investimento
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Um investimento claro, sem surpresas.
          </h2>
        </div>

        {/* Premium card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white rounded-3xl border-2 border-slate-900 overflow-hidden shadow-xl">
            {/* Top accent */}
            <div className="h-2 bg-[#E50914] w-full" />

            <div className="p-8 sm:p-10">
              {/* Product name */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Plataforma Digital Promo no Alvo
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Site · Blog · SEO · Painel · Mensuração
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">
                  {formatCurrency(price)}
                </span>
                <span className="text-sm text-slate-500">investimento único</span>
              </div>

              {/* Payment split */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Na contratação</p>
                  <p className="text-lg font-black text-slate-900">{formatCurrency(downPayment)}</p>
                  <p className="text-[11px] text-slate-500">50%</p>
                </div>
                <div className="hidden sm:flex items-center text-slate-300 font-black text-lg">+</div>
                <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Na entrega</p>
                  <p className="text-lg font-black text-slate-900">{formatCurrency(delivery)}</p>
                  <p className="text-[11px] text-slate-500">50%</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-100 mb-6" />

              {/* Feature list */}
              <ul className="space-y-3 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* No ads needed note */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-2.5 mb-6">
                <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Anúncios pagos não são necessários para iniciar.</strong>{" "}
                  A estratégia começa com conteúdo orgânico. Publicidade pode ser adicionada no futuro, se desejado.
                </p>
              </div>

              {/* Costs disclaimer */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-2.5 mb-8">
                <CreditCard className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Custos externos não inclusos:</strong>{" "}
                  domínio (~R$ 40–60/ano), hospedagem (~R$ 20–50/mês) e demais serviços de terceiros são contratados diretamente por Éric e pagos separadamente.
                </p>
              </div>

              {/* Conditions placeholder */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-2.5 mb-8">
                <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-800 leading-relaxed">
                  <strong className="text-amber-900">Prazo, revisões e suporte</strong> serão informados e acordados antes da assinatura do contrato.
                </div>
              </div>

              {/* CTA */}
              <a
                href="#proximos-passos"
                className="block w-full text-center px-6 py-4 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-black text-base transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Quero iniciar a Promo no Alvo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
