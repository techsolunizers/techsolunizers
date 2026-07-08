import NothHero from "../components/Nothhero";
import BusinessSpectrum from "../components/BusinessSpectrum";
import Features from "../components/Features";
import GrowthChart from "../components/GrowthChart";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <NothHero />
      <BusinessSpectrum />
      <Features />
      <GrowthChart />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <CTA />
    </>
  );
}