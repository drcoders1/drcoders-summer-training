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
        <div className="relative mt-10 overflow-hidden bg-transparent md:mt-20">
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
  { name: "Shazib Ali", img: ImageAssets.Summer2k24.Ambassador4 },
  { name: "Shahnil Sharma", img: ImageAssets.Summer2k24.Ambassador3 },
  { name: "Zainab Kashif", img: ImageAssets.Summer2k24.Ambassador5 },
  { name: "Safiullah Baig", img: ImageAssets.Summer2k24.Ambassador2 },
  { name: "Muhammad Zuraiz Zia", img: ImageAssets.Summer2k24.Ambassador1 },
];
