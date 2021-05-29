import React, { useState, useEffect } from "react";
import ShopCart from "./ShopCart";
import axios from "axios";

function UserCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cart/")
      .then((res) => {
        setCartItems(res.data.cart);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div>
      {cartItems.map((cartItems, index) => {
        return (
          <ShopCart
            key={index}
            id={cartItems._id}
            img_url={cartItems.img_url}
            price={cartItems.price}
            name={cartItems.name}
          />
        );
      })}
    </div>
  );
}

export default UserCart;
