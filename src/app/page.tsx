import Hero from "@/components/Hero";
import About from "@/components/About";
import CertifiedBy from "@/components/CertifiedBy";
import PromoBanner from "@/components/PromoBanner";
import RaceCategories from "@/components/RaceCategories";
import Exclusives from "@/components/Exclusives";
import Newsletter from "@/components/Newsletter";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CertifiedBy />
      <PromoBanner />
      <RaceCategories />
      <Exclusives />
      <Newsletter />
      <Sponsors />
    </>
  );
}
