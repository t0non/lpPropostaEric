"use client";

import React from "react";
import { proposal } from "@/config/proposal";
import { PromoNoAlvoLogo } from "@/components/PromoNoAlvoLogo";

export function Hero() {
  return (
    <section
      id="apresentacao"
      className="relative bg-white text-slate-900 overflow-hidden"
    >
      {/* Top red accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E50914]" />

      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(229,9,20,0.05),transparent)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pb-28 text-center relative z-10">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <PromoNoAlvoLogo className="h-16 sm:h-20 w-auto" variant="light" />
        </div>


        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6">
          {proposal.client}, a{" "}
          <span className="text-[#E50914]">Promo no Alvo</span> merece
          <br className="hidden sm:inline" /> um espaço próprio na internet.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
          Um portal com blog, otimizado para o Google e com painel de gestão,
          para que suas ofertas encontrem novas pessoas{" "}
          <strong className="text-slate-700">mesmo enquanto você dorme.</strong>
        </p>
      </div>

      {/* Bottom divider fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
