import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Subscription from "./components/Subscription/Subscription";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Ending from "./components/Ending/Ending";
import CustomerReview from "./components/CustomerReview/CustomerReview";
import Hero from "./components/Hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-hero-bg bg-no-repeat">
        <Header />
        <div className="bg-mic-bg bg-no-repeat bg-right-center ">
          <Hero />
          <Features />
        </div>
      </div>
      <Subscription />
      <CustomerReview />
      <Ending />
    </>
  );
}

export default App;
