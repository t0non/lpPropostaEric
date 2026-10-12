"use client";

import React, { useState } from "react";
import { PromoNoAlvoLogo } from "@/components/PromoNoAlvoLogo";
import { Monitor, Smartphone, ArrowRight, MessageCircle, Clock, Tag, BookOpen, ChevronRight } from "lucide-react";

type View = "home" | "article";

export function SitePreview() {
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");
  const [currentView, setCurrentView] = useState<View>("home");

  const categories = [
    { label: "Tecnologia", count: "38 ofertas" },
    { label: "Moda & Acessórios", count: "25 achados" },
    { label: "Casa & Decoração", count: "19 promoções" },
    { label: "Beleza & Cuidados", count: "14 cupons" },
  ];

  const articles = [
    { title: "5 fones Bluetooth com bom custo-benefício", category: "Tecnologia", readTime: "4 min" },
    { title: "Como identificar se um produto está realmente barato", category: "Dicas", readTime: "5 min" },
    { title: "Os melhores achados de casa da semana", category: "Casa", readTime: "3 min" },
  ];

  const isMobile = deviceMode === "mobile";

  return (
    <section id="previa" className="py-20 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-2">
            Demonstração Conceitual
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Éric, veja como a Promo no Alvo poderá funcionar.
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            Protótipo visual da plataforma. Navege pelas seções e veja a experiência do visitante.{" "}
            <span className="font-semibold text-slate-700">Isso é uma demonstração conceitual.</span>
          </p>
        </div>

        {/* Controles Desktop / Mobile */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setDeviceMode("desktop")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                deviceMode === "desktop" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Computador</span>
            </button>
            <button
              onClick={() => setDeviceMode("mobile")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                deviceMode === "mobile" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Celular</span>
            </button>
          </div>

          {/* Breadcrumb de navegação interna */}
          <div className="hidden sm:flex items-center gap-1 text-xs text-slate-400">
            <button
              onClick={() => setCurrentView("home")}
              className={`font-semibold transition-colors ${currentView === "home" ? "text-[#E50914]" : "hover:text-slate-600"}`}
            >
              Início
            </button>
            <ChevronRight className="w-3 h-3" />
            <button
              onClick={() => setCurrentView("article")}
              className={`font-semibold transition-colors ${currentView === "article" ? "text-[#E50914]" : "hover:text-slate-600"}`}
            >
              Artigo
            </button>
          </div>
        </div>

        {/* Mockup */}
        <div className="flex justify-center">
          <div
            className={`transition-all duration-300 w-full ${
              isMobile
                ? "max-w-sm rounded-[36px] shadow-2xl border-[8px] border-slate-800 bg-white p-1"
                : "max-w-4xl rounded-2xl shadow-xl border border-slate-200 bg-white"
            }`}
          >
            {/* Barra do browser (desktop) */}
            {!isMobile && (
              <div className="bg-slate-100 px-4 py-2.5 rounded-t-xl flex items-center justify-between border-b border-slate-200 text-xs text-slate-500">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="bg-white px-5 py-1 rounded-full text-[11px] font-mono text-slate-500 border border-slate-200">
                  {currentView === "home" ? "promonoalvo.com.br" : "promonoalvo.com.br/blog/fones-bluetooth-baratos"}
                </div>
                <span className="text-[10px] text-slate-400 font-semibold bg-amber-50 text-amber-600 px-2 py-0.5 rounded border border-amber-200">Protótipo</span>
              </div>
            )}

            <div className={`bg-white text-slate-900 ${isMobile ? "rounded-[28px]" : "rounded-b-xl"} overflow-hidden`}>
              {/* Header do mockup */}
              <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                <PromoNoAlvoLogo className="h-7 w-auto" variant="light" />
                {!isMobile && (
                  <nav className="hidden sm:flex items-center gap-4 text-[11px] font-semibold text-slate-600">
                    <span className="hover:text-[#E50914] cursor-pointer transition-colors">Blog</span>
                    <span className="hover:text-[#E50914] cursor-pointer transition-colors">Categorias</span>
                    <span className="hover:text-[#E50914] cursor-pointer transition-colors">Grupos</span>
                  </nav>
                )}
                <button type="button" className="px-3 py-1.5 rounded-lg bg-[#E50914] text-white text-[11px] font-bold hover:bg-[#B91C1C] flex items-center space-x-1">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Entrar no grupo</span>
                </button>
              </div>

              {/* Conteúdo baseado na view */}
              {currentView === "home" ? (
                <>
                  {/* Hero do mockup */}
                  <div className={`${isMobile ? "p-5" : "p-8 sm:p-10"} text-center bg-slate-50 border-b border-slate-100`}>
                    <span className="text-[10px] uppercase font-bold text-[#E50914] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full mb-3 inline-block">
                      Curadoria Diária de Ofertas
                    </span>
                    <h3 className={`${isMobile ? "text-lg" : "text-2xl"} font-black text-slate-900 mb-2`}>
                      Ofertas certeiras. <span className="text-[#E50914]">Economia no alvo.</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-5">
                      Descubra recomendações confiáveis e acesse nossos grupos de achadinhos.
                    </p>
                    <button
                      onClick={() => setCurrentView("article")}
                      type="button"
                      className="px-5 py-2.5 rounded-xl bg-[#E50914] text-white text-xs font-bold hover:bg-[#B91C1C] inline-flex items-center space-x-1.5"
                    >
                      <span>Ver artigos do blog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Categorias */}
                  <div className={`${isMobile ? "p-4" : "p-6"} border-b border-slate-100`}>
                    <p className="text-xs font-bold text-slate-900 mb-3">Categorias em Destaque</p>
                    <div className={`grid gap-2 ${isMobile ? "grid-cols-2" : "grid-cols-4"}`}>
                      {categories.map((c, i) => (
                        <div key={i} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-center cursor-pointer hover:border-red-200 transition-colors">
                          <p className="text-xs font-bold text-slate-800">{c.label}</p>
                          <p className="text-[10px] text-slate-400">{c.count}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Blog */}
                  <div className={`${isMobile ? "p-4" : "p-6"}`}>
                    <p className="text-xs font-bold text-slate-900 mb-3">Artigos em Destaque</p>
                    <div className={`grid gap-3 ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
                      {articles.map((a, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setCurrentView("article")}
                          className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-left hover:border-red-200 transition-colors"
                        >
                          <span className="text-[10px] font-bold text-red-600 block mb-1">{a.category}</span>
                          <h4 className="text-xs font-bold text-slate-900 mb-2 leading-snug">{a.title}</h4>
                          <span className="text-[10px] text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {a.readTime}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                /* View: Artigo */
                <div className={`${isMobile ? "p-4" : "p-8"}`}>
                  <button
                    type="button"
                    onClick={() => setCurrentView("home")}
                    className="text-[11px] text-[#E50914] font-bold mb-4 flex items-center gap-1 hover:underline"
                  >
                    ← Voltar ao início
                  </button>
                  <span className="text-[10px] font-bold text-[#E50914] uppercase tracking-wider bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">Tecnologia</span>
                  <h2 className={`${isMobile ? "text-base" : "text-xl"} font-black text-slate-900 mt-3 mb-2 leading-snug`}>
                    5 fones Bluetooth com bom custo-benefício
                  </h2>
                  <p className="text-[11px] text-slate-400 mb-4 flex items-center gap-2">
                    <Clock className="w-3 h-3" /> 4 min de leitura &nbsp;·&nbsp;
                    <Tag className="w-3 h-3" /> Tecnologia
                  </p>
                  <div className="bg-slate-100 rounded-xl h-32 flex items-center justify-center mb-4 text-slate-400 text-xs">
                    [Imagem ilustrativa do artigo]
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Buscando um fone Bluetooth sem gastar muito? Reunimos cinco modelos com ótimo custo-benefício que você pode encontrar por menos de R$&nbsp;200. Conheça as opções e aproveite os preços nos nossos grupos.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-slate-900">Receba ofertas de tecnologia em primeira mão</p>
                      <p className="text-[11px] text-slate-500">Junte-se ao nosso grupo de achadinhos de tecnologia.</p>
                    </div>
                    <button type="button" className="shrink-0 px-3 py-2 rounded-lg bg-[#E50914] text-white text-[11px] font-bold hover:bg-[#B91C1C] flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5" />
                      Entrar no grupo
                    </button>
                  </div>
                  {!isMobile && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-700 mb-3">Mais artigos de Tecnologia</p>
                      <div className="grid grid-cols-2 gap-3">
                        {articles.slice(0, 2).map((a, i) => (
                          <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                            <span className="text-[10px] font-bold text-red-600 block mb-1">{a.category}</span>
                            <p className="text-xs font-bold text-slate-800 leading-snug">{a.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          * Demonstração conceitual para fins de apresentação comercial. Conteúdos e navegação são ilustrativos.
        </p>
      </div>
    </section>
  );
}
