"use client";

import React, { useState } from "react";
import { proposal } from "@/config/proposal";
import {
  Clock,
  Calendar,
  CheckCircle2,
  Sliders,
  Code2,
  FileSearch,
  UploadCloud,
  Layers,
} from "lucide-react";

export function Timeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Planejamento",
      desc: "Definição de prioridades, grupos oficiais de ofertas, categorias principais e direcionamento dos primeiros artigos.",
      icon: FileSearch,
    },
    {
      num: "02",
      title: "Design e Estrutura",
      desc: "Criação do layout exclusivo baseado na marca Promo no Alvo e organização da arquitetura das páginas.",
      icon: Layers,
    },
    {
      num: "03",
      title: "Desenvolvimento",
      desc: "Construção do site de alta velocidade, integração dos links e desenvolvimento do painel administrativo.",
      icon: Code2,
    },
    {
      num: "04",
      title: "SEO e Integrações",
      desc: "Configuração da estrutura técnica, metatags, eventos de mensuração (GA4 / Pixel) e ferramentas disponíveis.",
      icon: Sliders,
    },
    {
      num: "05",
      title: "Testes e Entrega",
      desc: "Revisão rigorosa de navegação, validação de links, publicação em produção e orientação inicial de uso do painel.",
      icon: UploadCloud,
    },
  ];

  return (
    <section className="py-24 bg-[#101010] text-white relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-900/60 mb-4">
            <Clock className="w-3.5 h-3.5 text-[#E50914]" />
            <span className="text-xs font-bold text-red-300 tracking-wide uppercase">
              Processo de Execução
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Como vamos tirar a Promo no Alvo do papel.
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Uma metodologia ágil e estruturada em cinco etapas sequenciais para garantir
            qualidade técnica e alinhamento total.
          </p>
        </div>

        {/* Linha do Tempo em 5 Etapas */}
        <div className="bg-[#171717] rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((st, i) => {
              const isSelected = activeStep === i;
              const Icon = st.icon;

              return (
                <button
                  key={st.num}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  className={`p-5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                    isSelected
                      ? "bg-neutral-900 border-[#E50914] ring-1 ring-red-600/40 shadow-md"
                      : "bg-[#141414] border-neutral-800 hover:border-neutral-700"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-black px-2 py-0.5 rounded ${
                          isSelected
                            ? "bg-[#E50914] text-white"
                            : "bg-neutral-800 text-neutral-400"
                        }`}
                      >
                        Etapa {st.num}
                      </span>
                      <Icon className="w-4 h-4 text-neutral-400" />
                    </div>

                    <h4
                      className={`text-sm font-bold mb-2 ${
                        isSelected ? "text-white" : "text-neutral-300"
                      }`}
                    >
                      {st.title}
                    </h4>

                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Box com Prazo: A Definir após validação do escopo */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#171717] border border-neutral-800 flex items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center space-x-4 mx-auto sm:mx-0">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 text-[#E50914] flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                Prazo de Implantação
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white">
                A definir após validação do escopo definitivo
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Estimativa alinhada conjuntamente com o cliente na reunião comercial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
