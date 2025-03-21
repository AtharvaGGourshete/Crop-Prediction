import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Schemes from "./pages/Schemes";
import Dashboard from "./pages/Dashboard";
import Marketplace from "./pages/Marketplace";
import PremiumPlans from "./pages/PremiumPlans";
import Products from "./pages/Products";
import Form from "./pages/Form";

function App() {
  

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/schemes",
          element: <Schemes />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/form",
          element: <Form />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/marketplace",
          element: <Marketplace />,
        },
        {
          path: "/premiumplans",
          element: <PremiumPlans />,
        },
        {
          path: "/products",
          element: <Products />,
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
