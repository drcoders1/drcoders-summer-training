import CardGrid from "@/components/HomeComponents/CardGrid";
import ChangingTabs from "@/components/HomeComponents/ChangingTabs";
import ChangingWords from "@/components/HomeComponents/ChangingWords";
import GeneratingText from "@/components/HomeComponents/GeneratingText";
import Hero from "@/components/HomeComponents/Hero";
import LampHeading from "@/components/HomeComponents/LampHeading";
import ParticleHeading1 from "@/components/HomeComponents/ParticleHeading1";
import ParticleHeading2 from "@/components/HomeComponents/ParticleHeading2";
import SpotlightPreview from "@/components/HomeComponents/SpotlightPreview";
import TextReveal from "@/components/HomeComponents/TextReveal";
import MainCarousel from "@/components/MainCarousel";

const Home = () => {
  return (
    <main>
      <Hero />
      <GeneratingText />
      <CardGrid />
      <ChangingWords />
      <ChangingTabs />
      <TextReveal />
      <ParticleHeading1 />
      <div className="h-10"></div>
      <ParticleHeading2 />
      <div className="h-10"></div>
      <SpotlightPreview />
      <div className="h-10"></div>
      <LampHeading />
      {/* <MainCarousel carouselData={data} /> */}
    </main>
  );
};

export default Home;
