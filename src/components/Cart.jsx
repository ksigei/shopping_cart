import React from "react";
import { useSelector } from "react-redux";
import Total from "./features/Counter";
import CartItem from "./features/CartItem";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="columns">
      <div className="section cards">
        <div className="container">
          <div className="columns is-multiline">
            {cart.length === 0
              ? "cart is empty"
              : cart.map((item) => (
                  <div className="column " key={item.id}>
                    <CartItem
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>

      <div className="section">
        <Total />
      </div>
    </div>
  );
}

export default Cart;
