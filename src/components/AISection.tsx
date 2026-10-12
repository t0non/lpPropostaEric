"use client";

import React from "react";
import { Cpu, Sparkles, CheckCircle2 } from "lucide-react";

export function AISection() {
  const points = [
    "Respostas diretas para dúvidas frequentes de compradores online",
    "Marcação semântica com dados estruturados para leitura automatizada",
    "Estrutura textual modular com perguntas e respostas objetivas (FAQ)",
    "Páginas velozes e rastreáveis para facilitar a interpretação por IA",
  ];

  return (
    <section id="ia" className="py-20 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-2">
            Preparação para IA
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Estruturado para a nova forma de pesquisar na internet.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Além do Google tradicional, organizamos o conteúdo para facilitar a interpretação por ferramentas como ChatGPT e Gemini.
          </p>
        </div>

        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs mb-6">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#E50914]" />
            <span>Boas práticas de organização de conteúdo aplicadas:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
            {points.map((p, i) => (
              <div key={i} className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-slate-400">
          * A organização melhora a compreensão técnica, sem promessas irreais de citações automáticas.
        </p>
      </div>
    </section>
  );
}
