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
import { Button } from "../ui/button";

const AmbassadorCarousel = () => {
  const [isCarousel, setIsCarousel] = React.useState(true);
  const [openedNumber, setOpenedNumber] = React.useState(10);

  return (
    <MaxContainer className="relative w-full md:px-3">
      {isCarousel ? (
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
      ) : (
        <section className="mt-16 grid gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {carouselData.slice(0, openedNumber).map((Item, index) => (
            <div key={index}>
              <div className="relative h-96 overflow-hidden rounded-[16px] border-2 border-base-lime-green p-1 sm:h-[260px] lg:h-[280px]">
                <div className="h-full w-full overflow-hidden rounded-[12px]">
                  {/* rounded-[10px] because inner border-radius = outer border-radius - padding */}
                  <Image
                    src={Item.img}
                    alt={Item.name}
                    className="h-full w-full object-cover object-center "
                    placeholder="blur"
                  />
                </div>

                <h1 className="absolute bottom-0 left-0 z-10 max-w-[75%] rounded-tr-[12px] bg-base-lime-green px-3 py-1 text-base-blue sm:text-xs lg:text-sm">
                  {Item.name}
                </h1>
              </div>
            </div>
          ))}
        </section>
      )}

      <div className="mt-5 flex justify-end gap-5">
        {!isCarousel && openedNumber < totalItems && (
          <Button
            className="gap-2 bg-base-lime-green px-5 hover:bg-base-lime-green/90"
            onClick={() => {
              if (openedNumber < totalItems) {
                setOpenedNumber(openedNumber + 10);
              }
            }}
          >
            Show More
            <ImageAssets.Icons.ArrowRight size={14} />
          </Button>
        )}

        <Button
          className="gap-2 bg-base-lime-green px-5 hover:bg-base-lime-green/90"
          onClick={() => {
            setIsCarousel(!isCarousel);
            setOpenedNumber(10);
          }}
        >
          {isCarousel ? "See All" : "Collapse All"}{" "}
          {!!isCarousel && <ImageAssets.Icons.ArrowRight size={14} />}
        </Button>
      </div>
    </MaxContainer>
  );
};

export default AmbassadorCarousel;

const carouselData: { name: string; img: string | StaticImageData }[] = [
  { name: "Abdul Mateen", img: ImageAssets.Summer2k24.ManPlaceholer },
  { name: "Abdul Rehman", img: ImageAssets.Summer2k24.Ambassador2 },
  { name: "Abdullah Nazir", img: ImageAssets.Summer2k24.Ambassador3 },
  // { name: "Abee mir", img: ImageAssets.Summer2k24.Ambassador4 },
  { name: "Adeel Farooq", img: ImageAssets.Summer2k24.Ambassador5 },
  { name: "Ahad Ali", img: ImageAssets.Summer2k24.Ambassador6 },
  { name: "Ahmad Amin", img: ImageAssets.Summer2k24.Ambassador7 },
  { name: "Ahsaan", img: ImageAssets.Summer2k24.Ambassador8 },
  {
    name: "Amina Mehwish Khan",
    img: ImageAssets.Summer2k24.WomanPlaceholer,
  },
  { name: "Anas Malik", img: ImageAssets.Summer2k24.Ambassador10 },
  { name: "BATOOL KHAN", img: ImageAssets.Summer2k24.WomanPlaceholer },
  { name: "Dilawaiz Khan", img: ImageAssets.Summer2k24.WomanPlaceholer },
  { name: "Faheela Farooq", img: ImageAssets.Summer2k24.Ambassador13 },
  { name: "Fatima Aamer", img: ImageAssets.Summer2k24.Ambassador14 },
  { name: "Halima Fahim", img: ImageAssets.Summer2k24.Ambassador15 },
  { name: "Hasnain", img: ImageAssets.Summer2k24.Ambassador16 },
  { name: "Imsha Nadeem", img: ImageAssets.Summer2k24.Ambassador17 },
  { name: "Khizra Yaseen", img: ImageAssets.Summer2k24.WomanPlaceholer },
  { name: "Maham Rizwan", img: ImageAssets.Summer2k24.WomanPlaceholer },
  { name: "Maira Khatoon", img: ImageAssets.Summer2k24.Ambassador20 },
  { name: "Misheal Micheal", img: ImageAssets.Summer2k24.WomanPlaceholer },
  { name: "Muhammad Moazam", img: ImageAssets.Summer2k24.Ambassador22 },
  { name: "Muhammad Talha", img: ImageAssets.Summer2k24.Ambassador23 },
  { name: "Muhammad Zuraiz Zia", img: ImageAssets.Summer2k24.Ambassador24 },
  { name: "Multi Media", img: ImageAssets.Summer2k24.Ambassador25 },
  { name: "Mustaghees Malik", img: ImageAssets.Summer2k24.Ambassador26 },
  { name: "Nimra Tariq", img: ImageAssets.Summer2k24.WomanPlaceholer },
  { name: "SHAHNIL SHARMA", img: ImageAssets.Summer2k24.Ambassador28 },
  { name: "Safiullah Baig", img: ImageAssets.Summer2k24.Ambassador29 },
  { name: "Safiullah Khan", img: ImageAssets.Summer2k24.Ambassador30 },
  { name: "Samran Zahid", img: ImageAssets.Summer2k24.Ambassador31 },
  { name: "Sapna Fazal", img: ImageAssets.Summer2k24.WomanPlaceholer },
  { name: "Shahmeer Nadeem", img: ImageAssets.Summer2k24.Ambassador33 },
  { name: "Shazib Ali", img: ImageAssets.Summer2k24.Ambassador34 },
  { name: "Tabinda Noor", img: ImageAssets.Summer2k24.WomanPlaceholer },
  { name: "Tayyaba Awan", img: ImageAssets.Summer2k24.Ambassador36 },
  { name: "Uswa Arif", img: ImageAssets.Summer2k24.WomanPlaceholer },
  { name: "Wajeeha Ahmad", img: ImageAssets.Summer2k24.WomanPlaceholer },
  { name: "Zainab Kashif", img: ImageAssets.Summer2k24.Ambassador39 },
  { name: "Zaira Rajput", img: ImageAssets.Summer2k24.WomanPlaceholer },
  { name: "bilal shahid", img: ImageAssets.Summer2k24.ManPlaceholer },
  { name: "bisma umar", img: ImageAssets.Summer2k24.Ambassador42 },
  { name: "hifza jutt", img: ImageAssets.Summer2k24.Ambassador43 },
  { name: "Hassan Faisal", img: ImageAssets.Summer2k24.Ambassador44 },
  { name: "muntazir hasan", img: ImageAssets.Summer2k24.Ambassador45 },
  {
    name: "syeda asmara hassan",
    img: ImageAssets.Summer2k24.WomanPlaceholer,
  },
  { name: "zahid nasim", img: ImageAssets.Summer2k24.ManPlaceholer },
];

const totalItems = carouselData.length;
