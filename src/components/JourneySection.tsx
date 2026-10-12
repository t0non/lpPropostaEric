"use client";

import React, { useState } from "react";
import { Search, FileText, Sparkles, MessageCircle, UserCheck, ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";

export function JourneySection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: "01",
      icon: Search,
      badge: "Início da Busca",
      title: "Pesquisa no Google",
      example: '"melhor fone bluetooth até R$ 200" ou "air fryer custo benefício"',
      desc: "O consumidor tem intenção imediata de compra ou pesquisa e busca recomendações no Google.",
      highlight: "Tráfego qualificado e com intenção",
    },
    {
      step: "02",
      icon: FileText,
      badge: "Descoberta",
      title: "Artigo no Promo no Alvo",
      example: "promonoalvo.com.br/artigos/melhores-fones-bluetooth",
      desc: "Ele encontra o artigo informativo do Promo no Alvo com comparativos, prós e contras e links de produtos.",
      highlight: "Autoridade e primeira impressão profissional",
    },
    {
      step: "03",
      icon: Sparkles,
      badge: "Engajamento",
      title: "Valor e Confiança",
      example: "Dicas de economia + alerta de promoções relâmpago",
      desc: "O artigo resolve a dúvida do leitor e demonstra que no grupo existem promoções exclusivas e atualizadas diariamente.",
      highlight: "Gatilho de reciprocidade e economia",
    },
    {
      step: "04",
      icon: MessageCircle,
      badge: "Conversão",
      title: "Convite para a Comunidade",
      example: "Botão pulsante: 'Entrar no Grupo VIP de Achadinhos'",
      desc: "CTAs estratégicos no topo, meio e final do artigo convidam o visitante a receber descontos direto no WhatsApp ou Telegram.",
      highlight: "Clique direto para os grupos oficiais",
    },
    {
      step: "05",
      icon: UserCheck,
      badge: "Resultado",
      title: "Novo Membro no Grupo",
      example: "+1 participante engajado com perfil comprador",
      desc: "O usuário entra no grupo já aquecido, confiando na curadoria do Promo no Alvo e pronto para acompanhar os achadinhos.",
      highlight: "Crescimento contínuo e orgânico",
    },
  ];

  return (
    <section id="jornada" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#E50914] text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            Jornada do Visitante
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Da pesquisa no Google ao seu grupo de achadinhos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Entenda o caminho que transforma um usuário desconhecido navegando na internet em um participante ativo na comunidade da <strong className="text-slate-900 font-semibold">Promo no Alvo</strong>.
          </p>
        </div>

        {/* Step Progression Bar (Desktop) */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 relative ${
                  isSelected
                    ? "bg-white border-[#E50914] shadow-md ring-2 ring-red-500/20"
                    : "bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold ${isSelected ? "text-[#E50914]" : "text-slate-400"}`}>
                    PASSO {s.step}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isSelected ? "bg-[#E50914] text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs font-semibold text-slate-900 truncate">{s.title}</div>
                <div className="text-[11px] text-slate-500 truncate mt-0.5">{s.badge}</div>
              </button>
            );
          })}
        </div>

        {/* Interactive Step Card Details */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 relative overflow-hidden mb-8">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-[#E50914] to-rose-600" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-[#E50914]">
                  PASSO {steps[activeStep].step} DE 05
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {steps[activeStep].badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-3">
                {steps[activeStep].title}
              </h3>
              
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {steps[activeStep].desc}
              </p>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-4">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Exemplo prático:
                </div>
                <div className="text-sm font-mono text-slate-800 bg-white px-3 py-2 rounded-lg border border-slate-200">
                  {steps[activeStep].example}
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E50914] bg-red-50 px-3 py-1.5 rounded-lg border border-red-100">
                <ShieldCheck className="w-4 h-4" />
                <span>{steps[activeStep].highlight}</span>
              </div>
            </div>

            {/* Visual step card preview */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-xl p-6 relative">
              <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-4">
                Visão do Processo
              </div>
              <div className="space-y-3">
                {steps.map((st, i) => {
                  const IconComponent = st.icon;
                  const isActive = i === activeStep;
                  return (
                    <div
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-all ${
                        isActive
                          ? "bg-white/15 border border-red-500/50 text-white shadow-sm"
                          : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold ${
                          isActive ? "bg-[#E50914] text-white" : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-medium flex-1">{st.title}</span>
                      {isActive && (
                        <span className="text-[10px] bg-red-500/20 text-red-300 font-semibold px-2 py-0.5 rounded">
                          Ativo
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-100">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="text-xs font-semibold text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:text-slate-900 px-3 py-1.5 rounded border border-slate-200"
            >
              ← Passo Anterior
            </button>
            <div className="flex gap-1.5">
              {steps.map((_, dotIdx) => (
                <div
                  key={dotIdx}
                  onClick={() => setActiveStep(dotIdx)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                    activeStep === dotIdx ? "bg-[#E50914] w-6" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
              className="text-xs font-semibold text-white bg-[#E50914] hover:bg-red-700 disabled:opacity-30 disabled:cursor-not-allowed px-3 py-1.5 rounded"
            >
              Próximo Passo →
            </button>
          </div>
        </div>

        {/* Disclaimer Tag */}
        <div className="text-center text-xs text-slate-500 max-w-xl mx-auto bg-slate-100 py-2.5 px-4 rounded-full border border-slate-200">
          * Fluxo estratégico ilustrativo representando o funil de atração orgânica planejado para a Promo no Alvo.
        </div>
      </div>
    </section>
  );
}
