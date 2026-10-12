"use client";

import React from "react";
import { GoogleSearchAnimation } from "@/components/GoogleSearchAnimation";

export function OrganicOpportunity() {
  return (
    <section id="oportunidade" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Label */}
        <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-4">
          A Oportunidade
        </span>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-12 max-w-3xl mx-auto">
          E se a Promo no Alvo tivesse um divulgador trabalhando{" "}
          <span className="text-[#E50914]">24 horas por dia?</span>
        </h2>



        {/* Animação centralizada */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl px-6 py-10 sm:px-12 sm:py-12 relative overflow-hidden max-w-2xl mx-auto">
          <div className="absolute -top-10 -right-10 w-56 h-56 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <GoogleSearchAnimation />
          </div>
        </div>

      </div>
    </section>
  );
}
