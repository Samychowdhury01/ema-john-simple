import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
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

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];

    // step 1: get id
    for (const id in storedCart) {
      // step 2: get the product by using id
      const addedProduct = products.find((product) => product.id == id);

      if (addedProduct) {
        // step 3: get quantity of the product
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  // show all button function
  const showAll = () => {
    setLoad(true);
  };

  const [cart, setCart] = useState([]);

  // event handler for add to cart button
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
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

        {/* hide show all button */}
        {!load && (
          <span onClick={showAll}>
            <Button></Button>
          </span>
        )}
      </div>

      {/* cart Section */}

      <div className="md:col-span-3 w-full">
        <div className="sticky top-0 border-b-2 border-black">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
