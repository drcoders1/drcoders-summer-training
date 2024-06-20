import React from "react";
import MaxContainer from "../MaxContainer";

const Offerings = () => {
  return (
    <>
      <h1 className="mb-10 mt-56 text-center text-4xl font-semibold uppercase text-white">
        What We are Offering?
      </h1>

      <MaxContainer className="flex flex-col gap-5">
        <div className="flex items-center justify-center gap-9">
          <p className="inline rounded-full bg-base-yellow px-14 py-4 text-black shadow-md">
            Lorem ipsum dolor
          </p>

          <p className="inline rounded-full bg-base-orange px-14 py-4 text-black shadow-md">
            Lorem ipsum dolor
          </p>
          <p className="inline rounded-full bg-base-yellow px-14 py-4 text-black shadow-md">
            Lorem ipsum dolor
          </p>
        </div>

        <div className="flex items-center justify-center gap-9">
          <p className="inline rounded-full bg-base-purple px-14 py-4 text-black shadow-md">
            Lorem ipsum dolor
          </p>

          <p className="inline rounded-full bg-base-light-blue px-14 py-4 text-black shadow-md">
            Lorem ipsum dolor
          </p>
          <p className="inline rounded-full bg-base-purple px-14 py-4 text-black shadow-md">
            Lorem ipsum dolor
          </p>
        </div>
      </MaxContainer>
    </>
  );
};

export default Offerings;
