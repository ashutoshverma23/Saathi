import React from "react";
import Navbar from "./Components/Home/Navbar/Navbar";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Chat from "./Components/Chatbot/Chat";
import Login from './Components/LogIn/LogIn';
import Reports from './Components/Reports/Reports';
import FAQPage from './Components/FAQ/Faq';
import AboutUs from './Components/AboutUs/AboutUs';
import { createBrowserRouter, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      }
    ],
  },

]);

export default appRouter;

