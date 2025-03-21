import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    title: "Free",
    price: "Rs.0",
    features: ["Basic Predictions"],
  },
  {
    title: "Pro",
    price: "Rs.299",
    features: ["Better Predictions", "Offers on Next Buy"],
  },
  {
    title: "Enterprise",
    price: "Rs.699",
    features: [
      "Best Predictions",
      "Offers on Next Buy",
      "Education Loan Assistance",
    ],
  },
];

const PremiumPlans = () => {
  return (
    <div className="mt-20 px-10">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {plans.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl h-full flex flex-col justify-between">
              <div>
                <p className="text-4xl mb-8">
                  {option.title}
                  {option.title === "Pro" && (
                    <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text text-xl mb-4 ml-2">
                      (Most Popular)
                    </span>
                  )}
                  {option.title === "Enterprise" && (
                    <span className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-transparent bg-clip-text text-xl mb-4 ml-2">
                      (Gold)
                    </span>
                  )}
                </p>
                <p className="mb-8">
                  <span className="text-5xl mt-6 mr-2">{option.price}</span>
                  <span className="text-neutral-400 tracking-tight">/Month</span>
                </p>
                <ul>
                  {option.features.map((feature, index) => (
                    <li key={index} className="mt-8 flex items-center">
                      <CheckCircle2 />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 mt-5 w-full text-xl cursor-pointer shadow">
                Subscribe
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumPlans;
