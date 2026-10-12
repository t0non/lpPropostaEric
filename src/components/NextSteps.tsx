"use client";

import React, { useState } from "react";
import { proposal } from "@/config/proposal";
import { formatCurrency } from "@/lib/formatters";
import { PromoNoAlvoLogo } from "@/components/PromoNoAlvoLogo";
import {
  MessageSquare,
  Copy,
  Check,
  ArrowRight,
  FileCheck,
  CreditCard,
  PhoneCall,
  Rocket,
  ThumbsUp
} from "lucide-react";

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

  const stepsToStart = [
    {
      num: "1",
      icon: ThumbsUp,
      title: "Aprovação",
      desc: "Você confirma o interesse nesta proposta comercial.",
    },
    {
      num: "2",
      icon: FileCheck,
      title: "Contrato Simples",
      desc: "Formalização clara de escopo, garantias e prazos acordados.",
    },
    {
      num: "3",
      icon: CreditCard,
      title: "Entrada (50%)",
      desc: `Pagamento inicial de ${formatCurrency(proposal.downPaymentValue)} para dar a partida.`,
    },
    {
      num: "4",
      icon: PhoneCall,
      title: "Alinhamento",
      desc: "Briefing rápido para coletar links dos grupos e preferências.",
    },
    {
      num: "5",
      icon: Rocket,
      title: "Desenvolvimento",
      desc: "Construção acelerada e entrega para validação de Éric.",
    },
  ];

  return (
    <section id="proximos-passos" className="py-24 bg-[#0a0a0a] text-white relative border-t border-neutral-900 overflow-hidden">
      {/* Background glow subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo oficial da Promo no Alvo */}
        <div className="flex justify-center mb-8">
          <div className="p-3 bg-neutral-950/80 rounded-2xl border border-neutral-800 shadow-2xl backdrop-blur-sm">
            <PromoNoAlvoLogo className="h-16 sm:h-20 w-auto" variant="dark" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
          {proposal.client}, a <span className="text-[#E50914]">Promo no Alvo</span> já tem identidade.
          <br className="hidden sm:inline" /> Agora vamos construir sua presença digital.
        </h2>

        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Transforme seu projeto de achadinhos em uma plataforma sólida com blog, indexação no Google e um fluxo contínuo de novos participantes qualificados para os seus grupos.
        </p>

        {/* Process Bar: 5 passos para iniciar */}
        <div className="mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
            Como funciona para começarmos:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {stepsToStart.map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={i}
                  className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 text-left relative flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-6 h-6 rounded-full bg-[#E50914] text-white text-[11px] font-black flex items-center justify-center">
                      {st.num}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-1">{st.title}</h4>
                    <p className="text-[11px] text-neutral-400 leading-normal">{st.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Resumo do Investimento */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-neutral-900 border border-neutral-800 px-8 py-4 rounded-2xl mb-10 shadow-lg">
          <div className="text-left">
            <span className="text-xs text-neutral-400 block font-medium">Investimento total acordado:</span>
            <span className="text-3xl font-black text-[#E50914] tracking-tight">
              {formatCurrency(proposal.price)}
            </span>
          </div>
          <div className="h-8 w-px bg-neutral-800 hidden sm:block" />
          <div className="text-xs text-neutral-300 text-left">
            <span>50% entrada ({formatCurrency(proposal.downPaymentValue)}) + </span>
            <span className="text-neutral-400">50% na aprovação final ({formatCurrency(proposal.deliveryValue)})</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-12">
          {hasWhatsappNumber ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-black text-sm sm:text-base transition-all shadow-lg hover:shadow-red-900/30"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Aprovar proposta pelo WhatsApp</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={handleCopyMessage}
              className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-black text-sm sm:text-base transition-all shadow-lg hover:shadow-red-900/30"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-300" /> : <Copy className="w-5 h-5" />}
              <span>{copied ? "Mensagem copiada com sucesso!" : "Aprovar proposta (Copiar mensagem)"}</span>
            </button>
          )}

          <a
            href="#investimento"
            className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 text-sm font-semibold transition-all"
          >
            <span>Revisar investimento</span>
            <ArrowRight className="w-4 h-4 text-neutral-400" />
          </a>
        </div>

        {/* Footer Note */}
        <div className="pt-8 border-t border-neutral-900 text-xs text-neutral-500">
          Proposta comercial elaborada por <strong>{proposal.agency.name}</strong> • "{proposal.agency.tagline}" para <strong>{proposal.brand}</strong>.
        </div>
      </div>
    </section>
  );
}
