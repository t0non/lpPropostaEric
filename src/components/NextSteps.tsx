"use client";

import React, { useState } from "react";
import { proposal } from "@/config/proposal";
import { formatCurrency } from "@/lib/formatters";
import { PromoNoAlvoLogo } from "@/components/PromoNoAlvoLogo";
import { MessageSquare, Copy, Check, ArrowRight } from "lucide-react";

export function NextSteps() {
  const [copied, setCopied] = useState(false);

  const hasWhatsappNumber = Boolean(
    proposal.agency.whatsappNumber &&
      proposal.agency.whatsappNumber.trim().length > 0
  );

  const whatsappLink = hasWhatsappNumber
    ? `https://wa.me/${proposal.agency.whatsappNumber.replace(
        /\D/g,
        ""
      )}?text=${encodeURIComponent(proposal.agency.whatsappDefaultMessage)}`
    : "#";

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(proposal.agency.whatsappDefaultMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="proximos-passos" className="py-20 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logomarca no Fechamento Direta */}
        <div className="flex justify-center mb-6">
          <PromoNoAlvoLogo className="h-20 sm:h-28 w-auto" variant="light" />
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
          {proposal.client}, vamos colocar a{" "}
          <span className="text-[#E50914]">Promo no Alvo</span> no ar?
        </h2>

        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-8">
          Uma plataforma profissional pensada para organizar seus conteúdos, ampliar as possibilidades de descoberta e atrair novos participantes para os seus grupos.
        </p>

        <div className="inline-block bg-slate-50 border border-slate-200 px-6 py-2.5 rounded-2xl mb-8">
          <span className="text-xs text-slate-500 block">Investimento da proposta</span>
          <span className="text-2xl font-black text-[#E50914]">
            {formatCurrency(proposal.price)}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-10">
          {hasWhatsappNumber ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#E50914] hover:bg-[#B91C1C] text-white font-bold text-sm transition-all shadow-sm hover:shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Vamos iniciar o projeto</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={handleCopyMessage}
              className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#E50914] hover:bg-[#B91C1C] text-white font-bold text-sm transition-all shadow-sm hover:shadow"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Mensagem copiada!" : "Vamos iniciar (Copiar mensagem)"}</span>
            </button>
          )}

          <a
            href="#investimento"
            className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-sm font-semibold transition-all"
          >
            <span>Revisar investimento</span>
          </a>
        </div>

        <div className="pt-6 border-t border-slate-100 text-xs text-slate-400">
          Proposta desenvolvida por <strong>{proposal.agency.name}</strong> • "{proposal.agency.tagline}"
        </div>
      </div>
    </section>
  );
}
