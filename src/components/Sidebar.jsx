import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-40" : "w-16"
        } bg-[#101010] text-white h-screen fixed top-0 left-0 transition-all duration-300 flex flex-col`}
      >
        {/* Toggle Button */}
        <button
          className="p-3 text-white self-end focus:outline-none mt-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Website Name */}
        <h1
          className={`text-xl font-bold text-center mt-3 transition-opacity text-green-400 ${
            isOpen ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          KrishiNiti
        </h1>

        {/* Navigation Links */}
        <ul className="mt-5 space-y-4 text-center">
          <li>
            <Link
              to="/dashboard"
              className="block px-5 py-3"
            >
              {isOpen ? "Dashboard": null}
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="block px-5 py-3"
            >
              {isOpen ? "Products": null}
            </Link>
          </li>
          <li>
            <Link
              to="/schemes"
              className="block px-5 py-3"
            >
              {isOpen ? "Schemes": null}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
