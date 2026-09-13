import React from "react";
const Banner = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      {" "}
      <div className="flex min-h-[600px] flex-col-reverse items-center justify-between gap-10 py-12 md:flex-row md:gap-8 lg:py-16">
        {" "}
        {/* Left Content */}{" "}
        <div className="w-full text-center md:w-1/2 md:text-left">
          {" "}
          <h1 className="text-4xl font-extrabold leading-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
            {" "}
            Build Your Ideal{" "}
            <span className="block bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              {" "}
              Development Stack{" "}
            </span>{" "}
          </h1>{" "}
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg md:mx-0">
            {" "}
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.{" "}
          </p>{" "}
          {/* Buttons */}{" "}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            {" "}
            <button
              type="button"
              className="w-full rounded-md bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:opacity-90 sm:w-auto"
            >
              {" "}
              Explore Technologies{" "}
            </button>{" "}
            <button
              type="button"
              className="w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-600 transition duration-300 hover:border-gray-400 hover:bg-gray-50 sm:w-auto"
            >
              {" "}
              Learn More{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        {/* Right Image */}{" "}
        <div className="flex w-full justify-center md:w-1/2">
          {" "}
          <img
            src="/src/assets/banner-stack.png"
            alt="Development stack illustration"
            className="h-auto w-full max-w-sm object-contain sm:max-w-md lg:max-w-lg"
          />{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Banner;
