import { Hero } from "@/components/Hero";
import { Opportunity } from "@/components/Opportunity";
import { StrategyFlow } from "@/components/StrategyFlow";
import { SEOSection } from "@/components/SEOSection";
import { AISection } from "@/components/AISection";
import { GoogleAdsSection } from "@/components/GoogleAdsSection";
import { TrackingSection } from "@/components/TrackingSection";
import { AdminSection } from "@/components/AdminSection";
import { Deliverables } from "@/components/Deliverables";
import { Pricing } from "@/components/Pricing";
import { NextSteps } from "@/components/NextSteps";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900">
      <Hero />
      <Opportunity />
      <StrategyFlow />
      <SEOSection />
      <AISection />
      <GoogleAdsSection />
      <TrackingSection />
      <AdminSection />
      <Deliverables />
      <Pricing />
      <NextSteps />
      <Footer />
    </main>
  );
}
