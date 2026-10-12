"use client";

import React from "react";
import { proposal } from "@/config/proposal";
import { ArrowRight } from "lucide-react";

export function OrganicOpportunity() {
  return (
    <section id="oportunidade" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* RIGHT: Comparison */}
          <div className="space-y-4">
            {/* Sem o site */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-black">✗</div>
                <span className="text-xs font-black text-slate-500 uppercase tracking-wider">Apenas divulgação direta</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Quem não conhece você ainda não tem como encontrar o grupo. A descoberta depende de indicações e repostagens.
              </p>
            </div>

            {/* Com o site */}
            <div className="p-5 rounded-2xl bg-white border-2 border-[#E50914]/30 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#E50914] rounded-l-2xl" />
              <div className="flex items-center gap-2 mb-3 pl-2">
                <div className="w-6 h-6 rounded-full bg-red-100 text-[#E50914] flex items-center justify-center text-xs font-black">✓</div>
                <span className="text-xs font-black text-[#E50914] uppercase tracking-wider">Com a Promo no Alvo</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed pl-2">
                Artigos pesquisáveis no Google apresentam sua marca a pessoas que estão ativamente buscando por promoções e produtos — mesmo sem conhecerem você antes.
              </p>
            </div>

            {/* Note */}
            <p className="text-xs text-slate-400 text-center">
              * O crescimento orgânico é gradual e depende da consistência na publicação de conteúdos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
