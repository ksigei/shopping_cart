import React from "react";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";

export default function Navbar() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link
          to="/"
          className="navbar-item  is-size-1
        has-text-weight-bold has-text-primary"
        >
          <UilShoppingCartAlt
            className=" mr-2 
          
           "
          />{" "}
          TudoCart
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">products</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div
                className="button is-primary"
                onClick={() => navigate("/cart")}
              >
                <UilShoppingBag />
                <p>{getTotalQuantity() || 0}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
