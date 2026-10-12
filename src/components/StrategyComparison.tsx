"use client";

import React, { useState } from "react";
import {
  Search,
  Cpu,
  TrendingUp,
  Globe2,
  FileText,
  Users,
  Target,
  ArrowRight,
  MousePointerClick,
} from "lucide-react";

export function StrategyComparison() {
  const [activeChannel, setActiveChannel] = useState<"organico" | "ia" | "anuncios">("organico");

  return (
    <section className="py-24 bg-[#151515] text-white relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-900/60 mb-4">
            <MousePointerClick className="w-3.5 h-3.5 text-[#E50914]" />
            <span className="text-xs font-bold text-red-300 tracking-wide uppercase">
              Visão Sistêmica Completa
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Uma estratégia conectada do primeiro acesso ao clique no grupo.
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Veja como os três canais de aquisição convergem harmoniosamente para transformar
            visitantes em participantes das comunidades da Promo no Alvo.
          </p>
        </div>

        {/* FLUXOGRAMA INTERATIVO */}
        <div className="bg-[#1C1C1C] rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-2xl mb-12">
          {/* Nível 1: Três Canais de Origem */}
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
              01. Origens do Visitante (Selecione para explorar o fluxo)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              type="button"
              onClick={() => setActiveChannel("organico")}
              className={`p-5 rounded-2xl border text-left transition-all ${
                activeChannel === "organico"
                  ? "bg-neutral-900 border-[#E50914] ring-1 ring-red-600/40 shadow-lg"
                  : "bg-[#141414] border-neutral-800 hover:border-neutral-700"
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Search className="w-5 h-5 text-emerald-400" />
                <h4 className="text-sm font-bold text-white">Google Orgânico</h4>
              </div>
              <p className="text-xs text-neutral-400">
                Pesquisas espontâneas e artigos do blog sobre produtos e economia.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveChannel("ia")}
              className={`p-5 rounded-2xl border text-left transition-all ${
                activeChannel === "ia"
                  ? "bg-neutral-900 border-[#E50914] ring-1 ring-red-600/40 shadow-lg"
                  : "bg-[#141414] border-neutral-800 hover:border-neutral-700"
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Cpu className="w-5 h-5 text-purple-400" />
                <h4 className="text-sm font-bold text-white">Buscas com IA</h4>
              </div>
              <p className="text-xs text-neutral-400">
                Possíveis referências e descobertas em ferramentas de respostas generativas.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveChannel("anuncios")}
              className={`p-5 rounded-2xl border text-left transition-all ${
                activeChannel === "anuncios"
                  ? "bg-neutral-900 border-[#E50914] ring-1 ring-red-600/40 shadow-lg"
                  : "bg-[#141414] border-neutral-800 hover:border-neutral-700"
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <h4 className="text-sm font-bold text-white">Google e Meta Ads</h4>
              </div>
              <p className="text-xs text-neutral-400">
                Visitantes qualificados vindos de campanhas patrocinadas no momento exato de compra.
              </p>
            </button>
          </div>

          {/* Seta para Convergência */}
          <div className="flex justify-center mb-6">
            <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider flex items-center space-x-2">
              <span>Convergência Direta</span>
              <span>↓</span>
            </span>
          </div>

          {/* Nível 2: Hub Central (Site Promo no Alvo) */}
          <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-[#141414] border border-neutral-800 text-center mb-8 shadow-inner">
            <div className="w-12 h-12 rounded-2xl bg-[#E50914] text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-red-600/30">
              <Globe2 className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">
              Ponto Central de Encontro
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5 mb-1">
              Plataforma Oficial Promo no Alvo
            </h3>
            <p className="text-xs text-neutral-400 max-w-md mx-auto">
              Recebe o visitante em uma página de alta velocidade, apresentando curadoria de autoridade e conteúdos educativos que geram confiança.
            </p>
          </div>

          {/* Níveis Seguintes: Conteúdo -> Botão do Grupo -> Mensuração */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
              <span className="text-[10px] font-bold text-neutral-500 uppercase block mb-1">
                Etapa A
              </span>
              <p className="text-xs font-bold text-white mb-1">Conteúdo ou Oferta</p>
              <p className="text-[11px] text-neutral-400">
                O visitante encontra a resposta para a dúvida ou o produto desejado.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
              <span className="text-[10px] font-bold text-neutral-500 uppercase block mb-1">
                Etapa B
              </span>
              <p className="text-xs font-bold text-[#E50914] mb-1">Convite para o Grupo</p>
              <p className="text-[11px] text-neutral-400">
                Chamada irresistível para receber novos achadinhos diários no WhatsApp/Telegram.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
              <span className="text-[10px] font-bold text-neutral-500 uppercase block mb-1">
                Etapa C
              </span>
              <p className="text-xs font-bold text-emerald-400 mb-1">Interação Registrada</p>
              <p className="text-[11px] text-neutral-400">
                GA4 e Meta Pixel computam a conversão para otimização das estratégias.
              </p>
            </div>
          </div>
        </div>

        {/* Nota técnica */}
        <div className="text-center text-xs text-neutral-500">
          * A entrada efetiva nos grupos depende da instalação do aplicativo pelo usuário e das configurações técnicas de convite.
        </div>
      </div>
    </section>
  );
}
