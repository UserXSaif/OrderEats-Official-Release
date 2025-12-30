import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FeatureGrid from "@/components/FeatureGrid";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <FeatureGrid />
      <Process />
      <Services />
      <Portfolio />
      <Footer />
    </main>
  );
}
