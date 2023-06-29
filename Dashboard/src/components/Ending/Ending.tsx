import Button from "../Button/Button";
import Footer from "../Footer/Footer";

const Ending = () => {
  return (
    <section className="bg-footer-bg bg-no-repeat bg-footer-bottom bg-cover">
      <div className="max-w-custom mx-auto flex flex-col gap-16 pt-[4.25rem] pb-24 justify-center items-center">
        <div>
          <h3 className="text-center font-inter font-bold text-[2rem]">
            We have what you're looking for
          </h3>
          {/* TODO: add gradient to text */}
          <p className="pt-6 max-w-[37.25rem] mx-auto text-center font-poppins text-xs text-transparent bg-clip-text  bg-gradient-to-r from-danger-start to-danger-end">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            a
          </p>
        </div>
        <Button>Get Started Now</Button>
      </div>
      <Footer />
    </section>
  );
};

export default Ending;
