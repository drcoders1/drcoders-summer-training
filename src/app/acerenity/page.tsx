import CardGrid from "@/components/AcerenityComponents/CardGrid";
import ChangingTabs from "@/components/AcerenityComponents/ChangingTabs";
import ChangingWords from "@/components/AcerenityComponents/ChangingWords";
import GeneratingText from "@/components/AcerenityComponents/GeneratingText";
import Hero from "@/components/AcerenityComponents/Hero";
import LampHeading from "@/components/AcerenityComponents/LampHeading";
import ParticleHeading1 from "@/components/AcerenityComponents/ParticleHeading1";
import ParticleHeading2 from "@/components/AcerenityComponents/ParticleHeading2";
import SpotlightPreview from "@/components/AcerenityComponents/SpotlightPreviewOld";
import TextReveal from "@/components/AcerenityComponents/TextReveal";
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
