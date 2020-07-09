import React from "react";
import CartItems from "./CartItems";
import Total from "./Total";

export default function YourCart(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => (
    <CartItems {...props} feature={feature} idx={idx} />
  ));

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          <Total {...props} />
        </div>
      </div>
    </section>
  );
}
