import { Hero } from "@/components/Hero";
import { OrganicOpportunity } from "@/components/OrganicOpportunity";
import { Opportunity } from "@/components/Opportunity";
import { StrategyFlow } from "@/components/StrategyFlow";
import { HowItWorks } from "@/components/HowItWorks";
import { SitePreview } from "@/components/SitePreview";
import { Deliverables } from "@/components/Deliverables";
import { Pricing } from "@/components/Pricing";
import { NextSteps } from "@/components/NextSteps";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-500 selection:text-white">
      {/* 1. APRESENTAÇÃO — Headline personalizada + mockup do site */}
      <Hero />

      {/* 2. OPORTUNIDADE — Diferencial orgânico vs divulgação direta */}
      <OrganicOpportunity />

      {/* 3. CARDS DA ESTRATÉGIA — Google, IAs, Grupos, Search Console, Analytics */}
      <Opportunity />

      {/* 4. FUNIL VISUAL DA ESTRATÉGIA */}
      <StrategyFlow />

      {/* 5. COMO FUNCIONA — Fluxo de 4 etapas Google → Artigo → Convite → Participante */}
      <HowItWorks />

      {/* 6. DEMONSTRAÇÃO INTERATIVA — Ver site / Ver painel */}
      <SitePreview />

      {/* 7. BENEFÍCIOS E ENTREGAS — 6 cards orientados ao benefício + nota estratégica */}
      <Deliverables />

      {/* 8. INVESTIMENTO — Card premium limpo, sem tabela de ancoragem */}
      <Pricing />

      {/* 9. FECHAMENTO — Título, subtítulo, processo e CTA */}
      <NextSteps />

      {/* RODAPÉ */}
      <Footer />
    </main>
  );
}
