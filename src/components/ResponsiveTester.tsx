"use client";
import React, { useEffect, useState } from "react";

const ResponsiveTester = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 text-white opacity-25">
      {screenWidth}
    </div>
  );
};

export default ResponsiveTester;

// TODO: delete this component before production
