import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const showAll = () => {
    setLoad(true);
  };

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  console.log(cart);
  return (
    <div className="md:grid md:grid-cols-12">
      <div className="md:col-span-9 w-full mt-16 p-10">
        <div className="grid md:grid-cols-3 gap-5">
          {products.slice(0, load ? 75 : 12).map((product) => (
            <Card
              product={product}
              key={product.id}
              addToCart={addToCart}
            ></Card>
          ))}
        </div>
        {!load && (
          <span onClick={showAll}>
            <Button></Button>
          </span>
        )}
      </div>

      <div className="bg-secondary bg-opacity-50 md:col-span-3 w-full">
        <h2 className="text-2xl text-center underline font-bold">Order Summary</h2>
        <div className="px-10 mt-8">
          <p><span className="font-semibold">Selected Items:</span> {cart.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
