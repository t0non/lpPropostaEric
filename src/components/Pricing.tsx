"use client";

import React from "react";
import { proposal } from "@/config/proposal";
import { formatCurrency } from "@/lib/formatters";
import { CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export function Pricing() {
  const deliverablesWithBenefits = [
    {
      title: "Site institucional exclusivo com a identidade Promo no Alvo",
      benefit: "Transmite autoridade profissional imediata e credibilidade para novos visitantes que ainda não conhecem seus grupos.",
    },
    {
      title: "Blog estratégico estruturado para comparativos e achadinhos",
      benefit: "Cria ativos digitais permanentes no ar que podem atrair tráfego qualificado de pessoas prontas para comprar.",
    },
    {
      title: "SEO técnico e arquitetura semântica para o Google",
      benefit: "Estrutura limpa, rápida e otimizada para os robôs do Google indexarem suas análises de produtos com eficiência.",
    },
    {
      title: "Marcação de dados para Inteligência Artificial (GEO)",
      benefit: "Permite que buscadores modernos e assistentes de IA interpretem seus artigos como referências úteis de recomendação.",
    },
    {
      title: "Preparação para futuras campanhas de anúncios (Google/Meta)",
      benefit: "Se você optar por rodar anúncios no futuro, a base já estará pronta, sem retrabalho nem custo extra de reestruturação.",
    },
    {
      title: "Mapeamento de conversões para WhatsApp e Telegram",
      benefit: "Permite acompanhar no Google Analytics quantas pessoas realmente clicaram para entrar nos seus grupos de ofertas.",
    },
    {
      title: "Painel administrativo intuitivo para gestão autônoma",
      benefit: "Total liberdade para Éric criar artigos, editar textos e alterar os links de convite dos grupos a qualquer momento.",
    },
    {
      title: "Publicação em produção e treinamento inicial de uso",
      benefit: "Entrega do site funcionando no ar, com suporte na validação e orientação clara para você começar a operar o painel.",
    },
  ];

  return (
    <section id="investimento" className="py-20 bg-slate-50 text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block mb-2">
            Investimento Transparente
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Uma estrutura completa. Um investimento justo e planejado.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Valor único pela implantação completa descrita na proposta, sem mensalidade oculta de desenvolvimento.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg">
          {/* Top highlight */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#E50914] bg-red-50 px-3 py-1 rounded-full border border-red-200">
                PROPOSTA EXCLUSIVA PARA {proposal.client.toUpperCase()}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-3">
                Plataforma Digital Promo no Alvo
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Implantação da plataforma web, blog de achadinhos, SEO e painel administrativo.
              </p>
            </div>

            <div className="text-left sm:text-right bg-slate-50 sm:bg-transparent p-4 sm:p-0 rounded-2xl border sm:border-0 border-slate-100">
              <span className="text-xs text-slate-500 font-semibold uppercase block">Valor Total</span>
              <span className="text-4xl sm:text-5xl font-black text-[#E50914] tracking-tight">
                {formatCurrency(proposal.price)}
              </span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Taxa única de implantação</span>
            </div>
          </div>

          {/* Condições de Pagamento: 50% / 50% */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 font-medium block">Entrada no início do projeto (50%):</span>
              <div className="text-2xl font-black text-slate-900 mt-1">
                {formatCurrency(proposal.downPaymentValue)}
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Garante o início imediato do planejamento, layout e desenvolvimento.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 font-medium block">Entrega final do projeto (50%):</span>
              <div className="text-2xl font-black text-slate-900 mt-1">
                {formatCurrency(proposal.deliveryValue)}
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Pago após testes, validação conjunta e publicação oficial no ar.
              </p>
            </div>
          </div>

          {/* O que está incluso com explicação de valor */}
          <div className="mb-10">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E50914]" />
              O que está incluso e o impacto para o seu negócio:
            </h4>
            <div className="space-y-4">
              {deliverablesWithBenefits.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 hover:bg-slate-50 transition border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {item.benefit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botão de Aceite */}
          <a
            href="#proximos-passos"
            className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-extrabold text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
          >
            <span>Aprovar proposta e iniciar projeto</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Nota de transparência de custos de terceiros */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex items-start gap-2.5 text-[11px] text-slate-500">
            <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              <strong>Custos externos de terceiros:</strong> O registro de domínio (.com.br ~ R$ 40/ano) e a contratação do serviço de hospedagem são contratados diretamente em nome de Éric para que a propriedade seja 100% sua. Orientaremos na escolha dos serviços mais econômicos e estáveis do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
