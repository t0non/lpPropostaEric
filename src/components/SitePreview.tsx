"use client";

import React, { useState } from "react";
import { PromoNoAlvoLogo } from "@/components/PromoNoAlvoLogo";
import {
  Monitor,
  Smartphone,
  ArrowRight,
  MessageCircle,
  Tag,
  Clock,
} from "lucide-react";

export function SitePreview() {
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");

  const categories = [
    { label: "Tecnologia", count: "38 ofertas" },
    { label: "Moda & Acessórios", count: "25 achados" },
    { label: "Casa & Decoração", count: "19 promoções" },
    { label: "Beleza & Cuidados", count: "14 cupons" },
  ];

  const blogPosts = [
    {
      title: "Como encontrar promoções de verdade na internet",
      category: "Economia",
      readTime: "4 min",
    },
    {
      title: "Melhores dicas para economizar nas compras online",
      category: "Dicas",
      readTime: "5 min",
    },
    {
      title: "Como identificar se um produto está realmente barato",
      category: "Segurança",
      readTime: "6 min",
    },
  ];

  return (
    <section id="previa" className="py-20 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-2">
            Prévia Visual
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Conheça a experiência da Promo no Alvo.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Uma demonstração conceitual de como a plataforma poderá funcionar para os visitantes.
          </p>
        </div>

        {/* Controles Desktop / Mobile Clean */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setDeviceMode("desktop")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                deviceMode === "desktop"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Computador</span>
            </button>
            <button
              onClick={() => setDeviceMode("mobile")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                deviceMode === "mobile"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Celular</span>
            </button>
          </div>
        </div>

        {/* MOCKUP CLEAN */}
        <div className="flex justify-center">
          <div
            className={`transition-all duration-300 w-full ${
              deviceMode === "desktop"
                ? "max-w-4xl rounded-2xl shadow-xl border border-slate-200 bg-white"
                : "max-w-sm rounded-[36px] shadow-xl border-[8px] border-slate-800 bg-white p-1"
            }`}
          >
            {deviceMode === "desktop" && (
              <div className="bg-slate-100 px-4 py-2.5 rounded-t-xl flex items-center justify-between border-b border-slate-200 text-xs text-slate-500">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="bg-white px-5 py-1 rounded-full text-[11px] font-mono text-slate-500 border border-slate-200">
                  https://promonoalvo.com.br
                </div>
                <span className="text-[10px] text-slate-400 font-semibold">Protótipo</span>
              </div>
            )}

            <div className={`bg-white text-slate-900 ${deviceMode === "desktop" ? "rounded-b-xl" : "rounded-[28px]"} overflow-hidden`}>
              {/* Header do Mockup */}
              <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                <PromoNoAlvoLogo className="h-7 w-auto" variant="light" />
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-lg bg-[#E50914] text-white text-[11px] font-bold hover:bg-[#B91C1C] flex items-center space-x-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Entrar no grupo</span>
                </button>
              </div>

              {/* Hero do Mockup */}
              <div className="p-6 sm:p-10 text-center bg-slate-50 border-b border-slate-100">
                <span className="text-[10px] uppercase font-bold text-[#E50914] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full mb-2 inline-block">
                  Curadoria Diária de Ofertas
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  Ofertas certeiras. <span className="text-[#E50914]">Economia no alvo.</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-5">
                  Descubra recomendações confiáveis e acompanhe nossos grupos de achadinhos.
                </p>
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-xl bg-[#E50914] text-white text-xs font-bold hover:bg-[#B91C1C] inline-flex items-center space-x-1.5"
                >
                  <span>Explorar grupos de ofertas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Categorias */}
              <div className="p-5 sm:p-6 border-b border-slate-100">
                <p className="text-xs font-bold text-slate-900 mb-3">Categorias em Destaque</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                  {categories.map((c, i) => (
                    <div key={i} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80">
                      <p className="text-xs font-bold text-slate-800">{c.label}</p>
                      <p className="text-[10px] text-slate-400">{c.count}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blog */}
              <div className="p-5 sm:p-6">
                <p className="text-xs font-bold text-slate-900 mb-3">Artigos do Blog</p>
                <div className={`grid gap-3 ${deviceMode === "desktop" ? "grid-cols-3" : "grid-cols-1"}`}>
                  {blogPosts.map((p, i) => (
                    <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                      <span className="text-[10px] font-bold text-red-600 block mb-1">{p.category}</span>
                      <h4 className="text-xs font-bold text-slate-900 mb-2 leading-snug">{p.title}</h4>
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {p.readTime}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
