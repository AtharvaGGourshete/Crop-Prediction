import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-[#101010] text-white min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-green-400 mb-6">About KrishiNiti</h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          KrishiNiti is an innovative platform designed to empower farmers with **real-time government schemes**, agricultural trends, and financial support options.  
          Our goal is to bridge the gap between technology and farming, helping farmers make **informed decisions** for a **better future**.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="p-5 bg-[#1a1a1a] rounded-lg shadow-lg border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-green-400 mb-2">🌿 Our Vision</h2>
            <p className="text-gray-400">
              To **digitally revolutionize agriculture** by making **government schemes and resources easily accessible** to every farmer in India.
            </p>
          </div>

          <div className="p-5 bg-[#1a1a1a] rounded-lg shadow-lg border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-green-400 mb-2">🚀 Our Mission</h2>
            <p className="text-gray-400">
              We aim to **simplify access** to **agricultural schemes, resources, and financial aid**, enabling farmers to maximize productivity.
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-10 justify-center">
          <Link to="/schemes">
          <button className="border border-green-400 text-green-400 font-medium px-6 py-2 rounded-lg hover:bg-green-400 hover:text-black transition duration-300">
              View Schemes
            </button>
          </Link>

          <Link to="/contact">
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
