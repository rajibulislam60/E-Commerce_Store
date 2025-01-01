import React from "react";

const P_itemDetails = ({ item, sameCategory }) => {
  return (
    <div className="w-full h-screen">
      <div className="flex gap-5 items-center justify-center">
        <img className="" src={item.img} alt={item.name} />
        <div className="p-2">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p>{item.details}</p>
          <h3 className="text-md text-gray-700">${item.price}</h3>
          <h6
            className={`text-sm ${
              item.stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {item.stock > 0 ? `In Stock: ${item.stock}` : "Out of Stock"}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default P_itemDetails;
