"use client";

import React, { useState } from "react";
import { proposal } from "@/config/proposal";
import { formatCurrency } from "@/lib/formatters";
import { CheckCircle2, ArrowRight, HelpCircle, Check, Copy, Sparkles } from "lucide-react";

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

  // Itens da Tabela de Ancoragem exatamente como na imagem
  const anchorItems = [
    {
      title: "Sua marca nas Inteligências Artificiais",
      value: "R$ 150,00",
      highlight: true,
    },
    {
      title: "Design Profissional Customizado",
      value: "R$ 250,00",
      highlight: false,
    },
    {
      title: "Otimização para Celular (Responsivo)",
      value: "R$ 100,00",
      highlight: false,
    },
    {
      title: "Configuração de SEO & GEO",
      value: "R$ 100,00",
      highlight: false,
    },
    {
      title: "Google Analytics & Search Console",
      value: "R$ 100,00",
      highlight: false,
    },
    {
      title: "Integração com WhatsApp e Grupos",
      value: "R$ 50,00",
      highlight: false,
    },
    {
      title: "Publicação e Configuração Inicial",
      value: "R$ 50,00",
      highlight: false,
    },
  ];

  return (
    <section id="investimento" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título Principal exatamente como na imagem de ancoragem */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Não é só &quot;um site&quot;.
            <br />
            Você recebe tudo pronto para funcionar.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 font-normal">
            Do visual à publicação, a parte técnica fica com a gente.
          </p>
        </div>

        {/* Card Principal com Ancoragem de Preço */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E50914]" />

          {/* TABELA DE ANCORAGEM (Exata da imagem do cliente) */}
          <div className="space-y-3.5 max-w-2xl mx-auto mb-10">
            {anchorItems.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-sm sm:text-base font-semibold transition-colors ${
                  item.highlight
                    ? "bg-pink-50/80 text-pink-600 font-bold"
                    : "text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>{item.title}</span>
                <span className={item.highlight ? "text-pink-600 font-bold" : "text-slate-900 font-bold"}>
                  {item.value}
                </span>
              </div>
            ))}

            {/* Linha Divisória */}
            <div className="border-b border-slate-200 my-4 pt-2" />

            {/* Valor Total Estimado Riscado (Ancoragem) */}
            <div className="flex items-center justify-between px-4 py-2 text-base sm:text-lg font-bold">
              <span className="text-slate-900">Valor Total Estimado:</span>
              <span className="text-slate-400 line-through decoration-red-600 decoration-2 font-black text-lg sm:text-xl">
                R$ 800,00
              </span>
            </div>
          </div>

          {/* BOX DO VALOR FINAL DA PROPOSTA (R$ 997,00) COM CONDIÇÕES */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#E50914] bg-red-100/70 px-3 py-1 rounded-full border border-red-200 inline-block mb-2">
                  PACOTE COMPLETO PROMO NO ALVO
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Site + Blog + SEO + Painel + Métricas
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Taxa única de implantação com tudo incluso.
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs text-slate-400 font-bold uppercase block">Investimento Final</span>
                <span className="text-4xl sm:text-5xl font-black text-[#E50914] tracking-tight">
                  {formatCurrency(proposal.price)}
                </span>
                <span className="text-xs text-slate-500 block font-medium">Pagamento único</span>
              </div>
            </div>

            {/* Condições 50% / 50% */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs text-slate-500 font-semibold block">50% na contratação:</span>
                <div className="text-2xl font-black text-slate-900 mt-0.5">
                  {formatCurrency(proposal.downPaymentValue)}
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Início imediato do planejamento e design.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs text-slate-500 font-semibold block">50% na entrega:</span>
                <div className="text-2xl font-black text-slate-900 mt-0.5">
                  {formatCurrency(proposal.deliveryValue)}
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Pago após validação conjunta e publicação no ar.
                </p>
              </div>
            </div>
          </div>

          {/* BOTÕES DE AÇÃO */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {hasWhatsappNumber ? (
              <a
                href={whatsappStartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-black text-base text-center transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Quero iniciar meu projeto</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            ) : (
              <button
                type="button"
                onClick={handleCopyStart}
                className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-black text-base text-center transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-5 h-5 text-emerald-200" /> : <Copy className="w-5 h-5" />}
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

          {/* OBSERVAÇÕES DISCRETAS */}
          <div className="mt-8 pt-6 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
            <p>• Anúncios pagos não são necessários para iniciar.</p>
            <p>• Domínio, hospedagem e eventuais serviços recorrentes não estão incluídos no valor de implantação.</p>
            <p>• Prazo de entrega e condições de suporte serão confirmados na formalização.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
