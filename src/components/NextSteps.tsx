"use client";

import React, { useState } from "react";
import { proposal } from "@/config/proposal";
import { formatCurrency } from "@/lib/formatters";
import { PromoNoAlvoLogo } from "@/components/PromoNoAlvoLogo";
import {
  MessageSquare, Copy, Check, ArrowRight,
  ThumbsUp, FileCheck, CreditCard, PhoneCall, Rocket
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

  const process = [
    { num: "1", icon: ThumbsUp, title: "Aprovação", desc: "Você confirma o interesse nesta proposta comercial." },
    { num: "2", icon: FileCheck, title: "Contrato", desc: "Formalização clara de escopo, garantias e prazos acordados." },
    { num: "3", icon: CreditCard, title: "Pagamento inicial", desc: `${formatCurrency(proposal.downPaymentValue)} (50%) para dar a partida no projeto.` },
    { num: "4", icon: PhoneCall, title: "Desenvolvimento", desc: "Construção da plataforma com alinhamentos pontuais conforme necessário." },
    { num: "5", icon: Rocket, title: "Entrega", desc: `Apresentação final, aprovação de Éric e ${formatCurrency(proposal.deliveryValue)} restantes.` },
  ];

  return (
    <section id="proximos-passos" className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E50914]/8 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <PromoNoAlvoLogo className="h-14 sm:h-16 w-auto" variant="dark" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
          A Promo no Alvo já tem identidade.
          <br className="hidden sm:inline" />
          <span className="text-[#E50914]"> Agora vamos construir um espaço próprio para ela crescer.</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-14 leading-relaxed">
          Uma plataforma profissional para organizar suas ofertas, publicar conteúdos e conectar novas pessoas aos seus grupos.
        </p>

        {/* Process steps */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
            Como é o processo
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {process.map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-left flex flex-col gap-2 relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-full bg-[#E50914] text-white text-[11px] font-black flex items-center justify-center">
                      {st.num}
                    </span>
                    <Icon className="w-4 h-4 text-slate-500" />
                  </div>
                  <h4 className="text-xs font-bold text-white">{st.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Investment summary strip */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl mb-10 shadow-lg">
          <div className="text-left">
            <span className="text-xs text-slate-500 font-medium block">Investimento total:</span>
            <span className="text-3xl font-black text-[#E50914]">
              {formatCurrency(proposal.price)}
            </span>
          </div>
          <div className="h-8 w-px bg-white/10 hidden sm:block" />
          <p className="text-xs text-slate-400 text-left">
            50% na contratação ({formatCurrency(proposal.downPaymentValue)})
            <span className="text-slate-600"> + </span>
            50% na entrega ({formatCurrency(proposal.deliveryValue)})
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto mb-12">
          {hasWhatsappNumber ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-black text-sm transition-all shadow-lg hover:shadow-red-900/30"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Quero iniciar a Promo no Alvo</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={handleCopyMessage}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-black text-sm transition-all shadow-lg"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-300" /> : <Copy className="w-5 h-5" />}
              <span>{copied ? "Mensagem copiada!" : "Quero iniciar a Promo no Alvo"}</span>
            </button>
          )}

          <a
            href="#investimento"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-sm font-semibold transition-all"
          >
            <span>Revisar investimento</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </a>
        </div>

        {/* Footer note */}
        <div className="pt-8 border-t border-white/5 text-xs text-slate-600">
          Proposta elaborada por{" "}
          <strong className="text-slate-500">{proposal.agency.name}</strong> •{" "}
          "{proposal.agency.tagline}" para{" "}
          <strong className="text-slate-500">{proposal.brand}</strong>.
        </div>
      </div>
    </section>
  );
}
