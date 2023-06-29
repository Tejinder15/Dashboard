import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="pt-20 pb-32 ">
      <div className="max-w-custom mx-auto w-full flex items-center justify-between pb-32">
        <div className="w-1/2">
          <h1 className="text-5xl font-inter font-bold text-white">
            Learn how to launch a successful podcast
          </h1>
          <p className="mt-6 mb-20 font-inter text-white w-4/5">
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            ustry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s
          </p>
          <Button>Sign up Now</Button>
        </div>
        <div className="relative">
          <img
            src="/images/image2.png"
            alt="image2"
            className="relative z-10"
          />
          <div className="pr-14 absolute top-20 z-20 -left-14">
            <img
              src="/images/image1.png"
              //   className="absolute top-20 z-20 right-14"
              alt="image1"
            />
          </div>
          <img
            src="/images/dot.svg"
            className="absolute top-[4.8rem] left-10 z-0"
          />
          <img
            src="/images/voice.png"
            className="absolute -right-16"
            alt="voice"
          />
          <div className="absolute -right-24 top-36 bg-white z-20 p-3 rounded-lg transform -rotate-12 shadow-lg">
            <img src="/images/podcast.svg" alt="podcast" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
