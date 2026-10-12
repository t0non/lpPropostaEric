import { Hero } from "@/components/Hero";
import { JourneySection } from "@/components/JourneySection";
import { SitePreview } from "@/components/SitePreview";
import { Deliverables } from "@/components/Deliverables";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-500 selection:text-white">
      {/* SEÇÃO 1: APRESENTAÇÃO */}
      <Hero />

      {/* SEÇÃO 2: COMO FUNCIONA */}
      <JourneySection />

      {/* SEÇÃO 3: PRÉVIA DO SITE */}
      <SitePreview />

      {/* SEÇÃO 4: O QUE ESTÁ INCLUSO */}
      <Deliverables />

      {/* SEÇÃO 5: INVESTIMENTO */}
      <Pricing />

      {/* RODAPÉ DISCRETO */}
      <Footer />
    </main>
  );
}
