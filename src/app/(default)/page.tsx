import Ambassador from "@/components/HomeComponents/Ambassador";
import CommunityPartners from "@/components/HomeComponents/CommunityPartners";
import Details from "@/components/HomeComponents/Details";
import Enroll from "@/components/HomeComponents/Enroll";
import SummerCardGrid from "@/components/HomeComponents/SummerCardGrid";
import SummerHero from "@/components/HomeComponents/SummerHero";
import WebOrMobile from "@/components/WebOrMobile";
import React from "react";
import ReactGA from "react-ga4";

const SummerTraining = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/summertraining2k24",
    title: "SummerTraniningPage",
  });

  return (
    <section className="mt-14 md:mt-8">
      <div className="pt-16">
        <WebOrMobile />
      </div>
      <SummerHero />
      <Details />

      <div className="invisible h-28" aria-hidden></div>
      <SummerCardGrid />

      {/* <div className="invisible h-28" aria-hidden></div> */}
      {/* <Enroll /> */}

      <div className="invisible h-28" aria-hidden></div>
      <Ambassador />

      {/* <div className="invisible h-28" aria-hidden></div> */}
      <CommunityPartners />
    </section>
  );
};

export default SummerTraining;

// Purpose of these divs are to maintain spacing so that the scroll from navbar is no more than needed
