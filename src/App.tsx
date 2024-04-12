import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components";
import {
  Error404,
  StepFour,
  StepOne,
  StepThree,
  StepTwo,
  ThankYou,
} from "./pages";
interface PackageBought {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  plan: {
    name: string;
    price: number;
    time: "monthly" | "yearly";
    promo: number;
  };
  addons: { name: string; price: number }[];
}
function App() {
  const [packageBought, setPackageBought] = useState<PackageBought>({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    plan: { name: "", price: 0, time: "monthly", promo: 0 },
    addons: [],
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <StepOne
              packageBought={packageBought}
              setPackageBought={setPackageBought}
            />
          ),
        },
        {
          path: "/two",
          element: (
            <StepTwo
              packageBought={packageBought}
              setPackageBought={setPackageBought}
            />
          ),
        },
        {
          path: "/three",
          element: (
            <StepThree
              packageBought={packageBought}
              setPackageBought={setPackageBought}
            />
          ),
        },
        {
          path: "/four",
          element: <StepFour packageBought={packageBought} />,
        },
        {
          path: "/done",
          element: <ThankYou />,
        },
        { path: "*", element: <Error404 /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
export type { PackageBought };
