import React, { useEffect, useState } from "react";

const Quantity = ({ onQuantityChange }) => {
  let [count, setCount] = useState(1);

  useEffect(() => {
    if (onQuantityChange) {
      onQuantityChange(count);
    }
  }, [count, onQuantityChange]);

  let handleIncrease = () => {
    setCount((prevCount) => ++prevCount);
  };

  let handleDecrease = () => {
    if (count > 1) {
      setCount((prevCount) => --prevCount);
    }
  };
  return (
    <div className="flex mt-3 mb-3">
      <button
        onClick={handleDecrease}
        className="text-[20px] font-bold border border-black px-3"
      >
        -
      </button>
      <p className="text-[20px] font-semibold border  border-y-black px-6">
        {count}
      </p>
      <button
        onClick={handleIncrease}
        className="text-[20px] font-bold border border-black px-3"
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
