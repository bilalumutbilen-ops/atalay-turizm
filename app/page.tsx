import LoadingScreen from "./components/LoadingScreen";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import WhyUs from "./components/WhyUs";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <LoadingScreen />
      <Hero />

      <div className="relative bg-[#050505]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="relative">
          <Services />
          <Stats />
          <WhyUs />
          <CTA />
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}