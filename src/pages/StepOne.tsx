import { FC } from "react";
import { Link } from "react-router-dom";
import { PackageBought } from "../App";
interface StepOneProps {
  packageBought: PackageBought;
  setPackageBought: React.Dispatch<React.SetStateAction<PackageBought>>;
}
const StepOne: FC<StepOneProps> = ({ packageBought, setPackageBought }) => {
  return (
    <main>
      <div className="">
        <h1 className="mb-3 font-bold text-4xl text-primary-400">
          Personal info
        </h1>
        <p className="mb-6 w-full text-neutral-400 text-sm">
          Please provide your name, email address, and phone number.
        </p>
        <form className="mb-8">
          <label className="block py-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="border-neutral-300 mb-4 px-4 py-2 border rounded-md w-full"
            placeholder="e.g. Stephen King"
            id="name"
            value={packageBought.personalInfo.name}
            onChange={(e) => {
              setPackageBought((prev) => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, name: e.target.value },
              }));
            }}
          />
          <label className="block py-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            className="border-neutral-300 mb-4 px-4 py-2 border rounded-md w-full"
            placeholder="e.g. stephenking@lorem.com"
            id="email"
            value={packageBought.personalInfo.email}
            onChange={(e) => {
              setPackageBought((prev) => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, email: e.target.value },
              }));
            }}
          />
          <label className="block py-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            className="border-neutral-300 mb-4 px-4 py-2 border rounded-md w-full"
            placeholder="e.g. +1 234 567 890"
            id="phone"
            value={packageBought.personalInfo.phone}
            onChange={(e) => {
              setPackageBought((prev) => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, phone: e.target.value },
              }));
            }}
          />
        </form>
      </div>
      <Link
        to={"/two"}
        className="right-16 -bottom-[20%] md:bottom-4 absolute next"
      >
        Next Step
      </Link>
    </main>
  );
};

export default StepOne;
