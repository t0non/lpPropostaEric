"use client";

import React, { useState } from "react";
import { PromoNoAlvoLogo } from "@/components/PromoNoAlvoLogo";
import {
  Monitor,
  LayoutDashboard,
  MessageCircle,
  Clock,
  ArrowRight,
  FileEdit,
  Plus,
  Lock,
  Save,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

export function SitePreview() {
  const [activeTab, setActiveTab] = useState<"site" | "painel">("site");
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");

  const categories = [
    { label: "Tecnologia", count: "38 achados" },
    { label: "Moda & Estilo", count: "25 ofertas" },
    { label: "Casa & Cozinha", count: "19 promoções" },
    { label: "Beleza", count: "14 cupons" },
  ];

  const articles = [
    {
      title: "5 fones Bluetooth com bom custo-benefício em 2026",
      category: "Tecnologia",
      readTime: "4 min",
      desc: "Modelos testados abaixo de R$ 200 para comprar com segurança.",
    },
    {
      title: "Air Fryer Mondial vs Philips: qual compensa mais?",
      category: "Casa & Cozinha",
      readTime: "5 min",
      desc: "Comparativo direto de consumo, capacidade e durabilidade.",
    },
    {
      title: "Como não cair em falsos descontos em lojas online",
      category: "Dicas de Compra",
      readTime: "3 min",
      desc: "3 passos simples para checar o histórico real de preços.",
    },
  ];

  const isMobile = deviceMode === "mobile";

  return (
    <section id="previa" className="py-24 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-2">
            Demonstração Interativa
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            Veja como a Promo no Alvo poderá ficar.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Alterne entre a experiência do visitante no site e o painel administrativo de gestão.
          </p>
        </div>

        {/* Controles Principais: "Ver site" e "Ver painel" */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab("site")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === "site"
                  ? "bg-[#E50914] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Ver site</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("painel")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === "painel"
                  ? "bg-[#E50914] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Ver painel</span>
            </button>
          </div>

          {/* Seletor Mobile/Desktop quando estiver no modo "site" */}
          {activeTab === "site" && (
            <div className="inline-flex p-1 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-500">
              <button
                type="button"
                onClick={() => setDeviceMode("desktop")}
                className={`px-3 py-1 rounded font-semibold transition ${
                  deviceMode === "desktop" ? "bg-white text-slate-900 shadow-xs" : "hover:text-slate-900"
                }`}
              >
                Desktop
              </button>
              <button
                type="button"
                onClick={() => setDeviceMode("mobile")}
                className={`px-3 py-1 rounded font-semibold transition ${
                  deviceMode === "mobile" ? "bg-white text-slate-900 shadow-xs" : "hover:text-slate-900"
                }`}
              >
                Celular
              </button>
            </div>
          )}
        </div>

        {/* Janela de Mockup */}
        <div className="flex justify-center">
          <div
            className={`w-full transition-all duration-300 ${
              activeTab === "site" && isMobile
                ? "max-w-sm rounded-[36px] border-[8px] border-slate-900 bg-white shadow-2xl p-1"
                : "max-w-4xl rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden"
            }`}
          >
            {/* Topbar do Navegador */}
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="bg-white px-4 py-1 rounded-full text-[11px] font-mono text-slate-500 border border-slate-200">
                {activeTab === "site" ? "promonoalvo.com.br" : "admin.promonoalvo.com.br"}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                Demonstração
              </span>
            </div>

            {/* ABA 1: VER SITE */}
            {activeTab === "site" ? (
              <div className="bg-white text-slate-900">
                {/* Header do Site */}
                <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between">
                  <PromoNoAlvoLogo className="h-7 sm:h-8 w-auto" variant="light" />
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline text-xs font-semibold text-slate-600">Blog de Ofertas</span>
                    <button
                      type="button"
                      className="px-3.5 py-1.5 rounded-lg bg-[#E50914] text-white text-xs font-bold hover:bg-red-700 flex items-center gap-1.5 shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Entrar no Grupo VIP</span>
                    </button>
                  </div>
                </div>

                {/* Banner / Hero do Site */}
                <div className="p-6 sm:p-10 text-center bg-slate-50 border-b border-slate-100">
                  <span className="text-[10px] uppercase font-black text-[#E50914] bg-red-50 border border-red-200 px-3 py-1 rounded-full mb-3 inline-block">
                    Curadoria Diária de Achadinhos
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                    As melhores ofertas da internet, <span className="text-[#E50914]">direto no seu alvo.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Pesquise análises confiáveis de produtos e entre nos nossos grupos exclusivos para economizar de verdade.
                  </p>
                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-xl bg-[#E50914] text-white text-xs font-bold hover:bg-red-700 inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Receber achadinhos no WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Categorias de Ofertas */}
                <div className="p-5 sm:p-6 border-b border-slate-100">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Categorias Principais
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {categories.map((c, i) => (
                      <div
                        key={i}
                        className="p-3 bg-slate-50 hover:bg-white rounded-xl border border-slate-200/80 hover:border-red-200 text-center transition"
                      >
                        <p className="text-xs font-bold text-slate-800">{c.label}</p>
                        <p className="text-[11px] text-slate-600 mt-0.5">{c.count}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prévia do Blog */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Últimos Artigos & Comparações
                    </span>
                    <span className="text-xs text-[#E50914] font-bold">Ver todos →</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {articles.map((a, i) => (
                      <div
                        key={i}
                        className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition"
                      >
                        <div>
                          <span className="text-[10px] font-black uppercase text-[#E50914] block mb-1">
                            {a.category}
                          </span>
                          <h4 className="text-xs font-bold text-slate-900 mb-1 leading-snug">
                            {a.title}
                          </h4>
                          <p className="text-[11px] text-slate-600 leading-normal mb-3">
                            {a.desc}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-[10px] text-slate-600">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-600" /> {a.readTime}
                          </span>
                          <span className="text-[#E50914] font-bold">Ler artigo</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* ABA 2: VER PAINEL ADMINISTRATIVO */
              <div className="bg-white text-slate-900 p-6 sm:p-8">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Painel de Controle • Promo no Alvo</h4>
                      <p className="text-xs text-slate-600">Área simples e intuitiva para você gerenciar o conteúdo.</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="px-3.5 py-1.5 rounded-lg bg-[#E50914] text-white text-xs font-bold hover:bg-red-700 flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Novo Artigo</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Bloco 1: Gestão de Links dos Grupos */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <label className="text-xs font-bold text-slate-800 block mb-1.5">
                      Link Principal do Grupo VIP (WhatsApp)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        readOnly
                        value="https://chat.whatsapp.com/promonoalvo-vip-oficial"
                        className="flex-1 bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-mono text-slate-600"
                      />
                      <button
                        type="button"
                        className="px-3 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800"
                      >
                        Alterar Link
                      </button>
                    </div>
                    <span className="text-[11px] text-slate-600 block mt-1">
                      Ao trocar o link aqui, todos os botões do site e dos artigos são atualizados automaticamente.
                    </span>
                  </div>

                  {/* Bloco 2: Gestão de Artigos Recentes */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-slate-800">Artigos Publicados</span>
                      <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Indexados no Google
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-800">5 fones Bluetooth com bom custo-benefício</span>
                        <span className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded">Editar</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-800">Air Fryer Mondial vs Philips Walita</span>
                        <span className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded">Editar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Nota explicativa de demonstração */}
        <p className="text-center text-xs text-slate-600 mt-6">
          * Demonstração conceitual do projeto. As cores, textos e detalhes finais serão validados em conjunto com Éric.
        </p>
      </div>
    </section>
  );
}
