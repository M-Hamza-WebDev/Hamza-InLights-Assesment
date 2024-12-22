import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import BusinessAnalysis from "../components/BusinessAnalysis";
import WhyOrinix from "../components/WhyOrinix";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BusinessAnalysis />
      <WhyOrinix />
      <Pricing />
      <Footer />
    </>
  );
}
