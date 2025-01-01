import React, { useState } from "react";
import data from "../Json/JSON";
import P_itemDetails from "./P_itemDetails";

export const P_item = () => {
  let [selectedItem, setSelectedItem] = useState();

  let handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="w-100% h-full relative mt-[50px]">
      <div className="mt-8 flex flex-wrap gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[280px] h-[350px] border border-black rounded-md"
            onClick={() => handleItemClick(item)}
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
      <div>
        {selectedItem && (
          <div className="w-full bg-white absolute top-0">
            <P_itemDetails
              item={selectedItem}
              sameCategory={data}
              onRelatedItemClick={handleItemClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};
