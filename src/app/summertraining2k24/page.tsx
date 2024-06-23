import Ambassador from "@/components/SummerTraining2k24/Ambassador";
import CommunityPartners from "@/components/SummerTraining2k24/CommunityPartners";
import SummerCardGrid from "@/components/SummerTraining2k24/SummerCardGrid";
import SummerHero from "@/components/SummerTraining2k24/SummerHero";
import React from "react";

const SummerTraining = () => {
  return (
    <section className="mt-8">
      <SummerHero />
      <SummerCardGrid />
      <Ambassador />
      <CommunityPartners />
    </section>
  );
};

export default SummerTraining;
