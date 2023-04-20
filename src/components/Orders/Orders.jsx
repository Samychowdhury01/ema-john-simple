import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
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

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
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
          <Cart cart={cart} handleClearCart={handleClearCart}>
            <Link to="/checkout">
            <button className="flex w-full justify-between items-center my-5 bg-yellow-500 p-4 rounded-lg text-white">
              <span className="text-lg font-semibold">Proceed Checkout</span>
              <FontAwesomeIcon
                icon={faCreditCard}
                className="text-2xl text-white"
              ></FontAwesomeIcon>
            </button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
