"use client";

import React, { useState } from "react";
import { FileEdit, FolderTree, Users, Tag, Lock, Plus } from "lucide-react";

export function AdminSection() {
  const [activeTab, setActiveTab] = useState<"artigos" | "grupos">("artigos");

  return (
    <section id="painel" className="py-20 bg-slate-50 text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-2">
            Autonomia Total
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Você no controle da Promo no Alvo.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Área administrativa intuitiva para você gerenciar seus artigos, categorias e links de grupos sem depender de programador.
          </p>
        </div>

        {/* MOCKUP DO PAINEL CLEAN */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-100/70 px-5 py-3 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
            <span className="font-bold text-slate-800 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              Painel Administrativo • Promo no Alvo
            </span>
            <span className="text-slate-400">admin.promonoalvo.com.br</span>
          </div>

          <div className="p-6">
            <div className="flex space-x-2 border-b border-slate-200 pb-3 mb-5">
              <button
                onClick={() => setActiveTab("artigos")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "artigos" ? "bg-[#E50914] text-white" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Gerenciar Artigos
              </button>
              <button
                onClick={() => setActiveTab("grupos")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "grupos" ? "bg-[#E50914] text-white" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Gerenciar Grupos
              </button>
            </div>

            {activeTab === "artigos" ? (
              <div className="space-y-2.5">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">Como encontrar promoções de verdade na internet</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold text-[10px]">Publicado</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">Melhores dicas para economizar nas compras online</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold text-[10px]">Publicado</span>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <p className="font-bold text-slate-800 mb-1">Link do Grupo VIP Oficial</p>
                <input
                  readOnly
                  value="https://chat.whatsapp.com/exemplo-link-eric"
                  className="w-full bg-white text-slate-600 p-2 rounded border border-slate-200 font-mono text-xs"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
