"use client";

import React from "react";
import { Search, FileText, MessageCircle, UserCheck, ArrowRight } from "lucide-react";
import { GoogleSearchAnimation } from "@/components/GoogleSearchAnimation";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: Search,
      platform: "Google",
      query: '"Melhor fone Bluetooth barato"',
      title: "Pesquisa no Google",
      desc: "O usuário busca por produtos e promoções com intenção de compra.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      num: "02",
      icon: FileText,
      platform: "Promo no Alvo",
      query: '"5 fones Bluetooth com bom custo-benefício"',
      title: "Encontra o artigo",
      desc: "O artigo aparece nos resultados. Ele clica, lê e descobre a curadoria da marca.",
      color: "text-[#E50914]",
      bg: "bg-red-50",
      border: "border-red-200",
    },
    {
      num: "03",
      icon: MessageCircle,
      platform: "WhatsApp / Telegram",
      query: '"Entre no grupo e acompanhe promoções de tecnologia"',
      title: "Recebe o convite",
      desc: "Ao final do artigo, um botão direto convida o leitor a entrar no grupo de ofertas.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
    {
      num: "04",
      icon: UserCheck,
      platform: "Resultado desejado",
      query: "Novo participante no grupo",
      title: "Possível novo membro",
      desc: "Um visitante desconhecido se torna um participante qualificado e engajado.",
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-200",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-3">
            Fluxo de Descoberta
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Como o site poderá atrair novos participantes
          </h2>
        </div>

        {/* 🔴 ANIMAÇÃO: Google Search em loop */}
        <div className="mb-16 bg-slate-50 border border-slate-200 rounded-3xl px-6 py-8 sm:px-10 sm:py-10 relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute -top-8 -right-8 w-48 h-48 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center mb-6">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Simulação animada · Exemplo real
              </span>
            </div>
            <GoogleSearchAnimation />
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-slate-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === steps.length - 1;
              return (
                <div key={idx} className="relative flex flex-col items-start">
                  {/* Step icon */}
                  <div className={`w-14 h-14 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${step.color}`} />
                  </div>

                  {/* Arrow connector on desktop */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-3 top-4 z-20 w-6 h-6 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 shadow-xs">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div className="mb-1.5">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${step.color} block`}>
                      Passo {step.num} · {step.platform}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>

                  {/* Example */}
                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 mb-3 w-full">
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider mb-0.5">Exemplo:</span>
                    <span className="text-xs font-semibold text-slate-700">{step.query}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <span className="text-xs text-slate-400 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full inline-block">
            * Jornada ilustrativa. O ranqueamento orgânico e os resultados dependem do volume e qualidade de conteúdos publicados ao longo do tempo.
          </span>
        </div>
      </div>
    </section>
  );
}
