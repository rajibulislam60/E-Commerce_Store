import React from "react";
import { P_item } from "../components/P_item";
import Bannar from "../components/Bannar";
import Footer from "../components/Footer";

const All = () => {
  return (
    <div className="container">
      <Bannar />
      <P_item/>
      <Footer/>
    </div>
  );
};

export default All;
