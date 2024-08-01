"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import MaxContainer from "../MaxContainer";
import { ImageAssets } from "@/assets/ImageAssets";

const CommunityPartners = () => {
  return (
    <MaxContainer className="bg-grid-white/[0.05] relative mt-[65px] flex flex-col items-center justify-center overflow-hidden rounded-md bg-background antialiased">
      <h1 className="pb-16 pt-20 text-center text-5xl font-bold text-base-lime-green lg:text-7xl">
        Community Partners
      </h1>

      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </MaxContainer>
  );
};
export default CommunityPartners;

const testimonials = [
  { img: ImageAssets.Summer2k24.Partner1, alt: "Partner1" },
  { img: ImageAssets.Summer2k24.Partner2, alt: "Partner2" },
  { img: ImageAssets.Summer2k24.Partner3, alt: "Partner3" },
  { img: ImageAssets.Summer2k24.Partner4, alt: "Partner4" },
  { img: ImageAssets.Summer2k24.Partner5, alt: "Partner5" },
  { img: ImageAssets.Summer2k24.Partner6, alt: "Partner6" },
  { img: ImageAssets.Summer2k24.Partner7, alt: "Partner7" },
];
