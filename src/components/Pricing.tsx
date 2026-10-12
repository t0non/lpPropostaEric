"use client";

import React, { useState } from "react";
import { proposal } from "@/config/proposal";
import { Check, ArrowRight } from "lucide-react";

export function Pricing() {
  const [copied, setCopied] = useState(false);

  // Market comparison items for Promo no Alvo deliverables
  const marketServices = [
    { name: "Posicionamento nas IAs (Gemini, ChatGPT, Perplexity)", price: "R$ 250,00" },
    { name: "Criação do Site Oficial da Promo no Alvo", price: "R$ 500,00" },
    { name: "Otimização no Google: SEO Técnico Estruturado", price: "R$ 250,00" },
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

        {/* Proposal Real Price */}
        <div className="mt-12 max-w-xl mx-auto text-center">
          <div className="flex items-baseline justify-center text-slate-900">
            <span className="text-5xl sm:text-6xl font-black tracking-tight">
              R$ 997
            </span>
            <span className="text-2xl sm:text-3xl font-black">,00</span>
          </div>
          <p className="text-sm text-slate-500 font-medium mt-2">
            Estrutura completa da plataforma Promo no Alvo
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            {hasWhatsappNumber ? (
              <a
                href={whatsappLink!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-black text-sm sm:text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Quero começar: Aprovar a proposta da Promo no Alvo</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            ) : (
              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-black text-sm sm:text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-white" />
                    <span>Mensagem copiada para o WhatsApp!</span>
                  </>
                ) : (
                  <>
                    <ArrowRight className="w-5 h-5" />
                    <span>Quero começar: Aprovar a proposta da Promo no Alvo</span>
                  </>
                )}
              </button>
            )}
            <p className="text-xs text-slate-400 mt-2.5">
              Clique para confirmar interesse e dar início imediato ao projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
