import Ambassador from "@/components/SummerTraining2k24/Ambassador";
import CommunityPartners from "@/components/SummerTraining2k24/CommunityPartners";
import Enroll from "@/components/SummerTraining2k24/Enroll";
import SummerCardGrid from "@/components/SummerTraining2k24/SummerCardGrid";
import SummerHero from "@/components/SummerTraining2k24/SummerHero";
import React from "react";

const SummerTraining = () => {
  return (
    <section className="mt-8">
      <SummerHero />
      <SummerCardGrid />
      <Enroll />
      <Ambassador />
      <CommunityPartners />
    </section>
  );
};

export default SummerTraining;
