import React, { useState } from "react";
import Quantity from "./Quantity";
import AddCartArea from "./AddCartArea";

const P_itemDetails = ({ item, sameCategory, onRelatedItemClick }) => {
  let [showCart, setShowCart] = useState(false);
  let [cartItem, setCartItem] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const relatedItems = sameCategory.filter(
    (relatedItem) =>
      relatedItem.category === item.category && relatedItem.id !== item.id
  );


  let handleAddToCart = () => {
    setCartItem((prevItem) => [
      ...prevItem,
      {
        ...item,
        quantity: selectedQuantity,
        totalPrice: selectedQuantity * item.price,
      },
    ]);
    setShowCart(true);
  };

  let handleColseCart = () => {
    setShowCart(false);
  };

  return (
    <div className="w-full h-screen relative">
      <div className="flex gap-5 items-center justify-center mt-5 mb-8">
        <img className="w-[40%] h-[400px]" src={item.img} alt={item.name} />
        <div className="w-[60%] p-2">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p>{item.details}</p>
          <h3 className="text-md text-gray-700">${item.price}</h3>
          <Quantity onQuantityChange={(quantity) => setSelectedQuantity(quantity)} />

          <h6
            className={`text-sm ${
              item.stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {item.stock > 0 ? `In Stock: ${item.stock}` : "Out of Stock"}
          </h6>
          <button
            onClick={handleAddToCart}
            className="text-[20px] font-semibold rounded-md hover:text-white border bg-teal-300 hover:bg-teal-600 px-3 py-1 mt-10"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div>
        {relatedItems.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {relatedItems.map((relatedItem) => (
              <div
                key={relatedItem.id}
                className="w-[280px] h-[350px] border border-black rounded-md"
                onClick={() => onRelatedItemClick(relatedItem)}
              >
                <img
                  className="w-full h-[70%] object-cover"
                  src={relatedItem.img || "https://via.placeholder.com/300"}
                  alt={relatedItem.name}
                />
                <div className="p-2">
                  <h2 className="text-lg font-bold">{relatedItem.name}</h2>
                  <h3 className="text-md text-gray-700">
                    ${relatedItem.price}
                  </h3>
                  <h6
                    className={`text-sm ${
                      relatedItem.stock > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {relatedItem.stock > 0
                      ? `In Stock: ${relatedItem.stock}`
                      : "Out of Stock"}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* ======================================= cart area ==================================== */}
      <div className="absolute top-0 right-0">
        {showCart && (
          <div>
            <div className="w-[400px] bg-black text-white p-5">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[24px] font-semibold">
                  Your Products Cart
                </h2>
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
              <div>
                {cartItem.map((addItem) => (
                  <div className="text-white">
                    <h3>{addItem.name}</h3>
                    <p>{addItem.quantity}</p>
                    <h4>
                      ${(addItem.quantity * addItem.totalPrice).toFixed(2)}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default P_itemDetails;
