import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import BusinessAnalysis from "../components/BusinessAnalysis";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BusinessAnalysis/>
      <Footer />
    </>
  );
}
