import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UilShoppingBag, UilShoppingCartAlt } from '@iconscout/react-unicons';

export default function Navbar() {
  const [isActive, toggleActive] = React.useState(false);

  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  const totalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <UilShoppingCartAlt
            className=" is-size-1 has-text-primary has-text-weight-bold mr-2
          "
          />
          TudoCart
        </Link>

        <button
          type="button"
          onClick={() => {
            toggleActive(!isActive);
          }}
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar_mobile"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div
        id="navbar_mobile"
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <button
              type="button"
              className="button is-primary"
              onClick={() => navigate('/cart')}
            >
              <UilShoppingBag />
              <p>{totalQuantity() || 0}</p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
