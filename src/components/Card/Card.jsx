import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const { img, name, price, ratings, seller } = props.product;
  const { addToCart } = props;
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-base font-bold">{name}</h2>
          <h3 className="text-base font-semibold">Price: ${price}</h3>
          <p>
            <span className="font-semibold">Rating:</span> {ratings} star
          </p>
          <p>
            <span className="font-semibold">Manufacturer:</span> {seller}
          </p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary hover:bg-orange-400 border-0 text-white w-full"
              onClick={() => addToCart(props.product)}
            >
              Add to Cart
              <FontAwesomeIcon icon={faShoppingCart}  className="ml-2 "/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
