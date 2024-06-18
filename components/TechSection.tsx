import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const TechSection = () => {
  return (
    <div className="py-10" id="stacks">
      <h1 className="heading pb-10">A small selection of {' '}

        <span className="text-purple">Tech Stacks</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>
      </div>
    </div>
  );
};

export default TechSection;
