"use client";

import React from "react";
import { TrendingUp, CheckCircle2 } from "lucide-react";

export function GoogleAdsSection() {
  return (
    <section id="anuncios" className="py-20 bg-slate-50 text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-2">
            Tráfego Pago
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Preparação para Google Ads e Meta Ads.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A infraestrutura técnica fica pronta para receber anúncios quando você decidir acelerar as divulgações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Google Ads (Pesquisa)</h3>
            <p className="text-xs text-slate-500 mb-4">
              Capte quem já está pesquisando por ofertas específicas no Google.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                <span>Páginas de pouso velozes para celular</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                <span>Integração com Google Tag Manager e GA4</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                <span>Tags de conversão preparadas</span>
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Meta Ads (Instagram)</h3>
            <p className="text-xs text-slate-500 mb-4">
              Atraia novos membros pelo feed e stories de forma visual e direta.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                <span>Instalação e testes do Meta Pixel</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                <span>Rastreamento de cliques para o grupo VIP</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                <span>Suporte técnico para campanhas de tráfego</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Orçamento Opcional Clean */}
        <div className="max-w-2xl mx-auto p-5 rounded-2xl bg-white border border-slate-200 text-center text-xs text-slate-600">
          <p>
            <strong>Sugestão para testes futuros:</strong> R$ 20 a R$ 30 por dia em anúncios. Verba opcional paga diretamente ao Google/Meta pelo cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
