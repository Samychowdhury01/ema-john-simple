import React from "react";
import Cart from "../Cart/Cart";

const Orders = () => {
  return (
    <div className="md:grid md:grid-cols-12">
      {/* Products section */}

      <div className="md:col-span-9 w-full mt-16 p-10">
        <div className="grid md:grid-cols-3 gap-5">
         <h1>Order Page</h1>
        </div>
      </div>

      {/* cart Section */}

      <div className="border-b-2 border-black md:col-span-3 w-full">
        <Cart cart={[]}></Cart>
      </div>
    </div>
  );
};

export default Orders;
