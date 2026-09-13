import { Suspense } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Technologies from "./components/technologies/Technologies";
import Footer from "./components/Footer";
import type { ITechnology } from "./types/type";
import { Bounce, ToastContainer } from "react-toastify";
import Loading from "./components/Loading";

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
      <Suspense fallback={<Loading />}>
        <Technologies technologiesPromise={technologiesPromise()} />
      </Suspense>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default App;
