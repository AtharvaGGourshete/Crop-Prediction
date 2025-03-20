import React from "react";
import { schemesData } from "@/components/schemedata";
import SchemeCard from "../components/SchemeCard";

const Schemes = () => {
  return (
    <div className="min-h-screen bg-[#101010] mt-10 py-10">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">Government Schemes for Farmers</span>
      </h1>
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {schemesData.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              name={scheme.name}
              description={scheme.description}
              link={scheme.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schemes;
