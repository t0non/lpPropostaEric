"use client";

import React, { useState } from "react";
import {
  FileEdit,
  Users,
  Sparkles,
  Lock,
  Plus,
  CheckCircle2,
  ExternalLink,
  Save,
  X,
  Eye,
  SlidersHorizontal,
  Info
} from "lucide-react";

export function AdminSection() {
  const [activeTab, setActiveTab] = useState<"artigos" | "grupos" | "recomendacao">("artigos");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"novo_artigo" | "editar_grupo" | "nova_recomendacao">("novo_artigo");
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  // Simulated state for groups
  const [groupLink, setGroupLink] = useState("https://chat.whatsapp.com/promonoalvo-vip-oficial");
  const [telegramLink, setTelegramLink] = useState("https://t.me/promonoalvo_oficial");

  // Simulated articles
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Melhores fones de ouvido sem fio até R$ 250 em 2026",
      category: "Eletrônicos",
      status: "Publicado",
      views: "1.240 leituras",
    },
    {
      id: 2,
      title: "Como não cair em falsos descontos em lojas online",
      category: "Dicas de Compra",
      status: "Publicado",
      views: "890 leituras",
    },
    {
      id: 3,
      title: "Comparativo: Air Fryer Mondial vs Philips Walita",
      category: "Eletrodomésticos",
      status: "Rascunho",
      views: "0 leituras",
    },
  ]);

  // Handle open modal
  const handleOpenModal = (type: "novo_artigo" | "editar_grupo" | "nova_recomendacao") => {
    setModalType(type);
    setModalOpen(true);
    setFeedbackMsg(null);
  };

  const handleSimulateSave = (actionDesc: string) => {
    setFeedbackMsg(`✓ Ação concluída com sucesso! (${actionDesc} simulado)`);
    setTimeout(() => {
      setFeedbackMsg(null);
      setModalOpen(false);
    }, 1800);
  };

  return (
    <section id="painel" className="py-20 bg-slate-50 text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-2">
            Autonomia Total • Sem Dependência Técnica
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Você no controle do seu conteúdo
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Criado para ser intuitivo e rápido: gerencie novos artigos, atualize links dos seus grupos de WhatsApp/Telegram e destaque produtos sem precisar de programador.
          </p>
        </div>

        {/* Mockup Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
          {/* Top Bar of Admin */}
          <div className="bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center justify-between text-xs text-white">
            <span className="font-bold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              Painel de Gestão • Promo no Alvo
            </span>
            <span className="text-slate-400 text-[11px] font-mono">admin.promonoalvo.com.br</span>
          </div>

          <div className="p-6">
            {/* Tab switchers */}
            <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4 mb-6">
              <button
                onClick={() => setActiveTab("artigos")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "artigos"
                    ? "bg-[#E50914] text-white shadow-sm"
                    : "text-slate-600 bg-slate-100 hover:bg-slate-200"
                }`}
              >
                <FileEdit className="w-3.5 h-3.5" />
                1. Gerenciar Artigos
              </button>
              <button
                onClick={() => setActiveTab("grupos")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "grupos"
                    ? "bg-[#E50914] text-white shadow-sm"
                    : "text-slate-600 bg-slate-100 hover:bg-slate-200"
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                2. Links dos Grupos
              </button>
              <button
                onClick={() => setActiveTab("recomendacao")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "recomendacao"
                    ? "bg-[#E50914] text-white shadow-sm"
                    : "text-slate-600 bg-slate-100 hover:bg-slate-200"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                3. Recomendação & Oferta
              </button>
            </div>

            {/* TAB 1: ARTIGOS */}
            {activeTab === "artigos" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">
                    Artigos publicados atraem visitantes pelo Google e direcionam para seus grupos.
                  </p>
                  <button
                    onClick={() => handleOpenModal("novo_artigo")}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E50914] text-white text-xs font-bold hover:bg-red-700 transition"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Novo Artigo
                  </button>
                </div>

                <div className="space-y-2.5">
                  {articles.map((art) => (
                    <div
                      key={art.id}
                      className="p-3.5 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs transition"
                    >
                      <div>
                        <div className="font-bold text-slate-900">{art.title}</div>
                        <div className="flex items-center gap-2 text-slate-500 text-[11px] mt-0.5">
                          <span>Categoria: <strong className="text-slate-700">{art.category}</strong></span>
                          <span>•</span>
                          <span>{art.views}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2.5 py-0.5 rounded font-semibold text-[10px] ${
                            art.status === "Publicado"
                              ? "text-emerald-700 bg-emerald-100"
                              : "text-amber-700 bg-amber-100"
                          }`}
                        >
                          {art.status}
                        </span>
                        <button
                          onClick={() => handleOpenModal("novo_artigo")}
                          className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-[11px] font-medium"
                        >
                          Editar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: GRUPOS */}
            {activeTab === "grupos" && (
              <div className="space-y-4">
                <p className="text-xs text-slate-500">
                  Troque o link de convite quando o grupo encher. O site inteiro é atualizado automaticamente em todos os botões e páginas.
                </p>

                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <label className="font-bold text-slate-800 block mb-1">
                      Link Principal do Grupo WhatsApp (VIP Achadinhos)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={groupLink}
                        onChange={(e) => setGroupLink(e.target.value)}
                        className="flex-1 bg-white text-slate-700 p-2.5 rounded-lg border border-slate-300 font-mono text-xs focus:outline-none focus:border-[#E50914]"
                      />
                      <button
                        onClick={() => handleOpenModal("editar_grupo")}
                        className="px-3 py-2 bg-slate-900 text-white rounded-lg font-bold text-xs hover:bg-slate-800"
                      >
                        Salvar
                      </button>
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      Aplicado a todos os botões "Entrar no Grupo" do site e dos artigos.
                    </span>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <label className="font-bold text-slate-800 block mb-1">
                      Canal Telegram / Canal WhatsApp Alternativo
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={telegramLink}
                        onChange={(e) => setTelegramLink(e.target.value)}
                        className="flex-1 bg-white text-slate-700 p-2.5 rounded-lg border border-slate-300 font-mono text-xs focus:outline-none focus:border-[#E50914]"
                      />
                      <button
                        onClick={() => handleOpenModal("editar_grupo")}
                        className="px-3 py-2 bg-slate-900 text-white rounded-lg font-bold text-xs hover:bg-slate-800"
                      >
                        Salvar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: RECOMENDAÇÃO */}
            {activeTab === "recomendacao" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">
                    Insira boxes de destaque de achadinhos dentro dos artigos com link de afiliado ou convite do grupo.
                  </p>
                  <button
                    onClick={() => handleOpenModal("nova_recomendacao")}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E50914] text-white text-xs font-bold hover:bg-red-700 transition"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Destacar Produto
                  </button>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-bold text-slate-900 block">Box de Oferta: Fone QCY T13 ANC</span>
                      <span className="text-slate-500 text-[11px]">De R$ 199 por R$ 119 no AliExpress / Shopee</span>
                    </div>
                    <span className="text-emerald-700 bg-emerald-100 text-[10px] font-bold px-2 py-0.5 rounded">
                      Ativo no Artigo
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-slate-600 flex items-center justify-between">
                    <span>Chamada: "Quer pegar essa oferta? No grupo avisamos na hora que baixar mais!"</span>
                    <button
                      onClick={() => handleOpenModal("nova_recomendacao")}
                      className="text-xs text-[#E50914] font-bold hover:underline"
                    >
                      Editar Box
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer note of mockup */}
          <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              <span>Interface moderna configurada para uso simples em celular ou computador.</span>
            </div>
            <span className="text-[11px] font-medium text-slate-400">
              * Demonstração conceitual do painel administrativo
            </span>
          </div>
        </div>
      </div>

      {/* SIMULATION MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-red-500" />
                <span className="font-bold text-sm">
                  {modalType === "novo_artigo" && "Simulação: Criar / Editar Artigo"}
                  {modalType === "editar_grupo" && "Simulação: Atualizar Link do Grupo"}
                  {modalType === "nova_recomendacao" && "Simulação: Inserir Recomendação"}
                </span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-700">
              {feedbackMsg ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium text-sm">{feedbackMsg}</span>
                </div>
              ) : (
                <>
                  {modalType === "novo_artigo" && (
                    <>
                      <div>
                        <label className="block font-bold text-slate-800 mb-1">Título do Artigo</label>
                        <input
                          type="text"
                          defaultValue="Top 5 Fones com Cancelamento de Ruído para Comprar Agora"
                          className="w-full p-2.5 border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-bold text-slate-800 mb-1">Categoria</label>
                          <select className="w-full p-2.5 border border-slate-300 rounded-lg text-xs bg-white">
                            <option>Eletrônicos</option>
                            <option>Dicas de Compra</option>
                            <option>Casa e Cozinha</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-bold text-slate-800 mb-1">Status</label>
                          <select className="w-full p-2.5 border border-slate-300 rounded-lg text-xs bg-white">
                            <option>Publicado</option>
                            <option>Rascunho</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block font-bold text-slate-800 mb-1">Chamada para o Grupo no final</label>
                        <input
                          type="text"
                          defaultValue="Gostou dessas ofertas? Entre no grupo Promo no Alvo para pegar em primeira mão!"
                          className="w-full p-2.5 border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                    </>
                  )}

                  {modalType === "editar_grupo" && (
                    <>
                      <div>
                        <label className="block font-bold text-slate-800 mb-1">Novo Link de Convite</label>
                        <input
                          type="text"
                          defaultValue="https://chat.whatsapp.com/promonoalvo-grupo-02-novo"
                          className="w-full p-2.5 border border-slate-300 rounded-lg text-xs font-mono"
                        />
                      </div>
                      <p className="text-slate-500 text-[11px]">
                        Ao salvar, todos os botões do site que direcionam para este grupo serão atualizados instantaneamente.
                      </p>
                    </>
                  )}

                  {modalType === "nova_recomendacao" && (
                    <>
                      <div>
                        <label className="block font-bold text-slate-800 mb-1">Produto Recomendado</label>
                        <input
                          type="text"
                          defaultValue="Smart TV 50 Polegadas 4K"
                          className="w-full p-2.5 border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-800 mb-1">Texto da Oferta</label>
                        <input
                          type="text"
                          defaultValue="Preço histórico registrado no grupo: R$ 1.799 com cupom!"
                          className="w-full p-2.5 border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                    </>
                  )}

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-slate-500 text-[11px]">
                    💡 <em>Esta é uma simulação de interface para ilustrar como será a sua facilidade de gestão diária.</em>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      onClick={() => setModalOpen(false)}
                      className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={() => handleSimulateSave(modalType.replace("_", " "))}
                      className="px-4 py-2 bg-[#E50914] text-white rounded-lg font-bold hover:bg-red-700 flex items-center gap-1.5"
                    >
                      <Save className="w-3.5 h-3.5" />
                      Simular Salvamento
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
