import "./App.css";
import Subscription from "./components/Subscription/Subscription";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Ending from "./components/Ending/Ending";
import CustomerReview from "./components/CustomerReview/CustomerReview";
import Hero from "./components/Hero/Hero";

function App() {
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
