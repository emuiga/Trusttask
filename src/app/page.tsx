import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BenefitsTable } from "@/components/BenefitsTable";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { LiveChat } from "@/components/LiveChat";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <BenefitsTable />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
      <LiveChat />
    </main>
  );
}
