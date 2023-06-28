import { ISubscription } from "../../../types/types";
import classNames from "classnames";

interface ISubscriptionCard extends ISubscription {
  isAnnualSubscription: boolean;
}

const SubscriptionCard = ({
  type,
  title,
  description,
  monthlyPrice,
  annualPrice,
  features,
  isAnnualSubscription,
}: ISubscriptionCard) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-y-6 items-start px-[1.69rem] py-[2.19rem] rounded-[10px] border-[0.5px] max-w-xs",
        {
          "bg-white text-black border-ghost": type === "basic",
          "bg-ghost text-white border-transparent": type === "premium",
        }
      )}
    >
      <div>
        <span className="text-base font-bold">{title}</span>
        <p className="pt-4 text-xs">{description}</p>
      </div>
      <div
        className={classNames("flex items-center gap-x-[1.19rem]", {
          "text-ghost": type === "basic",
        })}
      >
        <span className={"text-[2rem] font-bold"}>
          ${isAnnualSubscription ? annualPrice : monthlyPrice}
        </span>
        <span className="text-sm">/month</span>
      </div>
      <ul className="list-disc list-inside flex flex-col gap-2 font-bold text-xs">
        {features.map((feature, index) => (
          <li key={index} className="">
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={classNames(
          "px-8 py-3 bg-white text-ghost border-[0.5px] rounded-[5px] text-xs",
          {
            "border-transparent": type === "premium",
            "bg-ghost": type === "basic",
          }
        )}
      >
        Start Free Trial
      </button>
    </div>
  );
};

export default SubscriptionCard;
