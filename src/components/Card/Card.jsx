import React from "react";

const Card = ({category, id, img, name, price, ratings, seller}) => {
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
          <h2 className="card-title">{name}</h2>
          <h3 className="text-xl font-semibold">Price: ${price}</h3>
          <p><span className="font-semibold">Rating:</span> {ratings} start</p>
          <p><span className="font-semibold">Manufacturer:</span> {seller}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
