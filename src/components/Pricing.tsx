"use client";

import React, { useState } from "react";
import { proposal } from "@/config/proposal";
import { formatCurrency } from "@/lib/formatters";
import { CheckCircle2, ArrowRight, MessageCircle, HelpCircle, Check, Copy } from "lucide-react";

export function Pricing() {
  const [copied, setCopied] = useState(false);

  const hasWhatsappNumber = Boolean(
    proposal.agency.whatsappNumber &&
      proposal.agency.whatsappNumber.trim().length > 0
  );

  const whatsappStartLink = hasWhatsappNumber
    ? `https://wa.me/${proposal.agency.whatsappNumber.replace(
        /\D/g,
        ""
      )}?text=${encodeURIComponent("Olá! Quero iniciar o projeto da Promo no Alvo no valor de R$ 997,00.")}`
    : "#";

  const whatsappQuestionLink = hasWhatsappNumber
    ? `https://wa.me/${proposal.agency.whatsappNumber.replace(
        /\D/g,
        ""
      )}?text=${encodeURIComponent("Olá! Vi a proposta da Promo no Alvo e fiquei com uma dúvida antes de fechar.")}`
    : "#";

  const handleCopyStart = () => {
    navigator.clipboard.writeText("Olá! Quero iniciar o projeto da Promo no Alvo no valor de R$ 997,00.");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleCopyQuestion = () => {
    navigator.clipboard.writeText("Olá! Vi a proposta da Promo no Alvo e fiquei com uma dúvida antes de fechar.");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const deliverableItems = [
    "Site exclusivo e responsivo para celular e computador",
    "Blog integrado com estrutura de SEO e IA",
    "Dois primeiros artigos estratégicos inclusos",
    "Painel administrativo para gerenciar links e publicações",
    "Configuração de métricas no Google Analytics e Search Console",
    "Treinamento inicial de uso da plataforma",
  ];

  return (
    <section id="investimento" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-2">
            Investimento & Fechamento
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Vamos tirar a Promo no Alvo do papel?
          </h2>
        </div>

        {/* Card Único Elegante */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg">
          {/* Topo do Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-slate-100 gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#E50914] bg-red-50 px-3 py-1 rounded-full border border-red-200">
                PROPOSTA EXCLUSIVA PARA {proposal.client.toUpperCase()}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-3">
                Site completo + Blog + SEO + Painel
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Pagamento único de implantação da plataforma.
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-4xl sm:text-5xl font-black text-[#E50914] tracking-tight block">
                {formatCurrency(proposal.price)}
              </span>
              <span className="text-xs text-slate-400 font-medium">Pagamento único de implantação</span>
            </div>
          </div>

          {/* Condições de Pagamento: R$ 498,50 / R$ 498,50 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-semibold block">Na contratação (50%):</span>
              <div className="text-2xl font-black text-slate-900 mt-1">
                {formatCurrency(proposal.downPaymentValue)}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Para início imediato da produção e design.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-semibold block">Na entrega (50%):</span>
              <div className="text-2xl font-black text-slate-900 mt-1">
                {formatCurrency(proposal.deliveryValue)}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Após validação conjunta e publicação no ar.
              </p>
            </div>
          </div>

          {/* Pequena lista das principais entregas */}
          <div className="mb-8">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Principais entregas inclusas:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {deliverableItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-100">
            {hasWhatsappNumber ? (
              <a
                href={whatsappStartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-black text-sm sm:text-base text-center transition-all shadow-sm hover:shadow flex items-center justify-center gap-2"
              >
                <span>Quero iniciar meu projeto</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <button
                type="button"
                onClick={handleCopyStart}
                className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-black text-sm sm:text-base text-center transition-all shadow-sm hover:shadow flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-200" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Mensagem copiada!" : "Quero iniciar meu projeto"}</span>
              </button>
            )}

            {hasWhatsappNumber ? (
              <a
                href={whatsappQuestionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-4 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm text-center transition-all flex items-center justify-center gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Tenho uma dúvida</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={handleCopyQuestion}
                className="w-full sm:w-auto py-4 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm text-center transition-all flex items-center justify-center gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Tenho uma dúvida</span>
              </button>
            )}
          </div>

          {/* Observações Discretas */}
          <div className="mt-8 pt-6 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
            <p>• Anúncios pagos não são necessários para iniciar.</p>
            <p>• Domínio, hospedagem e eventuais serviços recorrentes não estão incluídos no valor de implantação.</p>
            <p>• Prazo de entrega e condições de suporte serão confirmados na formalização.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
