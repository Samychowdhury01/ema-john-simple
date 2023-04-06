import React from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  return (
    <div className="review-item mb-5 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <img src={product.img} alt="" className="w-20 h-20 rounded-lg" />
        <div>
          <h3 className="text-xl tracking-wide	">{product.name}</h3>
          <h3 className="text-base">Quantity: {product.quantity}</h3>
          <h3 className="text-base">
            Price: <span className="text-orange-400">${product.price}</span>
          </h3>
          {/* <h3 className="text-base">
            Shipping:{" "}
            <span className="text-orange-400">${product.shipping}</span>
          </h3> */}
        </div>
      </div>
      <div className="bg-red-600 bg-opacity-20 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-6">
        <button onClick={() => handleRemoveFromCart(product.id)}>
          <FontAwesomeIcon
            icon={faTrashCan}
            className="text-2xl text-red-600 text-opacity-80"
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
