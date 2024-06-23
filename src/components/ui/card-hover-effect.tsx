"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "./dialog";
import { Button } from "./button";
import Link from "next/link";

export const HoverEffect = ({
  items,
  className,
  cardContainerClassName,
  cardTitleClassName,
  cardDescriptionClassName,
  cardImgContainerClassName,
}: {
  items: {
    img?: string | StaticImageData;
    title: string;
    description: string;
    detail?: string;
  }[];
  className?: string;
  cardContainerClassName?: string;
  cardTitleClassName?: string;
  cardDescriptionClassName?: string;
  cardImgContainerClassName?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(-1);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10  md:grid-cols-2  lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="group relative  block h-full w-full cursor-pointer p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-base-lime-green"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            className={cn(
              " bg-background px-4 pb-2 pt-4",
              cardContainerClassName,
            )}
          >
            {!!item.img && (
              <CardImg className={cardImgContainerClassName}>
                <Image
                  src={item.img}
                  alt={`Image for ${item.title}`}
                  className="h-full w-full object-contain object-center"
                />
              </CardImg>
            )}
            <CardTitle className={cardTitleClassName}>{item.title}</CardTitle>
            <CardDescription className={cardDescriptionClassName}>
              {item.description}
            </CardDescription>

            {!!item.detail && (
              <div className=" mt-4 flex justify-end self-end">
                <Button
                  className="bottom-4 right-4 mr-0 rounded-[10px] bg-base-lime-green px-6 text-base-blue hover:bg-base-lime-green/80"
                  onClick={() => {
                    setPopupOpen(!popupOpen);
                    setSelectedItemIndex(idx);
                  }}
                >
                  Details
                </Button>

                {!!popupOpen && (
                  <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
                    <DialogContent className="w-[95%] rounded-lg border-base-lime-green md:w-full">
                      <DialogTitle className="text-xl text-base-lime-green">
                        Details for{" "}
                        {items[selectedItemIndex]?.title || "Selected Item"}
                      </DialogTitle>

                      <p className="text-zinc-400">
                        {items[selectedItemIndex]?.detail || "Detail"}
                      </p>

                      <div className="mt-2 flex items-end justify-between">
                        <Link href={"/"}>
                          <Button className="rounded-[12px] bg-base-lime-green px-6 text-base-blue hover:bg-base-lime-green/90 lg:px-8">
                            Enroll Solo
                          </Button>
                        </Link>

                        <Link href={"/"}>
                          <Button className="rounded-[12px] bg-base-lime-green px-6 text-base-blue hover:bg-base-lime-green/90 lg:px-8">
                            Enroll Team
                          </Button>
                        </Link>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-white/[0.4] bg-slate-900 p-4",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("mt-4 font-bold tracking-wide text-zinc-100", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-sm leading-relaxed tracking-wide text-zinc-400",
        className,
      )}
    >
      {children}
    </p>
  );
};

export const CardImg = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("m-4 mx-auto h-40 w-full", className)}>{children}</div>
  );
};
