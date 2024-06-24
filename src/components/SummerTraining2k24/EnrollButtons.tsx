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

const EnrollButtons = ({ link, title }: { link: string; title: string }) => {
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

            {title === "Team Up" && (
              <div className="text-zinc-400">
                <h1 className="font-medium text-base-lime-green">
                  Monthly Payment Plan:
                </h1>
                <div>
                  {/* <span className="font-bold">Original Monthly Fee:</span> Rs
                  2,500 per member <br />{" "} */}
                  <span className="font-semibold">Per member:</span>{" "}
                  <span className="ml-2 text-base-lime-green">Rs 2,000</span>{" "}
                  <span className="ml-2 line-through">Rs. 2500</span>
                  <br /> <span className="font-semibold">For Team:</span>{" "}
                  <span className="ml-2 text-base-lime-green">Rs 6,000</span>{" "}
                  {`(Rs 2,000 x 3)`}
                </div>

                <h1 className="mt-5 font-medium text-base-lime-green">
                  Full Payment Plan:
                </h1>

                <div>
                  {/* <span className="font-semibold">Original Full Payment:</span> Rs
                  7,500 per member <br />{" "} */}
                  <span className="font-semibold">Per Member:</span>{" "}
                  <span className="ml-2 text-base-lime-green">Rs 6,000</span>{" "}
                  <span className="ml-2 line-through">Rs. 7500</span>
                  <br /> <span className="font-semibold">For Team:</span>{" "}
                  <span className="ml-2 text-base-lime-green">Rs 18,000</span>{" "}
                  {`(Rs 6,000 x 3)`}
                </div>
              </div>
            )}

            {title === "Solo" && (
              <div className="text-zinc-400">
                <div className="text-base-limegreen">
                  <span className="font-bold ">Monthly Payment Plan: </span>
                  <span className="ml-2 text-base-lime-green">Rs 2,500</span>
                </div>
                {/* <div> */}
                {/* Rs 2,500
                  <br /> */}
                {/* <br />
                  <span className="font-bold">Discount Options:</span>
                  <br />{" "}
                  <span className="font-bold">
                    Community Code Discount:
                  </span>{" "}
                  20% off {`(Rs 2,000 per month)`} <br />{" "}
                  <span className="font-bold">Early Bird Discount:</span> 20%
                  off {`(Rs 2,000 per month)`} <br />{" "}
                  <span className="font-bold">Team Member Code Discount:</span>{" "}
                  25% off {`(Rs 1,875 per month)`} <br />{" "}
                  <span className="font-bold">Ambassadors Code Discount:</span>{" "}
                  15% off {`(Rs 2,125 per month)`} <br />{" "}
                  <span className="font-bold">Note:</span> Only one discount
                  will apply at a time. <br />{" "} */}
                {/* </div> */}

                <div className="text-base-limegreen mt-2">
                  <span className="font-bold">Full Payment Plan: </span>
                  <span className="ml-2  text-base-lime-green">
                    Rs 6,000{" "}
                  </span>{" "}
                  <span className="ml-2 line-through">Rs. 7500</span>
                </div>

                {/* <div>
                  <span className="font-bold">Original Full Payment:</span> Rs
                  7,500 per member <br /> <br />{" "}
                  <span className="font-bold">Note:</span> No additional
                  discount codes apply to the full payment plan.
                </div> */}
              </div>
            )}

            <div className="mt-5 flex justify-between">
              <div className=" mt-2 text-zinc-400">
                Discount Codes applicable if any
              </div>

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
