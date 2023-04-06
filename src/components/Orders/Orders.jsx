import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((pd) => pd.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div className="md:grid md:grid-cols-10 md:mx-10 md:mt-16">
      <div className="md:col-span-6 mx-auto mt-16 p-10">
        <div className="">
          {cart.map((product) => (
            <ReviewItem
              key={product.id}
              product={product}
              handleRemoveFromCart={handleRemoveFromCart}
            ></ReviewItem>
          ))}
        </div>
      </div>

      {/* cart Section */}

      <div className="md:col-span-4 w-full">
        <div className="border-b-2 border-black">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
