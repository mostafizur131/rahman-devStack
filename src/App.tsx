import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Technologies from "./components/technologies/Technologies";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Technologies />
      <Footer />
    </div>
  );
};

export default App;
