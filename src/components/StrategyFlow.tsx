"use client";

import React from "react";

export function StrategyFlow() {
  return (
    <section id="solucao" className="py-20 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Como a estratégia funciona
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            Um caminho visual, direto e funcional desde a primeira busca do visitante até a fidelização como membro.
          </p>
        </div>

        {/* Funil — imagem do cliente */}
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/funil.png"
            alt="Funil de estratégia digital: da atração à fidelização"
            className="w-full max-w-3xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
