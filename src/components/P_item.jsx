import React from "react";
import data from "../Json/JSON";

export const P_item = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-[280px] h-[350px] border border-black rounded-md"
        >
          <img
            className="w-full h-[70%] object-cover"
            src={item.img || "https://via.placeholder.com/300"}
            alt={item.name}
          />
          <div className="p-2">
            <h2 className="text-lg font-bold">{item.name}</h2>
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
      ))}
    </div>
  );
};
