import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cart = ({ cart, children, handleClearCart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;

  for (const product of cart) {
    product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div>
      <h2 className="text-2xl text-center underline font-bold pt-10">
        Order Summary
      </h2>
      <div className="px-10 mt-8">
        <p className="mb-3">
          <span className="font-semibold">Selected Items:</span> {quantity}
        </p>
        <p className="mb-3">
          <span className="font-semibold">Total Price:</span> ${totalPrice}
        </p>
        <p className="mb-3">
          <span className="font-semibold">Total Shipping Charge:</span> $
          {totalShipping}
        </p>
        <p className="mb-3">
          <span className="font-semibold">Tax:</span> ${tax.toFixed(2)}
        </p>
        <h6 className="text-xl mb-3">
          <span className="font-semibold">Grand Total</span>: $
          {grandTotal.toFixed(2)}
        </h6>

        <button
          onClick={handleClearCart}
          className="flex w-full justify-between items-center my-5 bg-red-600 p-4 rounded-lg text-white"
        >
          <span className="text-lg font-semibold">Clear Cart</span>
          <FontAwesomeIcon
            icon={faTrashCan}
            className="text-2xl text-white"
          ></FontAwesomeIcon>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
