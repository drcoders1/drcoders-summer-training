// This component is being used by a Technologies and Clients in homepage.

"use client";
import * as React from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import type { StaticImageData } from "next/image";

const MainCarousel = ({
  carouselData,
}: {
  carouselData: { logo?: StaticImageData | string; text: string }[];
}) => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });

    api.on("init", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = (dotIndex: number) => {
    if (api) {
      const startIndex = dotIndex;
      api.scrollTo(startIndex);
      setCurrentSlide(startIndex);
    }
  };

  return (
    <div className="relative w-full">
      {carouselData && (
        <Carousel
          opts={{
            align: "start",
            loop: true,
            // dragFree: true,
            slidesToScroll: 2,
          }}
          className="w-full"
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
        >
          <div className="relative mt-10 overflow-hidden bg-transparent md:mt-20">
            <CarouselContent>
              {carouselData &&
                carouselData.map((data, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 sm:basis-1/3 lg:basis-1/4"
                  >
                    <div className="flex items-center justify-center">
                      <h1>{data.text}</h1>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
          </div>

          <CarouselPrevious className="left-0 opacity-50 md:hover:opacity-80" />
          <CarouselNext className="right-0 opacity-50 md:hover:opacity-80" />

          {/* Render dots */}
          <div className="absolute -bottom-12 left-0 right-0 mx-auto mt-4 flex justify-center space-x-2 md:-bottom-16">
            {carouselData &&
              Array.from(
                { length: Math.ceil(carouselData.length / 2) },
                (_, i) => i,
              ).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-1 w-6 rounded-full transition-colors duration-200 ease-in-out md:h-1.5 ${
                    index === Math.floor(currentSlide)
                      ? "bg-base-blue"
                      : "bg-gray-300"
                  }`}
                ></button>
              ))}
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default MainCarousel;
