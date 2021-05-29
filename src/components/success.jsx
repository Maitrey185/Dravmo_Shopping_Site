import React from "react";
import "./success.css";
function success() {
  return (
    <div>
      <div className="mm">
        <i className="checkmark">✓</i>
      </div>
      <h1 className="vv">Success</h1>
      <p className="pp">
        We received your purchase request;
        <br /> we'll be in touch shortly!
        <br />
        <a href="/products/Laptop">Continue Shopping</a>
      </p>
    </div>
  );
}

export default success;
