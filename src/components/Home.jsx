import React from "react";
import Item from "./features/Item";
// import { ShoppingCart } from '@mui/icons-material'
// import {useNavigate} from 'react-router-dom'
// import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../redux/productSlice";

function Home() {
  // const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);

  console.log(products);
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
              <div className="loader"></div>
            ) : (
              products.map((product) => (
                <div className="column">
                  <Item
                    key={product.id}
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
