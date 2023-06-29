import CustomerReview from "../components/CustomerReview/CustomerReview";
import Ending from "../components/Ending/Ending";
import Features from "../components/Features/Features";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Subscription from "../components/Subscription/Subscription";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
