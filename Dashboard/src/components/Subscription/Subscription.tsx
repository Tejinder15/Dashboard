import { useState } from "react";
import classNames from "classnames";
import { Subscriptions } from "../../data/Subscriptions";
import SubscriptionCard from "./SubscriptionCard/SubscriptionCard";

const Subscription = () => {
  const [isAnnualSubscription, setIsAnnualSubscription] = useState(false);
  return (
    <section className="pt-[4.75rem] pb-9">
      <div className="flex flex-col gap-6 justify-start items-center max-w-[455px] mx-auto">
        <h3 className="text-[2rem] font-bold">Choose your plan</h3>
        <p className="text-sm font-normal text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <div className="p-1.5 bg-white rounded-lg shadow inline-flex items-center justify-start gap-2.5">
          <button
            className={classNames(
              "text-center text-sm px-[9px] py-[3px] rounded-lg",
              { "bg-fuchsia-300 bg-opacity-40": !isAnnualSubscription }
            )}
            onClick={() => setIsAnnualSubscription(false)}
          >
            monthly
          </button>
          <button
            className={classNames(
              " text-center text-sm px-[9px] py-[3px] rounded-lg",
              { "bg-fuchsia-300 bg-opacity-40": isAnnualSubscription }
            )}
            onClick={() => setIsAnnualSubscription(true)}
          >
            yearly
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between max-w-custom mx-auto mt-14">
        {Subscriptions.map((item, index) => (
          <SubscriptionCard
            {...item}
            isAnnualSubscription={isAnnualSubscription}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Subscription;
