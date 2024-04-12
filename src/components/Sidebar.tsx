import { FC } from "react";
import { NavLink } from "react-router-dom";
import StepTab from "./StepTab";

type Step = {
  step: string;
  title: string;
};
interface SidebarProps {
  steps: Step[];
}
const Sidebar: FC<SidebarProps> = ({ steps }) => {
  return (
    <aside className="md:bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-[url('/assets/images/bg-sidebar-mobile.svg')] bg-cover h-[200px] md:h-auto text-neutral-100">
      <ul className="flex md:flex-col justify-center md:justify-start items-center md:gap-6 mx-auto py-6 md:py-8 w-1/3 md:w-full md:h-full">
        {steps.map((step, id) => (
          <li key={step.step} className="w-[80%]">
            <NavLink
              to={`/${step.step === "one" ? "" : step.step}`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active done" : ""
              }
            >
              <StepTab number={id + 1} title={step.title} />
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
// public/assets/images/bg-sidebar-mobile.svg
