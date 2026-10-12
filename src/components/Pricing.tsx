"use client";

import React, { useState } from "react";
import { proposal } from "@/config/proposal";
import { formatCurrency } from "@/lib/formatters";
import { Info, Check, Copy, ArrowRight, ExternalLink } from "lucide-react";

export function Pricing() {
  const [copied, setCopied] = useState(false);

  // Market comparison items for Promo no Alvo deliverables
  const marketServices = [
    { name: "Posicionamento nas IAs (Gemini, ChatGPT, Perplexity)", price: "R$ 250,00" },
    { name: "Criação do Site Oficial da Promo no Alvo", price: "R$ 500,00" },
    { name: "Otimização no Google — SEO Técnico Estruturado", price: "R$ 250,00" },
    { name: "Blog Integrado + Artigos Iniciais Estratégicos", price: "R$ 250,00" },
    { name: "Painel Administrativo para Gerenciamento de Grupos", price: "R$ 250,00" },
    { name: "Google Analytics 4 e Rastreamento de Cliques", price: "R$ 150,00" },
  ];

  const totalMarketPrice = "R$ 1.650,00";

  const hasWhatsappNumber = Boolean(
    proposal.agency.whatsappNumber &&
      proposal.agency.whatsappNumber.trim().length > 0
  );

  const whatsappLink = hasWhatsappNumber
    ? `https://wa.me/${proposal.agency.whatsappNumber.replace(
        /\D/g,
        ""
      )}?text=${encodeURIComponent(proposal.agency.whatsappDefaultMessage)}`
    : null;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(proposal.agency.whatsappDefaultMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="investimento" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-[#0f172a] tracking-tight leading-tight">
            O que outras agências cobram por cada serviço separado.
          </h2>
        </div>

        {/* Anchoring Table */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden divide-y divide-slate-100">
          {marketServices.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-5 sm:px-7 py-3.5 sm:py-4 hover:bg-slate-50/50 transition-colors"
            >
              <span className="text-xs sm:text-sm font-semibold text-[#0369a1] pr-4">
                {service.name}
              </span>
              <span className="text-xs sm:text-sm font-black text-slate-900 shrink-0">
                {service.price}
              </span>
            </div>
          ))}

          {/* Table Total (crossed out with red line, black text) */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-4 bg-slate-50/50">
            <span className="text-xs sm:text-sm font-black text-slate-900">
              Valor Total Estimado:
            </span>
            <span className="text-base sm:text-lg font-black text-slate-900 line-through decoration-[#E50914] decoration-[2.5px]">
              {totalMarketPrice}
            </span>
          </div>
        </div>

        {/* Proposal Contrast / Real Price */}
        <div className="mt-14 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            {/* 1st Payment */}
            <div className="text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-[11px] uppercase tracking-wide mb-3">
                1º Pagamento (50% Entrada)
              </span>
              <div className="flex items-baseline justify-center text-slate-900">
                <span className="text-4xl sm:text-5xl font-black tracking-tight">
                  R$ 498
                </span>
                <span className="text-xl sm:text-2xl font-black">,50</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Criação de toda a estrutura
              </p>
            </div>

            {/* Arrow separator */}
            <div className="hidden sm:block text-slate-300 text-2xl font-light">
              →
            </div>

            {/* 2nd Payment */}
            <div className="text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-[11px] uppercase tracking-wide mb-3">
                2º Pagamento (50% Entrega)
              </span>
              <div className="flex items-baseline justify-center text-slate-900">
                <span className="text-4xl sm:text-5xl font-black tracking-tight">
                  R$ 498
                </span>
                <span className="text-xl sm:text-2xl font-black">,50</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Após validação e entrega final
              </p>
            </div>
          </div>

          {/* Economia badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs sm:text-sm font-bold shadow-sm">
              <span>Investimento Único: {formatCurrency(proposal.price)}</span>
              <span className="text-emerald-400 font-semibold text-xs">
                (Economia de R$ 653,00 em relação ao valor avulso de mercado)
              </span>
            </div>
          </div>

          {/* Disclaimers & Transparency */}
          <div className="mt-8 space-y-2.5 max-w-xl mx-auto">
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex items-start gap-2.5 text-left">
              <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Sem mensalidades ocultas:</strong> este
                é um valor único de implementação. Não exigimos gestão mensal
                obrigatória para a plataforma funcionar.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex items-start gap-2.5 text-left">
              <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Custos externos de terceiros:</strong>{" "}
                domínio (~R$ 40/ano) e hospedagem (~R$ 20–50/mês) são contratados
                diretamente por Éric para manter a propriedade 100% sua.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center max-w-md mx-auto">
            {hasWhatsappNumber ? (
              <a
                href={whatsappLink!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-black text-sm sm:text-base transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Aprovar proposta e iniciar</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-black text-sm sm:text-base transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Mensagem copiada para o WhatsApp!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Quero aprovar a proposta da Promo no Alvo</span>
                  </>
                )}
              </button>
            )}
            <p className="text-[11px] text-slate-400 mt-2">
              Clique para confirmar interesse e alinhar os detalhes de início com a equipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
