import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { UilPlusCircle } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import "./item.scss";

function Item({ id, title, image, price }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <Link
        to={`/Product/${id}`}
        state={{ product: { id, title, image, price } }}
      >
        <div className="card-image">
          <figure className="image">
            <img src={image} alt="product" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-6">{title}</p>
            </div>
          </div>
        </div>
      </Link>
      <footer className="card-footer">
        <div className="card-footer-item">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="card-footer-item">
          <button
            className="button is-primary"
            onClick={() =>
              dispatch(
                addToCart({
                  id,
                  title,
                  image,
                  price,
                })
              )
            }
          >
            <UilPlusCircle /> Add
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Item;
