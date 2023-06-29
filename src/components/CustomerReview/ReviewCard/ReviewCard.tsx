import { IReview } from "../../../types/types";

const ReviewCard = ({ name, company, review, rating, profile }: IReview) => {
  return (
    <div className="py-9 px-12 rounded-ten bg-white shadow-review-shadow border-[0.5px] border-review-border">
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <div>
            <img
              src={profile}
              alt={name}
              className="w-[4.375rem] h-[4.375rem]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-inter font-bold">{name}</span>
            <span className="text-sm font-poppins">{company}</span>
            <div className="flex gap-2">
              {new Array(rating).fill(null).map((_, index) => (
                <img
                  src={"/images/star.svg"}
                  alt="star"
                  key={index}
                  width={20}
                  height={20}
                />
              ))}
            </div>
          </div>
        </div>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
