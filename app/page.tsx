// app/page.tsx — VERSION FINALE
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UniversSection from "@/components/UniversSection";
import WhyIziLoto from "@/components/WhyIziLoto";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      style={{
        overflowX: "hidden",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* ── BANDE JEU RESPONSABLE ── */}
      <TopBar />

      {/* ── NAVIGATION ── */}
      <Navbar />

      {/* ── HERO PLEIN ÉCRAN ── */}
      <HeroSection />

      {/* ── 3 UNIVERS DE JEUX ── */}
      <UniversSection />

      {/* ── POURQUOI IZILOTO ── */}
      <WhyIziLoto />

      {/* ── FAQ ── */}
      <FAQSection />

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
