"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";
import Autoplay from "embla-carousel-autoplay";
import MaxContainer from "../MaxContainer";

const AmbassadorCarousel = () => {
  return (
    <MaxContainer className="relative w-full md:px-3">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <div className="relative mt-16 overflow-hidden bg-transparent">
          <CarouselContent>
            {carouselData.map((Item, index) => (
              <CarouselItem
                key={index}
                className="xs:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="relative h-96 overflow-hidden rounded-[16px] border-2 border-base-lime-green p-1 sm:h-[340px]">
                  <div className="h-full w-full overflow-hidden rounded-[12px]">
                    {/* rounded-[10px] because inner border-radius = outer border-radius - padding */}
                    <Image
                      src={Item.img}
                      alt={Item.name}
                      className="h-full w-full object-cover object-center "
                      placeholder="blur"
                    />
                  </div>

                  <h1 className="absolute bottom-0 left-0 z-10 max-w-[75%] rounded-tr-[12px] bg-base-lime-green px-3 py-1 text-base-blue">
                    {Item.name}
                  </h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious className="hidden bg-base-lime-green text-base-blue hover:bg-base-lime-green/80 md:inline-flex" />
        <CarouselNext className="hidden bg-base-lime-green text-base-blue hover:bg-base-lime-green/80 md:inline-flex" />
      </Carousel>
    </MaxContainer>
  );
};

export default AmbassadorCarousel;

const carouselData: { name: string; img: string | StaticImageData }[] = [
  { name: "Abdul Mateen.jpg", img: ImageAssets.Summer2k24.Ambassador1 },
  { name: "Abdul Rehman.png", img: ImageAssets.Summer2k24.Ambassador2 },
  { name: "Abdullah Nazir.jpg", img: ImageAssets.Summer2k24.Ambassador3 },
  // { name: "Abee mir.jpg", img: ImageAssets.Summer2k24.Ambassador4 },
  { name: "Adeel Farooq.jpeg", img: ImageAssets.Summer2k24.Ambassador5 },
  { name: "Ahad Ali.jpg", img: ImageAssets.Summer2k24.Ambassador6 },
  { name: "Ahmad Amin.png", img: ImageAssets.Summer2k24.Ambassador7 },
  { name: "Ahsaan.png", img: ImageAssets.Summer2k24.Ambassador8 },
  { name: "Amina Mehwish Khan.jpeg", img: ImageAssets.Summer2k24.Ambassador9 },
  { name: "Anas Malik.jpg", img: ImageAssets.Summer2k24.Ambassador10 },
  { name: "BATOOL KHAN.jpg", img: ImageAssets.Summer2k24.Ambassador11 },
  { name: "Dilawaiz Khan.jpg", img: ImageAssets.Summer2k24.Ambassador12 },
  { name: "Faheela Farooq.jpg", img: ImageAssets.Summer2k24.Ambassador13 },
  { name: "Fatima Aamer.jpg", img: ImageAssets.Summer2k24.Ambassador14 },
  { name: "Halima Fahim.jpg", img: ImageAssets.Summer2k24.Ambassador15 },
  { name: "Hasnain.png", img: ImageAssets.Summer2k24.Ambassador16 },
  { name: "Imsha Nadeem.jpg", img: ImageAssets.Summer2k24.Ambassador17 },
  { name: "Khizra Yaseen.jpg", img: ImageAssets.Summer2k24.Ambassador18 },
  { name: "Maham Rizwan.jpg", img: ImageAssets.Summer2k24.Ambassador19 },
  { name: "Maira Khatoon.jpg", img: ImageAssets.Summer2k24.Ambassador20 },
  { name: "Misheal Micheal.jpg", img: ImageAssets.Summer2k24.Ambassador21 },
  { name: "Muhammad Moazam.jpg", img: ImageAssets.Summer2k24.Ambassador22 },
  { name: "Muhammad Talha.png", img: ImageAssets.Summer2k24.Ambassador23 },
  { name: "Muhammad Zuraiz Zia.jpg", img: ImageAssets.Summer2k24.Ambassador24 },
  { name: "Multi Media.jpg", img: ImageAssets.Summer2k24.Ambassador25 },
  { name: "Mustaghees Malik.jpg", img: ImageAssets.Summer2k24.Ambassador26 },
  { name: "Nimra Tariq.jpg", img: ImageAssets.Summer2k24.Ambassador27 },
  { name: "SHAHNIL SHARMA.jpg", img: ImageAssets.Summer2k24.Ambassador28 },
  { name: "Safiullah Baig.jpeg", img: ImageAssets.Summer2k24.Ambassador29 },
  { name: "Safiullah Khan.png", img: ImageAssets.Summer2k24.Ambassador30 },
  { name: "Samran Zahid.png", img: ImageAssets.Summer2k24.Ambassador31 },
  { name: "Sapna Fazal.jpeg", img: ImageAssets.Summer2k24.Ambassador32 },
  { name: "Shahmeer Nadeem.jpeg", img: ImageAssets.Summer2k24.Ambassador33 },
  { name: "Shazib Ali.jpg", img: ImageAssets.Summer2k24.Ambassador34 },
  { name: "Tabinda Noor.jpg", img: ImageAssets.Summer2k24.Ambassador35 },
  { name: "Tayyaba Awan.jpeg", img: ImageAssets.Summer2k24.Ambassador36 },
  { name: "Uswa Arif.jpg", img: ImageAssets.Summer2k24.Ambassador37 },
  { name: "Wajeeha Ahmad.jpg", img: ImageAssets.Summer2k24.Ambassador38 },
  { name: "Zainab Kashif.jpg", img: ImageAssets.Summer2k24.Ambassador39 },
  { name: "Zaira Rajput.jpg", img: ImageAssets.Summer2k24.Ambassador40 },
  { name: "bilal shahid.jpg", img: ImageAssets.Summer2k24.Ambassador41 },
  { name: "bisma umar.jpg", img: ImageAssets.Summer2k24.Ambassador42 },
  { name: "hifza jutt.jpg", img: ImageAssets.Summer2k24.Ambassador43 },
  { name: "Hassan Faisal.jpg", img: ImageAssets.Summer2k24.Ambassador44 },
  { name: "muntazir hasan.jpg", img: ImageAssets.Summer2k24.Ambassador45 },
  { name: "syeda asmara hassan.jpg", img: ImageAssets.Summer2k24.Ambassador46 },
  { name: "zahid nasim.jpg", img: ImageAssets.Summer2k24.Ambassador47 },
];
