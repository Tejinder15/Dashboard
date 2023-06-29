import { reviews } from "../../data/reviews";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ReviewCard from "./ReviewCard/ReviewCard";
import { useState } from "react";
import classNames from "classnames";

const CustomerReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2.5,
      spacing: 25,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section>
      <div className="border-black w-[85%] ml-auto py-14">
        <div className="max-w-[28.875rem]">
          <h2 className="font-bold font-inter text-[2.5rem]">
            Review from customers
          </h2>
          <p className="pt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
          </p>
        </div>
        <div className="relative py-8">
          <div className="keen-slider" ref={sliderRef}>
            {reviews.map((item, index) => (
              <div
                className={classNames("keen-slider__slide", {
                  "opacity-100 shadow-review-shadow": currentSlide === index,
                  "opacity-60 shadow-none": currentSlide !== index,
                })}
              >
                <ReviewCard key={index} {...item} />
              </div>
            ))}
          </div>
          {loaded && instanceRef.current && (
            <>
              <button
                className={classNames(
                  "p-4 w-10 h-10 block  rounded-full bg-arrow-btn absolute top-1/2 transform -translate-y-1/5 left-4",
                  { invisible: currentSlide === 0, visible: currentSlide !== 0 }
                )}
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              >
                <Arrow left disabled={currentSlide === 0} />
              </button>

              <button
                className={classNames(
                  "p-4 w-10 h-10 block rounded-full bg-arrow-btn absolute top-1/2 transform -translate-y-1/5 left-auto right-8",
                  {
                    invisible:
                      currentSlide ===
                      instanceRef.current.track.details.slides.length - 1,
                    visible:
                      currentSlide !==
                      instanceRef.current.track.details.slides.length - 1,
                  }
                )}
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              >
                <Arrow
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </button>
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="flex py-2.5 justify-center">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={classNames(
                    "border-none w-2.5 h-2.5 rounded-full my-0 mx-6 cursor-pointer focus:outline-none",
                    {
                      "bg-ghost": currentSlide === idx,
                      "bg-gray-200": currentSlide !== idx,
                    }
                  )}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

function Arrow(props: { disabled: boolean; left?: boolean }) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default CustomerReview;
