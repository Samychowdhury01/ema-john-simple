import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

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

  return (
    <div className="md:grid md:grid-cols-12">

      {/* Products section */}

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

      {/* cart Section */}

      <div className="bg-secondary bg-opacity-40 md:col-span-3 w-full">
       <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
