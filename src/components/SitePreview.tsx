"use client";

import React, { useState } from "react";
import { PromoNoAlvoLogo } from "@/components/PromoNoAlvoLogo";
import {
  Monitor, Smartphone, LayoutDashboard, MessageCircle,
  Clock, ArrowRight, Lock, Plus, FileEdit, Users, ChevronRight
} from "lucide-react";

type ActiveView = "home" | "article";
type ActiveTab = "site" | "painel";

export function SitePreview() {
  const [tab, setTab] = useState<ActiveTab>("site");
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [view, setView] = useState<ActiveView>("home");
  const [groupLink, setGroupLink] = useState("https://chat.whatsapp.com/promonoalvo-vip-oficial");

  const categories = ["Tecnologia", "Moda & Estilo", "Casa & Cozinha", "Beleza"];
  const articles = [
    { cat: "Tecnologia", title: "5 fones Bluetooth com bom custo-benefício em 2026", time: "4 min" },
    { cat: "Casa", title: "Air Fryer Mondial vs Philips: qual compensa mais?", time: "5 min" },
    { cat: "Dicas", title: "Como não cair em falsos descontos online", time: "3 min" },
  ];

  const isMobile = device === "mobile";

  return (
    <section id="demonstracao" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-3">
            Demonstração Interativa
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            {`Éric, experimente como a Promo no Alvo poderá funcionar.`}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Navegue entre o site público e o painel de gestão. Esta é uma
            demonstração visual do projeto.
          </p>
        </div>

        {/* Controls row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {/* Tab: Site / Painel */}
          <div className="inline-flex p-1.5 bg-slate-100 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => { setTab("site"); setView("home"); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                tab === "site" ? "bg-[#E50914] text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Monitor className="w-4 h-4" />
              Ver site
            </button>
            <button
              type="button"
              onClick={() => setTab("painel")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                tab === "painel" ? "bg-[#E50914] text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Ver painel
            </button>
          </div>

          {/* Device switcher (only for site tab) */}
          {tab === "site" && (
            <div className="inline-flex p-1 bg-slate-50 rounded-lg border border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => setDevice("desktop")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-semibold transition ${device === "desktop" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"}`}
              >
                <Monitor className="w-3.5 h-3.5" /> Desktop
              </button>
              <button
                type="button"
                onClick={() => setDevice("mobile")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-semibold transition ${device === "mobile" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"}`}
              >
                <Smartphone className="w-3.5 h-3.5" /> Celular
              </button>
            </div>
          )}

          {/* View breadcrumb (site tab) */}
          {tab === "site" && (
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
              <button onClick={() => setView("home")} className={view === "home" ? "text-[#E50914]" : "hover:text-slate-600"}>
                Início
              </button>
              <ChevronRight className="w-3 h-3" />
              <button onClick={() => setView("article")} className={view === "article" ? "text-[#E50914]" : "hover:text-slate-600"}>
                Artigo
              </button>
            </div>
          )}
        </div>

        {/* Mockup window */}
        <div className="flex justify-center">
          <div
            className={`transition-all duration-300 w-full ${
              tab === "site" && isMobile
                ? "max-w-sm rounded-[36px] border-[8px] border-slate-900 shadow-2xl bg-white p-1"
                : "max-w-4xl rounded-2xl border border-slate-200 shadow-xl bg-white overflow-hidden"
            }`}
          >
            {/* Browser topbar */}
            <div className="bg-slate-100 px-4 py-2.5 flex items-center justify-between border-b border-slate-200 text-xs text-slate-500">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="bg-white px-4 py-1 rounded-full text-[11px] font-mono text-slate-500 border border-slate-200">
                {tab === "site"
                  ? view === "home" ? "promonoalvo.com.br" : "promonoalvo.com.br/blog/fones-bluetooth"
                  : "admin.promonoalvo.com.br"}
              </div>
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                Demonstração
              </span>
            </div>

            {/* ========== TAB: SITE ========== */}
            {tab === "site" && (
              <div className={`bg-white text-slate-900 ${isMobile ? "rounded-[28px]" : ""}`}>
                {/* Site header */}
                <div className="px-4 sm:px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                  <PromoNoAlvoLogo className="h-7 w-auto" variant="light" />
                  {!isMobile && (
                    <nav className="flex gap-4 text-[11px] font-semibold text-slate-600">
                      <span className="hover:text-[#E50914] cursor-pointer transition-colors">Blog</span>
                      <span className="hover:text-[#E50914] cursor-pointer transition-colors">Categorias</span>
                      <span className="hover:text-[#E50914] cursor-pointer transition-colors">Grupos</span>
                    </nav>
                  )}
                  <button type="button" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E50914] text-white text-[11px] font-bold hover:bg-red-700">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Entrar no Grupo</span>
                  </button>
                </div>

                {/* HOME VIEW */}
                {view === "home" ? (
                  <>
                    {/* Hero banner */}
                    <div className={`${isMobile ? "p-5" : "p-8 sm:p-10"} text-center bg-slate-50 border-b border-slate-100`}>
                      <span className="text-[10px] font-black text-[#E50914] uppercase tracking-wider bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full inline-block mb-3">
                        Curadoria Diária de Achadinhos
                      </span>
                      <h3 className={`${isMobile ? "text-lg" : "text-2xl"} font-black text-slate-900 mb-2`}>
                        As melhores ofertas, <span className="text-[#E50914]">no alvo.</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto mb-5">
                        Análises, comparativos e alertas de promoção direto nos seus grupos.
                      </p>
                      <button
                        type="button"
                        onClick={() => setView("article")}
                        className="px-5 py-2.5 rounded-xl bg-[#E50914] text-white text-xs font-bold hover:bg-red-700 inline-flex items-center gap-1.5"
                      >
                        <span>Explorar artigos</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Categories */}
                    <div className={`${isMobile ? "p-4" : "p-5 sm:p-6"} border-b border-slate-100`}>
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Categorias</p>
                      <div className={`grid gap-2 ${isMobile ? "grid-cols-2" : "grid-cols-4"}`}>
                        {categories.map((c) => (
                          <div key={c} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-center hover:border-red-200 transition cursor-pointer">
                            <p className="text-xs font-bold text-slate-800">{c}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Blog articles */}
                    <div className={`${isMobile ? "p-4" : "p-5 sm:p-6"}`}>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Últimos Artigos</p>
                        <span className="text-xs text-[#E50914] font-bold cursor-pointer">Ver todos →</span>
                      </div>
                      <div className={`grid gap-3 ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
                        {articles.map((a, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setView("article")}
                            className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-left hover:border-red-200 transition"
                          >
                            <span className="text-[9px] font-black text-[#E50914] uppercase block mb-1">{a.cat}</span>
                            <h4 className="text-xs font-bold text-slate-900 mb-2 leading-snug">{a.title}</h4>
                            <span className="text-[10px] text-slate-400 flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {a.time}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  /* ARTICLE VIEW */
                  <div className={`${isMobile ? "p-4" : "p-6 sm:p-8"}`}>
                    <button
                      type="button"
                      onClick={() => setView("home")}
                      className="text-[11px] text-[#E50914] font-bold mb-4 flex items-center gap-1 hover:underline"
                    >
                      ← Voltar ao início
                    </button>
                    <span className="text-[10px] font-black text-[#E50914] uppercase tracking-wider bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                      Tecnologia
                    </span>
                    <h2 className={`${isMobile ? "text-base" : "text-xl"} font-black text-slate-900 mt-3 mb-2 leading-snug`}>
                      5 fones Bluetooth com bom custo-benefício em 2026
                    </h2>
                    <p className="text-[11px] text-slate-400 mb-4 flex items-center gap-2">
                      <Clock className="w-3 h-3" /> 4 min · Tecnologia
                    </p>
                    <div className="bg-slate-100 rounded-xl h-28 flex items-center justify-center mb-4 text-slate-400 text-xs">
                      [Imagem ilustrativa]
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      Buscando um fone sem fio com bom som e preço justo? Reunimos cinco opções testadas abaixo de R$ 200 com ótimo custo-benefício. Veja os comparativos e aproveite as promoções do nosso grupo.
                    </p>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold text-slate-900">Receba ofertas de tecnologia em primeira mão</p>
                        <p className="text-[11px] text-slate-500">Entre no grupo da Promo no Alvo agora.</p>
                      </div>
                      <button type="button" className="shrink-0 px-3 py-2 rounded-lg bg-[#E50914] text-white text-[11px] font-bold hover:bg-red-700 flex items-center gap-1.5">
                        <MessageCircle className="w-3.5 h-3.5" />
                        Entrar no grupo
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ========== TAB: PAINEL ========== */}
            {tab === "painel" && (
              <div className="bg-white text-slate-900 p-6 sm:p-8">
                {/* Admin header */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Painel Promo no Alvo</h4>
                      <p className="text-[11px] text-slate-500">Gestão simples, sem precisar de programador.</p>
                    </div>
                  </div>
                  <button type="button" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E50914] text-white text-xs font-bold hover:bg-red-700">
                    <Plus className="w-3.5 h-3.5" />
                    Novo Artigo
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Artigos */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 mb-3">
                      <FileEdit className="w-4 h-4 text-[#E50914]" />
                      <span className="text-xs font-bold text-slate-900">Artigos Publicados</span>
                    </div>
                    <div className="space-y-2">
                      {["5 fones Bluetooth com bom custo-benefício", "Air Fryer Mondial vs Philips Walita"].map((title, i) => (
                        <div key={i} className="flex items-center justify-between bg-white rounded-lg p-2.5 border border-slate-200 text-xs">
                          <span className="font-medium text-slate-800 leading-snug">{title}</span>
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-2 shrink-0">Publicado</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Link do Grupo */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-[#E50914]" />
                      <span className="text-xs font-bold text-slate-900">Link do Grupo VIP</span>
                    </div>
                    <label className="text-[11px] text-slate-500 block mb-1.5">
                      Atualize o link aqui e todos os botões do site mudam automaticamente:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={groupLink}
                        onChange={(e) => setGroupLink(e.target.value)}
                        className="flex-1 bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs font-mono text-slate-600 focus:outline-none focus:border-[#E50914]"
                      />
                      <button type="button" className="px-3 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800">
                        Salvar
                      </button>
                    </div>
                  </div>
                </div>

                {/* Demo disclaimer */}
                <div className="mt-5 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-700 flex items-center gap-2">
                  <span className="font-bold">⚠</span>
                  <span>Interface demonstrativa. O painel real terá funcionalidades completas de publicação e gestão.</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footnote */}
        <p className="text-center text-xs text-slate-400 mt-6">
          * Demonstração visual do projeto. Cores, textos e funcionalidades finais serão definidas em conjunto com Éric.
        </p>
      </div>
    </section>
  );
}
