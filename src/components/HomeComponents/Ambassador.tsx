import React from "react";
import MaxContainer from "../MaxContainer";
import AmbassadorCarousel from "./AmbassadorCarousel";
import { Button } from "../ui/button";
import { ImageAssets } from "@/assets/ImageAssets";

const Ambassador = () => {
  return (
    <MaxContainer id="ambassadors">
      <h1 className="pt-4 text-center text-5xl font-bold text-base-lime-green md:pt-12 lg:text-7xl">
        Ambassadors
      </h1>

      <AmbassadorCarousel />
    </MaxContainer>
  );
};

export default Ambassador;
