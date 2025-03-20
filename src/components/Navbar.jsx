import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BlurText from "./ui/BlurText";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />{" "}
      <nav className={`h-16 px-5 flex items-center justify-between text-xl z-10`}>
        {/* Logo on the left */}
        <div className={`${isOpen ? "ml-10" : null}`}>
          <Link to="/"> 
            <div className="flex items-center gap-2 ml-16">
              <img src="./public/tea.png" className="h-10" alt="KrishiNiti" />
              <BlurText
                text="KrishiNiti"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-2xl items-center"
              />
            </div>
          </Link>
        </div>

        {/* Elements in the center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-20 items-center">
          <Link
            to={"/schemes"}
            className="cursor-pointer text-gray-300 hover:text-white "
          >
            Schemes
          </Link>
          <Link
            to={"/aboutus"}
            className="cursor-pointer text-gray-300 hover:text-white "
          >
            About Us
          </Link>
          <Link
            to={"/dashboard"}
            className="cursor-pointer text-gray-300 hover:text-white "
          >
            Dashboard
          </Link>
        </div>

        {/* Button on the right */}

        <Link to="/login">
          <Button className="bg-white text-black hover:bg-[#287050] cursor-pointer">
            LogIn
          </Button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
