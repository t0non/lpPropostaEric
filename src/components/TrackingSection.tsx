"use client";

import React from "react";
import { Target, CheckCircle2 } from "lucide-react";

export function TrackingSection() {
  const events = [
    { name: "page_view", desc: "Visualizações de páginas e artigos" },
    { name: "view_article", desc: "Leitura de guias educativos" },
    { name: "click_group", desc: "Cliques no botão de entrada no grupo VIP" },
    { name: "click_offer", desc: "Cliques em recomendações e links de ofertas" },
  ];

  return (
    <section className="py-20 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-2">
            Métricas
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Rastreamento de cliques e eventos essenciais.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Acompanhe a origem dos acessos e descubra quais canais geram mais adesões aos seus grupos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {events.map((ev, i) => (
            <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="font-mono text-xs font-bold text-[#E50914] block mb-1">
                {ev.name}
              </span>
              <p className="text-xs text-slate-600">{ev.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
