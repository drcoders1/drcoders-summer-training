"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "../ui/dialog";
import Link from "next/link";

const EnrollButtons = ({
  details,
  link,
  title,
}: {
  details: string;
  link: string;
  title: string;
}) => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
      <div className="mt-5 flex w-full items-center justify-between">
        <Button
          className="rounded-[12px] bg-base-lime-green px-4 text-base-blue hover:bg-base-lime-green/90 lg:px-6"
          onClick={() => setOpenPopup(!openPopup)}
        >
          More Details
        </Button>

        <Link href={link}>
          <Button className="rounded-[12px] bg-base-lime-green px-6 text-base-blue hover:bg-base-lime-green/90 lg:px-8">
            Enroll Now
          </Button>
        </Link>
      </div>

      {!!openPopup && (
        <Dialog open={openPopup} onOpenChange={setOpenPopup}>
          <DialogOverlay className="bg-base-blue/90" />

          <DialogContent className="w-[95%] rounded-lg border-base-lime-green md:w-full">
            <DialogTitle className="text-xl text-base-lime-green">
              Details of {title} offer
            </DialogTitle>

            <p className="text-zinc-400">{details}</p>

            <div className="flex items-end justify-end">
              <Link href={link}>
                <Button className="rounded-[12px] bg-base-lime-green px-6 text-base-blue hover:bg-base-lime-green/90 lg:px-8">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default EnrollButtons;
