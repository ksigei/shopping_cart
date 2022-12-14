import React from 'react';
import { UilTrashAlt } from '@iconscout/react-unicons';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from '../../redux/cartSlice';
import './cartItem.scss';

function CartItem({
  id, image, title, price, quantity = 0,
}) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <Link
        to={`/product/${id}`}
        state={{
          product: {
            id, image, title, price,
          },
        }}
      >
        <div className="card-image">
          <figure className="image">
            <img src={image} alt="product" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title mb-5 is-6">{title}</p>
              <p className="subtitle">
                <small>$</small>
                <strong>{price}</strong>
              </p>
            </div>
          </div>
        </div>
      </Link>
      <footer className="card-footer">
        <div className="buttons has-addons card-footer-item">
          <button
            type="button"
            className="button is-primary"
            onClick={() => dispatch(decrementQuantity(id))}
          >
            -
          </button>
          <button type="button" className="button is-primary">{quantity}</button>
          <button
            type="button"
            className="button is-primary"
            onClick={() => dispatch(incrementQuantity(id))}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="button is-danger card-footer-item"
          onClick={() => dispatch(removeItem(id))}
        >
          <UilTrashAlt />
        </button>
      </footer>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
};
CartItem.defaultProps = {
  quantity: 0,
};

export default CartItem;
