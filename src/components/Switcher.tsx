import { Dispatch, FC, SetStateAction } from "react";
import { PackageBought } from "../App";
type Time = "monthly" | "yearly";
interface SwitcherProps {
  time: Time;
  setPackageBought: Dispatch<SetStateAction<PackageBought>>;
}

const Switcher: FC<SwitcherProps> = ({ time, setPackageBought }) => {
  return (
    <div
      onClick={() => {
        // setTime(time === "monthly" ? "yearly" : "monthly");
        setPackageBought((prev) => ({
          ...prev,
          plan: {
            ...prev.plan,
            time: time === "monthly" ? "yearly" : "monthly",
            promo: time === "yearly" ? 2 : 0,
          },
        }));
      }}
      className={`w-10 h-5 rounded-full bg-primary-400 relative duration-200`}
    >
      <span
        className={`inline-block absolute bg-neutral-200 rounded-full h-3 aspect-square top-1/2 -translate-y-1/2  ${
          time === "monthly" ? "left-1" : "right-1"
        }`}
      ></span>
    </div>
  );
};

export default Switcher;
