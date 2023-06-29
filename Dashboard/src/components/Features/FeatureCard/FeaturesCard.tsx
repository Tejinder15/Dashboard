import { IFeatures } from "../../../types/types";
import classNames from "classnames";

interface IFeaturesCard extends IFeatures {
  className: string;
}

const FeaturesCard = ({ title, description, className }: IFeaturesCard) => {
  return (
    <div
      className={classNames(
        "p-[1.88rem] rounded-[10px] border-[0.5px] border-ghost bg-white",
        className
      )}
    >
      <p className="text-xl font-bold font-poppins whitespace-nowrap">
        {title}
      </p>
      <p className="pt-4 font-poppins text-xs">{description}</p>
    </div>
  );
};

export default FeaturesCard;
