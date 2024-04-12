import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { PackageBought } from "../App";
import { Switcher } from "../components";

interface StepTwoProps {
  packageBought: PackageBought;
  setPackageBought: React.Dispatch<React.SetStateAction<PackageBought>>;
}
const StepTwo: FC<StepTwoProps> = ({ packageBought, setPackageBought }) => {
  type Time = "monthly" | "yearly";
  const [time, setTime] = useState<Time>("monthly");

  const plans = [
    {
      name: "Arcade",
      price: 9,
      icon: "icon-arcade.svg",
      promo: 2,
    },
    {
      name: "Advanced",
      price: 12,
      icon: "icon-advanced.svg",
      promo: 2,
    },
    {
      name: "Pro",
      price: 15,
      icon: "icon-pro.svg",
      promo: 2,
    },
  ];
  return (
    <main>
      <div className="text-primary-400">
        <h1 className="mb-3 font-bold text-4xl text-primary-400">
          Select your plan
        </h1>
        <p className="mb-12 w-full text-neutral-400 text-sm">
          You have the option of monthly or yearly billing.
        </p>
        <div className="flex md:flex-row flex-col gap-2 mb-6">
          {plans.map((plan) => {
            return (
              <div
                key={plan.name}
                className={`flex md:flex-col items-center md:items-start gap-6 border-[2px] ${
                  packageBought.plan.name === plan.name
                    ? "border-primary-400 border-3"
                    : "border-neutral-300"
                } p-4 rounded-lg md:w-[150px]`}
                onClick={() => {
                  setPackageBought((prev) => ({
                    ...prev,
                    plan: {
                      ...prev.plan,
                      name: plan.name,
                      price: plan.price,
                      promo: time === "yearly" ? 2 : 0,
                      time,
                    },
                  }));
                }}
              >
                <img src={`assets/images/${plan.icon}`} alt="" />
                <div>
                  <h2 className="font-semibold">{plan.name}</h2>
                  <p className="text-neutral-400 text-sm">${plan.price}/mo</p>
                  {packageBought.plan.time === "yearly" && (
                    <p className="text-sm">{plan.promo} months free</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-neutral-200 md:mb-8 p-4 rounded-md text-center">
          <div className="flex justify-center items-center gap-3">
            <p
              onClick={() => {
                setTime("monthly");
                setPackageBought((prev) => ({
                  ...prev,
                  plan: {
                    ...prev.plan,
                    time: "monthly",
                    promo: 0,
                  },
                }));
              }}
              className="cursor-pointer"
            >
              Monthly{" "}
            </p>
            <span>
              <Switcher
                time={packageBought.plan.time}
                setPackageBought={setPackageBought}
              />
            </span>{" "}
            <p
              onClick={() => {
                setTime("yearly");
                setPackageBought((prev) => ({
                  ...prev,
                  plan: {
                    ...prev.plan,
                    time: "yearly",
                    promo: 2,
                  },
                }));
              }}
              className="text-neutral-400 cursor-pointer"
            >
              Yearly
            </p>
          </div>
        </div>
      </div>
      <div className="right-16 -bottom-[20%] md:bottom-4 left-16 z-50 absolute flex items-center-justify-center">
        <Link to={"/"} className="back">
          Go Back
        </Link>
        <Link to={"/three"} className="next">
          Next Step
        </Link>
      </div>
    </main>
  );
};

export default StepTwo;
