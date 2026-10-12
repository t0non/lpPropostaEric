import { Hero } from "@/components/Hero";
import { Opportunity } from "@/components/Opportunity";
import { SitePreview } from "@/components/SitePreview";
import { JourneySection } from "@/components/JourneySection";
import { StrategyFlow } from "@/components/StrategyFlow";
import { SEOSection } from "@/components/SEOSection";
import { AISection } from "@/components/AISection";
import { GoogleAdsSection } from "@/components/GoogleAdsSection";
import { TrackingSection } from "@/components/TrackingSection";
import { AdminSection } from "@/components/AdminSection";
import { Timeline } from "@/components/Timeline";
import { Deliverables } from "@/components/Deliverables";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { NextSteps } from "@/components/NextSteps";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900">
      <Hero />
      <Opportunity />
      <SitePreview />
      <JourneySection />
      <StrategyFlow />
      <SEOSection />
      <AISection />
      <GoogleAdsSection />
      <TrackingSection />
      <AdminSection />
      <Timeline />
      <Deliverables />
      <Pricing />
      <FAQ />
      <NextSteps />
      <Footer />
    </main>
  );
}
