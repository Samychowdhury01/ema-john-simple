import React from "react";

const Cart = ({ cart }) => {
    let totalPrice = 0;
    let totalShipping = 0;


    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="sticky top-0">
      <h2 className="text-2xl text-center underline font-bold pt-10">
        Order Summary
      </h2>
      <div className="px-10 mt-8">
        <p className="mb-3">
          <span className="font-semibold">Selected Items:</span> {cart.length}
        </p>
        <p className="mb-3">
          <span className="font-semibold">Total Price:</span> ${totalPrice}
        </p>
        <p className="mb-3">
          <span className="font-semibold">Total Shipping Charge:</span> ${totalShipping}
        </p>
        <p className="mb-3">
          <span className="font-semibold">Tax:</span> ${tax.toFixed(2)}
        </p>
        <h6 className="text-xl">
          <span className="font-semibold">Grand Total</span>: ${grandTotal.toFixed(2)}
        </h6>
      </div>
    </div>
  );
};

export default Cart;
