import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BusinessSpectrum from "./components/BusinessSpectrum";
import Features from "./components/Features";
import GrowthChart from "./components/GrowthChart";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

/** Single-page landing site for PraTej Solutions. */
export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <BusinessSpectrum />
        <Features />
        <GrowthChart />
        <HowItWorks />
        <Testimonials />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
