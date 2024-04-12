import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PackageBought } from "../App";

interface StepThreeProps {
  packageBought: PackageBought;
  setPackageBought: React.Dispatch<React.SetStateAction<PackageBought>>;
}
const StepThree: FC<StepThreeProps> = ({ packageBought, setPackageBought }) => {
  const [servicesSelected, setServicesSelected] = useState<string[]>(
    packageBought.addons.map((addon) => addon.name)
  );

  useEffect(() => {
    // update packageBought.addons when servicesSelected changes
    setPackageBought((prev) => ({
      ...prev,
      addons: servicesSelected.map((service) => ({
        name: service,
        price: services.find((item) => item.name === service)?.price || 0,
      })),
    }));
  }, [servicesSelected]);

  const services = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      price: 1,
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: 2,
    },
  ];

  return (
    <main>
      <div className="text-primary-400">
        <h1 className="mb-3 font-bold text-4xl">Pick add-ons</h1>
        <p className="mb-12 w-full text-neutral-400 text-sm">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="flex flex-col items-center gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`flex gap-4  ${
                servicesSelected.includes(service.name)
                  ? "border-primary-400 border-2"
                  : "border-primary-200"
              } p-4 border rounded-lg w-full`}
            >
              <input
                type="checkbox"
                id={service.name}
                className="border-primary-400 bg-neutral-200 checked:bg-primary-400 my-auto rounded w-4 h-4 text-primary-400"
                checked={servicesSelected.includes(service.name)}
                onChange={() => {
                  setServicesSelected((prev) =>
                    prev.includes(service.name)
                      ? prev.filter((item) => item !== service.name)
                      : [...prev, service.name]
                  );
                }}
              />
              <label htmlFor={service.name}>
                <h2 className="font-semibold">{service.name}</h2>
                <p className="text-neutral-400 text-sm">
                  {service.description}
                </p>
              </label>
              <p className="my-auto ml-auto text-neutral-400 text-sm">
                ${service.price}/mo
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="right-16 -bottom-[20%] md:bottom-4 left-16 absolute flex justify-center items-center">
        <Link to={"/two"} className="back">
          Go Back
        </Link>
        <Link to={"/four"} className="next">
          Next Step
        </Link>
      </div>
    </main>
  );
};

export default StepThree;
