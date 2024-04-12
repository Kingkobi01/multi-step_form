import { FC } from "react";

interface StepProps {
  number: number;
  title: string;
}
const StepTab: FC<StepProps> = ({ number, title }) => {
  return (
    <div className="flex justify-center md:justify-start items-center gap-4 w-full">
      <p className="flex justify-center items-center border rounded-full w-8 aspect-square">
        {number}
      </p>
      <div className="md:block hidden">
        <p className="text-neutral-300 text-xs uppercase">step {number}</p>
        <p className="font-semibold text-neutral-200 text-sm uppercase">
          {title}
        </p>
      </div>
    </div>
  );
};

export default StepTab;
