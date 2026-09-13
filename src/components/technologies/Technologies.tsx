import React from "react";
import StackSidebar from "./StackSidebar";
import TechnologyCard from "./TechnologyCard";

const Technologies = () => {
  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          {/* {technologies.map((technology) => (
            <TechnologyCard key={technology.id} technology={technology} />
          ))} */}
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
        </div>

        <div className="lg:col-span-1">
          <StackSidebar />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
