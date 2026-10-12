"use client";

import React from "react";

export function StrategyFlow() {
  return (
    <section id="solucao" className="py-20 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
