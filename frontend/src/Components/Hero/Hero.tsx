import React from "react";
import hero from "./hero2.jpg";
import { Link } from "react-router-dom";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section id="hero">
      <div className="container mx-auto flex flex-col items-center p-8 space-y-12">
        <div className="mx-auto">
          <img
            src={hero}
            alt="Hero Image"
            className="w-full max-w-4xl h-auto aspect-[16/6] object-cover rounded-3xl shadow-xl"
          />
        </div>
        <div className="flex flex-col space-y-6 lg:space-y-10 items-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center text-gray-900 tracking-tight leading-tight">
            Financial Data, Unfiltered and Real.
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-2xl">
            Navigate through essential financial documents, without the
            distractions of sensational headlines and fake news.
          </p>
          <div className="flex justify-center">
            <Link
              to="/search"
              className="px-8 py-4 text-xl font-semibold text-white bg-lightGreen rounded-full shadow-lg hover:bg-darkGreen transform hover:scale-105 transition-all duration-300 ease-out"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
