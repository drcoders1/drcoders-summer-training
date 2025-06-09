"use client";
import { useSwitchCourseStore } from "@/stores/SwitchCourse";
import React from "react";

const WebOrMobile = () => {
  const currentCourse = useSwitchCourseStore((state) => state.course);
  return (
    <>
      {currentCourse === "web" && (
        <div className="bg-teal-500 text-xl font-semibold text-red-500">
          Web
        </div>
      )}
      {currentCourse === "mobile" && (
        <div className="bg-red-500/70 text-xl font-semibold text-teal-500">
          Mobile
        </div>
      )}
    </>
  );
};

export default WebOrMobile;
