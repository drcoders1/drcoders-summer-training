import Offerings from "@/components/HomeComponents/Offerings";
import SpotlightPreview from "@/components/HomeComponents/SpotlightPreview";
import VisionMission from "@/components/HomeComponents/VisionMission";
import React from "react";

const page = () => {
  return (
    <main>
      <SpotlightPreview />
      <VisionMission />
      <Offerings />
    </main>
  );
};

export default page;
