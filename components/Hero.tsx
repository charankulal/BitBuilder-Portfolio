import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";
import { FaLocationArrow } from "react-icons/fa6";
import { Vortex } from "./ui/Vortex";

const Hero = () => {
    return (
        <div className="pb-20 " id="home">
            <div>
                <Spotlight
                    className="-top-40 -left-10
            md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
            </div>
            <div>
                <Spotlight
                    className="top-10 left-full h-[80vh]
                w-[50vw]"
                    fill="purple"
                />
            </div>
            <div>
                <Spotlight
                    className="top-28 left-80
            h-[80vh] w-[50vw]"
                    fill="blue"
                />
            </div>
            <Vortex
                backgroundColor="black">
                <div className="h-screen w-full dark:bg-transparent bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]
            flex items-center justify-center absolute top-0">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center
            dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
                </div>
                <div className="flex justify-center relative my-40 z-10">
                    <div className="max-w-[89w] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                        <h2 className="uppercase tracking-widest text-xs text-center
                    text-blue-100 max-w-80">
                            Dynamic Web magic with next.js
                        </h2>
                        <TextGenerateEffect
                            className=" text-center text-[40px] md:text-5xl lg:text-6xl"
                            words="Transforming Concepts into Seamless User Experiences" />
                        <p
                            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl  "
                        >
                            Hii, I&apos;m Charan, a Software Developer based in India.
                        </p>
                        <a href="#projects">
                            <ShimmerButton
                                title="Show my work" icon={<FaLocationArrow />} position={"right"} otherClasses="mr-4" />
                        </a>
                    </div>
                </div>
            </Vortex>
        </div>
    );
};

export default Hero;
