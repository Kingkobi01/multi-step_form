import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  const steps = [
    {
      step: "one",
      title: "Your info",
    },
    {
      step: "two",
      title: "Select plan",
    },
    {
      step: "three",
      title: "Add-ons",
    },
    {
      step: "four",
      title: "Summary",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:bg-white md:shadow-md mx-auto mt-auto md:p-3 rounded-lg w-[100%] md:w-[760px]">
      <Sidebar steps={steps} />
      <>
        <Outlet />
      </>
    </div>
  );
}

export default Layout;
