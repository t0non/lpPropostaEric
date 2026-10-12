"use client";

import React from "react";
import Image from "next/image";

export function Opportunity() {
  return (
    <section id="problema" className="py-20 bg-white text-slate-900 relative">
      {/* Estilos e animação idênticos aos do siteexpressbrasil.site */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes googleGradientSpin {
          0% { background-position: 0 0, 0% 50%; }
          50% { background-position: 0 0, 100% 50%; }
          100% { background-position: 0 0, 0% 50%; }
        }
        .siteexpress-google-card {
          background: linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(45deg, #4285f4, #ea4335, #fbbc05, #34a853, #4285f4) border-box !important;
          background-size: 100% 100%, 300% 100% !important;
          animation: 4s linear infinite googleGradientSpin !important;
          box-shadow: 0 0 20px rgba(66, 133, 244, 0.2) !important;
          border: 3px solid transparent !important;
        }
        .siteexpress-card {
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
        }
        .siteexpress-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título opcional da seção com a imagem do olho do iphone caso queira manter o cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2.5 flex-wrap">
            <span>Por que ter um site ajuda a sua empresa??</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/olho_iphone.png"
              alt="Olho iPhone"
              width={40}
              height={40}
              className="inline-block object-contain"
            />
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
            Estar presente na internet de forma profissional não é mais opção, é <strong>obrigação.</strong>
          </p>
        </div>

        {/* Grid dos 3 Cards Exatos da SiteExpress */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch text-left">
          {/* CARD 01: Google Orgânico com imagem real /google.png e borda animada */}
          <div className="siteexpress-card siteexpress-google-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="mb-6 h-16 flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/google.png"
                  alt="Google"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mb-3">
                Buscas do{" "}
                <span style={{ color: "#4285F4" }}>G</span>
                <span style={{ color: "#EA4335" }}>o</span>
                <span style={{ color: "#FBBC05" }}>o</span>
                <span style={{ color: "#4285F4" }}>g</span>
                <span style={{ color: "#34A853" }}>l</span>
                <span style={{ color: "#EA4335" }}>e</span>{" "}
                Orgânico
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                Ajuda a colocar a sua empresa nas buscas do Google de forma orgânica, sendo encontrada por clientes que procuram seu serviço.
              </p>
            </div>
          </div>

          {/* CARD 02: Buscas das IAs com imagens reais /claude.png, /gemini.png, /chatgpt.png */}
          <div className="siteexpress-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="mb-6 h-16 flex items-center space-x-3.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/claude.png"
                  alt="Claude"
                  width={44}
                  height={44}
                  className="object-contain"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/gemini.png"
                  alt="Gemini"
                  width={90}
                  height={40}
                  className="object-contain"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/chatgpt.png"
                  alt="ChatGPT"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mb-3">
                Buscas das IAs
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                Ajuda nas buscas das inteligências artificiais. Ferramentas como ChatGPT recomendam empresas que possuem presença online estruturada.
              </p>
            </div>
          </div>

          {/* CARD 03: Trazer Mais Vendas com imagem real /vendas.png */}
          <div className="siteexpress-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="mb-6 h-16 flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/vendas.png"
                  alt="Vendas"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mb-3">
                Trazer Mais Vendas
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                Com tudo isso, um site profissional transmite confiança, atrai mais visitantes qualificados e consequentemente traz mais vendas para o seu negócio.
              </p>
            </div>
          </div>
        </div>

        {/* 2 Cards de Metrificação — mesma largura dos 3 acima */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 text-left">

          {/* Card — Google Search Console */}
          <div className="siteexpress-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="mb-6 h-16 flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo_search_console.svg"
                  alt="Google Search Console"
                  height={48}
                  width={180}
                  className="object-contain h-full w-auto"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mb-3">
                Metrificação de Buscas
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                Acompanhe quais palavras-chave trazem visitantes ao site, quantas impressões você tem no Google e qual é a posição média dos seus conteúdos nas buscas orgânicas.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Palavras-chave", "Impressões", "Posição média", "Cliques"].map((tag) => (
                <span key={tag} className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card — Google Analytics + GTM */}
          <div className="siteexpress-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="mb-6 h-16 flex items-center gap-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/google_analytics.avif"
                  alt="Google Analytics"
                  width={56}
                  height={56}
                  className="object-contain h-full w-auto"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/google_tag_manager.webp"
                  alt="Google Tag Manager"
                  width={56}
                  height={56}
                  className="object-contain h-full w-auto"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mb-3">
                Rastreamento & Analytics
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                Saiba exatamente como os visitantes navegam no site, quais botões de grupo recebem mais cliques e de onde vêm as conversões — com Google Analytics 4 e Tag Manager configurados.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Sessões", "Cliques nos grupos", "Taxa de conversão", "Origem do tráfego"].map((tag) => (
                <span key={tag} className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
