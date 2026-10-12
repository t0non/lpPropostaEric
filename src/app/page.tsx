import { Hero } from "@/components/Hero";
import { Opportunity } from "@/components/Opportunity";
import { StrategyFlow } from "@/components/StrategyFlow";
import { JourneySection } from "@/components/JourneySection";
import { SitePreview } from "@/components/SitePreview";
import { Deliverables } from "@/components/Deliverables";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-500 selection:text-white">
      {/* 1. APRESENTAÇÃO */}
      <Hero />

      {/* 2. OS CARDS DA ESTRATÉGIA (3 cards Google/IAs/Vendas + 2 cards Search Console & Analytics/GTM) */}
      <Opportunity />

      {/* 3. O FUNIL VISUAL DA ESTRATÉGIA */}
      <StrategyFlow />

      {/* 4. COMO FUNCIONA (Jornada em 3 passos) */}
      <JourneySection />

      {/* 5. PRÉVIA INTERATIVA DO SITE E PAINEL */}
      <SitePreview />

      {/* 6. O QUE ESTÁ INCLUSO */}
      <Deliverables />

      {/* 7. INVESTIMENTO & FECHAMENTO */}
      <Pricing />

      {/* RODAPÉ */}
      <Footer />
    </main>
  );
}
