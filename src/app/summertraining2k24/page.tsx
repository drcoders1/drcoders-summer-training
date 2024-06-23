import Ambassador from "@/components/SummerTraining2k24/Ambassador";
import CommunityPartners from "@/components/SummerTraining2k24/CommunityPartners";
import Details from "@/components/SummerTraining2k24/Details";
import Enroll from "@/components/SummerTraining2k24/Enroll";
import SummerCardGrid from "@/components/SummerTraining2k24/SummerCardGrid";
import SummerHero from "@/components/SummerTraining2k24/SummerHero";
import React from "react";

const SummerTraining = () => {
  return (
    <section className="mt-14 md:mt-8">
      <SummerHero />
      <Details />
      <Enroll />
      <SummerCardGrid />
      <Ambassador />
      {/* <CommunityPartners /> */}
    </section>
  );
};

export default SummerTraining;
