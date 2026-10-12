"use client";

import React, { useState } from "react";
import {
  Clock,
  Calendar,
  CheckCircle2,
  Sliders,
  Code2,
  FileSearch,
  UploadCloud,
  Layers,
  ArrowRight,
  Sparkles,
  Compass,
  AlertCircle
} from "lucide-react";

export function Timeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Planejamento Estratégico",
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
      desc: "Configuração da estrutura técnica, metatags, eventos de mensuração (GA4 / GTM / Search Console).",
      icon: Sliders,
    },
    {
      num: "05",
      title: "Validação e Entrega",
      desc: "Revisão rigorosa de navegação, validação de links, publicação em produção e orientação inicial de uso do painel.",
      icon: UploadCloud,
    },
  ];

  return (
    <section id="cronograma" className="py-24 bg-[#0d0d0d] text-white relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-900/60 mb-4">
            <Clock className="w-3.5 h-3.5 text-[#E50914]" />
            <span className="text-xs font-bold text-red-300 tracking-wide uppercase">
              Processo de Implantação
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Como vamos tirar a Promo no Alvo do papel
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Metodologia ágil e estruturada em cinco etapas sequenciais para garantir qualidade técnica e alinhamento total com Éric.
          </p>
        </div>

        {/* Linha do Tempo em 5 Etapas */}
        <div className="bg-[#141414] rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-xl mb-10">
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
                      : "bg-[#101010] border-neutral-800 hover:border-neutral-700"
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

        {/* Box com Prazo: A Definir */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-[#141414] border border-neutral-800 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left mb-20">
          <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 text-[#E50914] flex items-center justify-center shrink-0">
            <Calendar className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
              Prazo de Execução
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white">
              A definir após alinhamento do escopo final
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Cronograma estimado de entrega alinhado de forma transparente na reunião de kick-off com Éric.
            </p>
          </div>
        </div>

        {/* VISÃO DE EVOLUÇÃO (3 FASES) */}
        <div className="border-t border-neutral-800 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-[#E50914]" />
              Roteiro de Crescimento a Médio e Longo Prazo
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              As 3 fases do projeto Promo no Alvo
            </h3>
            <p className="text-sm text-neutral-400 mt-2">
              Uma estratégia sólida não para na entrega. Veja como a plataforma foi pensada para evoluir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* FASE 1 */}
            <div className="bg-[#141414] border-2 border-[#E50914] rounded-2xl p-6 relative flex flex-col justify-between">
              <div className="absolute -top-3 left-6 bg-[#E50914] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                Incluso nesta Proposta
              </div>
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mt-2 mb-1">
                  Fase 01
                </span>
                <h4 className="text-lg font-bold text-white mb-2">
                  Implantação & Fundação Digital
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  Desenvolvimento completo do site, SEO técnico, painel administrativo independente e integração dos canais da Promo no Alvo.
                </p>
                <ul className="space-y-2 text-xs text-neutral-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Plataforma moderna no ar
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Painel para gerenciar links e artigos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Setup de Search Console e Analytics
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs font-bold text-white">
                Valor: R$ 997,00 (Taxa única de implantação)
              </div>
            </div>

            {/* FASE 2 */}
            <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between opacity-95">
              <div>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                  Fase 02
                </span>
                <h4 className="text-lg font-bold text-neutral-200 mb-2">
                  Produção Contínua de Artigos
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Alimentação semanal do blog com reviews de produtos em alta e comparativos de preços para ampliar as palavras-chave indexadas.
                </p>
                <ul className="space-y-2 text-xs text-neutral-400">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    Pode ser feito pelo próprio Éric pelo painel
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    Ou contratado como suporte opcional
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    Foco em aumento gradual de tráfego
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] text-amber-300 font-medium">
                * Não inclusa no valor de R$ 997 (autônoma ou sob demanda)
              </div>
            </div>

            {/* FASE 3 */}
            <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between opacity-95">
              <div>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                  Fase 03
                </span>
                <h4 className="text-lg font-bold text-neutral-200 mb-2">
                  Otimização por Dados & Escala
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Análise dos relatórios do Search Console para identificar quais termos mais atraem cliques e dobrar a aposta nos melhores conteúdos.
                </p>
                <ul className="space-y-2 text-xs text-neutral-400">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    Ajuste fino de taxas de conversão nos botões
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    Testes A/B de chamadas para o grupo VIP
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    Possibilidade de anúncios pontuais se desejar
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] text-amber-300 font-medium">
                * Não inclusa no valor de R$ 997 (etapa futura opcional)
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-center gap-3 text-xs text-neutral-400 max-w-3xl mx-auto">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Transparência total:</strong> A presente proposta comercial refere-se exclusivamente à <strong className="text-white">Fase 01 (Implantação da Plataforma)</strong> pelo valor acordado de <strong className="text-white">R$ 997,00</strong>. As fases subsequentes são orientações estratégicas de evolução.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
