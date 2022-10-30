import React from "react";
import "./cartItem.scss";
import { UilTrashAlt } from '@iconscout/react-unicons'

import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ id, image, title, price, quantity = 0 }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={image} alt="product" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title">{title}</p>
            <p className="subtitle">
              <small>$</small>
              <strong>{price}</strong>
            </p>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <div className="buttons has-addons card-footer-item">
          <button
            className="button is-primary"
            onClick={() => dispatch(decrementQuantity(id))}
          >
            -
          </button>
          <button className="button is-primary">{quantity}</button>
          <button
            className="button is-primary"
            onClick={() => dispatch(incrementQuantity(id))}
          >
            +
          </button>
        </div>
        <button
          className="button is-danger card-footer-item"
          onClick={() => dispatch(removeItem(id))}
        >
          <UilTrashAlt />
        </button>
      </footer>
    </div>
  );
}

export default CartItem;
