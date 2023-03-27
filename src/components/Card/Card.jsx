import React from "react";

const Card = (props) => {
  const {img, name, price, ratings, seller} = props.product;
  const {addToCart} = props
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-base font-bold">{name}</h2>
          <h3 className="text-base font-semibold">Price: ${price}</h3>
          <p ><span className="font-semibold">Rating:</span> {ratings} start</p>
          <p><span className="font-semibold">Manufacturer:</span> {seller}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary hover:scale-110 hover:bg-orange-400 border-0 text-white" onClick={() => addToCart(props.product)}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
