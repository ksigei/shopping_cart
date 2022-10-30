import React from "react";
import { useSelector } from "react-redux";
import { UilBill } from '@iconscout/react-unicons'

function Total() {
  const cart = useSelector((state) => state.cart.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h3 className="title 
            is-5
            ">
            ORDER SUMMARY</h3>
            <div>
              <p className="total__p">
                total ({getTotal().totalQuantity} items) :{" "}
                <strong>${getTotal().totalPrice}</strong>
              </p>
            </div>
            <button className="button is-primary is-fullwidth">
              <UilBill /> Checkout
            </button>


          </div>
        </div>
      </div>
  );
}

export default Total;
