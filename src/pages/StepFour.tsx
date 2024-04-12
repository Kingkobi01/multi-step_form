import { FC } from "react";
import { Link } from "react-router-dom";
import { PackageBought } from "../App";
interface StepFourProps {
  packageBought: PackageBought;
}
const StepFour: FC<StepFourProps> = ({ packageBought }) => {
  const totalPricePerYear = () => {
    const plan = packageBought.plan.price;
    let totalPerMonth = plan;

    packageBought.addons.forEach((addon) => (totalPerMonth += addon.price));

    return packageBought.plan.time === "yearly"
      ? totalPerMonth * 10
      : totalPerMonth * 12;
  };
  totalPricePerYear();
  return (
    <main>
      <div>
        <h1 className="mb-3 font-bold text-4xl">Finishing up</h1>
        <p className="mb-12 w-full text-neutral-400 text-sm">
          Double-check everything looks OK before confirming.
        </p>
        {packageBought.plan.name && packageBought.addons.length > 0 ? (
          <>
            <div className="bg-neutral-300 px-4 py-2 rounded-md divide-y-2 divide-gray-400 text-sm">
              <div className="flex justify-between items-center py-2 text-gray-500">
                <div className="">
                  <p className="capitalize">{`${packageBought.plan.name} (${packageBought.plan.time})`}</p>
                  <Link to={"/two"} className="underline cursor-pointer">
                    Change
                  </Link>
                </div>
                <p className="font-semibold text-primary-500">
                  ${packageBought.plan.price}/mo
                </p>
              </div>
              <div className="space-y-2">
                {packageBought.addons.map((addon, idx) => (
                  <div
                    className="flex justify-between items-center py-1"
                    key={idx}
                  >
                    <p className="text-gray-500">{addon.name}</p>
                    <p className="font-semibold text-primary-400">
                      +${addon.price}/mo
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 pt-4 text-sm">
              <p className="text-gray-500">Total (per month/year)</p>
              <p className="font-semibold text-primary-400">
                ${totalPricePerYear()}/year
              </p>
            </div>
          </>
        ) : (
          <p className="text-center text-neutral-400">
            You didn't choose any plan or addon...
          </p>
        )}
      </div>
      <div className="right-16 -bottom-[20%] md:bottom-4 left-16 z-50 absolute flex justify-center items-center">
        <Link to={"/three"} className="back">
          Go Back
        </Link>
        {packageBought.plan.name && packageBought.addons.length > 0 ? (
          <Link to={"/done"} className="next">
            Next Step
          </Link>
        ) : (
          <p className="block bg-neutral-200 ml-auto px-4 py-2 rounded-md w-fit text-neutral-400 cursor-not-allowed">
            {" "}
            Next Step
          </p>
        )}
      </div>
    </main>
  );
};

export default StepFour;

// <!-- Step 4 start -->

//
//
// <!-- Dynamically add subscription and add-on selections here -->

//

// Go Back
// Confirm

// <!-- Step 4 end -->
