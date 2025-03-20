import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import BlurText from "./ui/BlurText";

import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />{" "}
      <nav
        className={`fixed top-0 left-0 w-full h-16 px-5 flex items-center justify-between text-xl z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-opacity-50 backdrop-blur-lg shadow-md" // Glass effect when scrolled
            : "bg-transparent"
        }`}
      >
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
            className="cursor-pointer text-gray-300  hover:text-green-400"
          >
            Schemes
          </Link>
          <Link
            to={"/aboutus"}
            className="cursor-pointer text-gray-300  hover:text-green-400"
          >
            About Us
          </Link>
          <Link
            to={"/dashboard"}
            className="cursor-pointer text-gray-300  hover:text-green-400"
          >
            Dashboard
          </Link>
        </div>

        {/* Button on the right */}

        <SignedOut>
          <button
            type="button"
            className="text-orange bg-green-400 text-black hover:bg-green-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5"
            onClick={() => {
              setShowSignIn(true);
              setIsOpen(false);
            }}
          >
            Log In
          </button>
        </SignedOut>
        <SignedIn>
          <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
        </SignedIn>
      </nav>
      {showSignIn && (
        <div
          className="fixed flex inset-0 items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOverlayClick}
        >
          <SignIn signUpForceRedirectUrl="/" fallbackRedirectUrl="/" />
        </div>
      )}
      <hr className="opacity-20" />
    </>
  );
};

export default Navbar;
