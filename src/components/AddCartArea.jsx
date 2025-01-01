import React, { useState } from "react";

const AddCartArea = ({ showCart, onClose }) => {
  

  return (
    <div>
      <div className="bg-black text-white p-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[24px] font-semibold">Your Products Cart</h2>
          <button onClick={handleColseCart} className="border px-2">
            X
          </button>
        </div>
        <div className="flex justify-between text-[18px] font-semibold my-3">
          <p>Item name</p>
          <p>Quantity</p>
          <p>Price</p>
        </div>
        <div className="w-full h-[2px] bg-white"></div>
      </div>
    </div>
  );
};

export default AddCartArea;
