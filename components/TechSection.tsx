/* eslint-disable @next/next/no-img-element */
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
   <img src="https://skillicons.dev/icons?i=java,py,typescript,html,css,javascript,git,github,c,cpp,bootstrap,spring,react,next,nodejs,django,flask,eclipse,maven,gradle,vscode" alt="tech" />
      </div>
    </div>
  );
};

export default TechSection;
