import React, { useState } from "react";
import Aurora from "@/components/ui/Aurora";
import Particles from "@/components/ui/Particles";
import SplitText from "@/components/ui/SplitText/SplitText";
import {
  BadgeDollarSign,
  icons,
  Landmark,
  Languages,
  LayoutDashboard,
} from "lucide-react";
import { BrainCircuit, CloudDrizzle } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <BrainCircuit />,
    text: "AI-Powered Crop Recommendation",
    description:
      "Suggests the best crops based on soil type, weather conditions, and market demand.",
  },
  {
    icon: <CloudDrizzle />,
    text: "Real-Time Weather & Climate Insights",
    description:
      "Provides live weather updates and forecasts to help farmers plan ahead.",
  },
  {
    icon: <BadgeDollarSign />,
    text: "Market Demand & Price Prediction",
    description:
      "Analyzes market trends and predicts crop prices for better profitability.",
  },
  {
    icon: <Landmark />,
    text: "Government Schemes & Subsidy Integration",
    description:
      "Provides information on relevant agricultural schemes, subsidies, and financial aid.",
  },
  {
    icon: <LayoutDashboard />,
    text: "Personalized Farming Dashboard",
    description:
      "Displays AI-driven recommendations, historical data, alerts, and performance tracking.",
  },
  {
    icon: <Languages />,
    text: "Multi-Language Support for Farmers",
    description:
      "Ensures accessibility by offering information and insights in regional languages.",
  },
];

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=''>
        <Aurora
          colorStops={["#287050", "#287050", "#287050"]}
          blend={1}
          amplitude={2.0}
          speed={1}
        />
        <div style={{ width: "100%", height: "500px", position: "absolute" }}>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-3 ml-20 mt-20">
            <SplitText
              text="KrishiNiti"
              className="text-8xl font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
            <span className="text-center -mt-2 text-xl text-gray-300">
              Grow Better, Harvest Smarter
            </span>
          </div>
          
          <div>
            <img
              src="./public/Logo.gif"
              className="h-96 ml-60"
              alt="KrishiNiti"
            />
          </div>
        </div>
        <div className="-mt-32 ml-72">
        <Link to={"/form"}><InteractiveHoverButton className="bg-[#287050]">Get Recommendations</InteractiveHoverButton></Link></div>
        <div className="relative mt-56 border-b border-neutral-800 min-h-[800px]">
          <div className="text-center">
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
              Services we{" "}
              <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
                provide
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                <div className="flex">
                  <div className="flex mx-6 ml-10 h-10 w-10 p-2 bg-neutral-900 text-green-400 justify-center items-center rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                    <p className="text-md p-2 mb-20 text-neutral-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
