import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useLocation } from "react-router-dom";
import { UilPlusCircle } from "@iconscout/react-unicons";

function Product() {
  const { state } = useLocation();

  const { product } = state || {};

  const dispatch = useDispatch();

  return product ? (
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <figure className="image is-4by3">
            <img src={product.image} alt={product.title} />
          </figure>
        </div>
        <div className="column is-8">
          <div className="columns">
            <div className="column">
              <h1 className="title is-1">{product.title}</h1>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <h3 className="title is-3">Description</h3>
              <h2 className="subtitle is-4">{product.description}</h2>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <h2 className="subtitle is-4">${product.price}</h2>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <button
                className="button is-primary is-large"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      title: product.title,
                      image: product.image,
                      price: product.price,
                    })
                  )
                }
              >
                <UilPlusCircle /> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="title is-1">Product not found</div>
  );
}

export default Product;
