import React, { useEffect } from "react";
import Item from "./features/Item";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../redux/productSlice";

function Home() {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchproducts());
  });

  return (
    <div>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Our Products</h4>
        </div>
      </div>
      <br />
      <section className="section cards">
        <div className="container">
          <div className="columns is-multiline">
            {isLoading ? (
              <div className="loader" />
            ) : (
              products.map((product) => (
                <div className="column" key={product.id}>
                  <Item
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
