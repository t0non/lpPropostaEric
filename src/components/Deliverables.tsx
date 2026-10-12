"use client";

import React from "react";


export function Deliverables() {
  const cards: Array<{
    title: string;
    benefit: React.ReactNode;
    image?: string;
    icon?: React.ElementType;
  }> = [
    {
      image: "/card_site.png",
      title: "Site profissional responsivo",
      benefit: (
        <>
          Éric terá um portal próprio com a{" "}
          <strong className="text-slate-900 font-semibold">
            identidade visual da Promo no Alvo
          </strong>
          , rápido em qualquer dispositivo, especialmente no{" "}
          <strong className="text-slate-900 font-semibold">celular</strong>, onde
          a maioria dos visitantes está.
        </>
      ),
    },
    {
      image: "/card_blog.png",
      title: "Blog otimizado + 30 artigos iniciais",
      benefit: (
        <>
          Estrutura de blog pronta para publicar reviews e comparativos.{" "}
          <strong className="text-slate-900 font-semibold">
            30 artigos estratégicos inclusos
          </strong>{" "}
          para dar o pontapé inicial com{" "}
          <strong className="text-slate-900 font-semibold">
            volume e autoridade no Google
          </strong>
          .
        </>
      ),
    },
    {
      image: "/card_seo.png",
      title: "SEO técnico + estrutura para buscas com IA",
      benefit: (
        <>
          O site é configurado para que o{" "}
          <strong className="text-slate-900 font-semibold">
            Google e assistentes de inteligência artificial
          </strong>{" "}
          consigam ler e recomendar seus conteúdos, criando uma{" "}
          <strong className="text-slate-900 font-semibold">
            fonte recorrente de visitantes
          </strong>
          .
        </>
      ),
    },
    {
      image: "/card_admin.png",
      title: "Painel de gerenciamento",
      benefit: (
        <>
          Área administrativa intuitiva para publicar artigos, alterar textos e{" "}
          <strong className="text-slate-900 font-semibold">
            atualizar o link dos grupos de WhatsApp/Telegram
          </strong>{" "}
          a qualquer momento,{" "}
          <strong className="text-slate-900 font-semibold">
            sem depender de programador
          </strong>
          .
        </>
      ),
    },
    {
      image: "/card_trackeamento.png",
      title: "Analytics e rastreamento de cliques",
      benefit: (
        <>
          Configuração do{" "}
          <strong className="text-slate-900 font-semibold">
            Google Analytics 4 e Search Console
          </strong>{" "}
          para saber quais artigos trazem mais acessos e{" "}
          <strong className="text-slate-900 font-semibold">
            quantas pessoas clicam no botão do grupo
          </strong>
          .
        </>
      ),
    },
    {
      image: "/card_ads.png",
      title: "Preparação para Google Ads e Meta Ads",
      benefit: (
        <>
          Se no futuro Éric quiser impulsionar com anúncios, a{" "}
          <strong className="text-slate-900 font-semibold">
            estrutura técnica já estará 100% pronta
          </strong>
          .{" "}
          <strong className="text-slate-900 font-semibold">
            Sem custo adicional
          </strong>{" "}
          ou retrabalho para essa base.
        </>
      ),
    },
  ];

  return (
    <section id="o-que-esta-incluso" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Tudo o que você precisa para{" "}
            <span style={{ color: "#E50914" }}>melhorar</span> o que você já construiu.
          </h2>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col"
              >
                {c.image ? (
                  <div className="w-20 h-20 mb-4 shrink-0 flex items-center justify-start">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.image}
                      alt={c.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-xl bg-red-50 text-[#E50914] flex items-center justify-center mb-4 shrink-0">
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                )}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                  {c.benefit}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
