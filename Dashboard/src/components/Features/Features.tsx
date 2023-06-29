import { features } from "../../data/Features";
import Button from "../Button/Button";
import FeaturesCard from "./FeatureCard/FeaturesCard";

const Features = () => {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between max-w-custom mx-auto">
        <div className="grid grid-cols-2 items-start gap-x-4 gap-y-[3.37rem] w-1/2">
          {features.map((item, index) => (
            <FeaturesCard
              {...item}
              className={(index + 1) % 2 === 0 ? "mt-6" : "mt-0"}
            />
          ))}
        </div>
        <div className="w-1/2 max-w-[416px]">
          <h2 className="font-inter font-bold text-5xl">About the Course</h2>
          <p className="pt-6 font-poppins text-sm pr-10 mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unkno
          </p>
          <Button>Explore Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
