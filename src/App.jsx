import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Schemes from "./pages/Schemes";
import Dashboard from "./pages/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
           path: "/",
           element: <LandingPage /> 
        },
        {
           path: "/aboutus",
           element: <AboutUs /> 
        },
        {
           path: "/schemes",
           element: <Schemes/> 
        },
        {
           path: "/dashboard",
           element: <Dashboard /> 
        },
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
