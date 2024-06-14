import { HeroHighlightDemo } from "@/components/HomeComponents/Hero";
import MainCarousel from "@/components/MainCarousel";

const Home = () => {
  return (
    <main>
      <HeroHighlightDemo />
      <MainCarousel carouselData={data} />
    </main>
  );
};

export default Home;

const data = [
  { text: "hello1" },
  { text: "hello2" },
  { text: "hello3" },
  { text: "hello4" },
  { text: "hello5" },
  { text: "hello6" },
  { text: "hello7" },
  { text: "hello8" },
];
