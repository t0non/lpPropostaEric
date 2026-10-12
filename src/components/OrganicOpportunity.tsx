"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { GoogleSearchAnimation } from "@/components/GoogleSearchAnimation";

export function OrganicOpportunity() {
  return (
    <section id="oportunidade" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text */}
          <div>
            <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-3">
              A Oportunidade
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-5">
              Seus próximos participantes podem estar pesquisando uma oferta agora.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Com a <strong className="text-slate-900">Promo no Alvo</strong>, vamos criar conteúdos que respondam a buscas sobre produtos e promoções, apresentando sua marca e facilitando o acesso aos seus grupos.
            </p>

            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#E50914] hover:underline"
            >
              <span>Ver como funciona o fluxo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* RIGHT: Animação Google Search */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl px-6 py-8 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <GoogleSearchAnimation />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
