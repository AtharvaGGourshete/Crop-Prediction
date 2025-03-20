import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Website Name */}
        <h1 className="text-2xl font-semibold text-white">KrishiNiti</h1>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm mt-4 md:mt-0">
          <Link to="/products" className="hover:text-[#287050] transition">
            Products
          </Link>
          <Link to="/schemes" className="hover:text-[#287050] transition">
            Schemes
          </Link>
          <Link to="/dashboard" className="hover:text-[#287050] transition">
            Dashboard
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs mt-4 md:mt-0 opacity-75">
          © {new Date().getFullYear()} KrishiNiti. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
