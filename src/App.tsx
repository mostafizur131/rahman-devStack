import React, { Suspense } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Technologies from "./components/technologies/Technologies";
import Footer from "./components/Footer";
import type { ITechnology } from "./types/type";

const technologiesPromise = async (): Promise<ITechnology[]> => {
  const res = await fetch("/public/technology.json");
  const data = await res.json();
  return data;
};

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Suspense
        fallback={<div className="text-center text-gray-500">Loading...</div>}
      >
        <Technologies technologiesPromise={technologiesPromise()} />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
