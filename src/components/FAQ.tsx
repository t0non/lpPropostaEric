"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, CheckCircle2 } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Preciso investir em anúncios pagos para ter resultado com o site?",
      a: "Não obrigatoriamente. O foco principal da estrutura é gerar tráfego orgânico (gratuito) no Google através de artigos e termos de busca com intenção de compra. A plataforma já é entregue tecnicamente preparada para anúncios no Google Ads ou Meta Ads, caso você decida acelerar no futuro, mas o projeto não exige orçamento mensal de mídia para existir ou crescer.",
    },
    {
      q: "O site aparecerá no Google imediatamente após a entrega?",
      a: "A indexação no Google começa assim que o site for publicado e cadastrado no Google Search Console (o que faremos na entrega). No entanto, o ranqueamento orgânico de artigos é um processo cumulativo que amadurece com o tempo e com a consistência de novos conteúdos. Nenhum profissional sério pode garantir primeira página instantânea, mas entregamos toda a base técnica recomendada pelo Google para acelerar esse ganho de autoridade.",
    },
    {
      q: "Consigo publicar meus próprios artigos sem precisar pagar ninguém?",
      a: "Sim, 100%! Desenvolvemos um painel administrativo específico e simplificado justamente para isso. Você poderá criar artigos, adicionar títulos, textos, fotos, tabelas e links de produtos de forma intuitiva pelo computador ou celular, sem precisar mexer em códigos nem pagar programadores para atualizações cotidianas.",
    },
    {
      q: "Consigo alterar os links dos grupos quando eles encherem?",
      a: "Com certeza. No painel você tem um campo exclusivo para gerenciar o link do grupo de WhatsApp e do canal do Telegram. Ao atualizar esse link uma única vez no painel, todos os botões espalhados pelo site e pelos artigos são atualizados instantaneamente em tempo real.",
    },
    {
      q: "Quais custos existem além dos R$ 997 desta proposta?",
      a: "O valor de R$ 997,00 cobre toda a criação, design, programação, SEO técnico, painel e entrega da plataforma. Os únicos custos externos obrigatórios na internet são o registro do seu domínio (ex: promonoalvo.com.br, em torno de R$ 40/ano no Registro.br) e o plano de hospedagem na web (existem excelentes planos a partir de R$ 20 a R$ 35/mês). Auxiliaremos você na contratação diretamente em seu nome, garantindo que você seja o único dono dos seus ativos.",
    },
    {
      q: "O que acontece após a entrega do projeto?",
      a: "Após a entrega e validação conjunta, realizamos uma sessão de orientação para demonstrar como publicar seu primeiro artigo e alterar os links. Você terá autonomia total sobre a plataforma. Se no futuro você quiser suporte contínuo para produção terceirizada de artigos ou campanhas de tráfego, poderemos conversar sobre novos escopos complementares, sem qualquer obrigatoriedade.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white text-slate-900 relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E50914] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perguntas e Respostas Claras
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Transparência absoluta para você tomar sua decisão com total segurança e clareza sobre cada detalhe.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#E50914]/40 bg-red-50/20 shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-[#E50914] text-white rotate-180" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-500">
          Tem outra dúvida específica que não está listada aqui? Fale conosco diretamente pelo WhatsApp para alinharmos antes de assinar.
        </div>
      </div>
    </section>
  );
}
