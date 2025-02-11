import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayOut;
