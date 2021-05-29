import React, { useState, useEffect } from "react";
import ShoppingCart from "./ShoppingCart";
import axios from "axios";
import MyNavbar from "./MyNavbar";
import { useHistory } from "react-router-dom";

var itemsPrice = 0;

function UserCart() {
  let history = useHistory();

  const [cartItems, setCartItems] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  function proceedToBuy() {
    history.push("/checkout");
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/cart/")
      .then((res) => {
        setCartItems(res.data.cart);
        if (res.data.count !== 0) {
          setIsEmpty(false);
        }
      })
      .catch((error) => console.log(error));
  });

  function deleteItem(id) {
    axios.delete("http://localhost:5000/cart/" + id).then((res) => {
      console.log(res);
    });

    setCartItems((preValues) => {
      return cartItems.filter((cartItem, index) => {
        return index !== id;
      });
    });
    alert("Product deleted from cart!");
  }

  return (
    <div className="shop_cart_body">
      <MyNavbar />
      <div className="d-flex flex-row justify-content-center">
        <h1 className="display-3 shop_cart_head">Your Cart</h1>
      </div>
      {isEmpty && (
        <img
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            width: "50%"
          }}
          src="https://www.razencustoms.com/includes/img/empty-cart.png"
          alt="..."
        />
      )}
      <div className="shop_cart_container container">
        {cartItems.map((cartItems, index) => {
          return (
            <ShoppingCart
              key={index}
              id={cartItems._id}
              img_url={cartItems.img_url}
              price={cartItems.price}
              name={cartItems.name}
              company={cartItems.company}
              description={cartItems.description}
              quantity={cartItems.quantity}
              onDelete={deleteItem}
            />
          );
        })}
      </div>

      {!isEmpty && (
        <div
          style={{ marginTop: "15px", marginBottom: "15px" }}
          className="container"
        >
          <div className="d-flex flex-row-reverse">
            <h3>Total : {itemsPrice}</h3>
          </div>

          <button
            className="btn btn-warning btn-lg btn-block shop_cart_but"
            type="button"
            onClick={proceedToBuy}
          >
            Proceed to Buy
          </button>
        </div>
      )}
    </div>
  );
}

export default UserCart;
