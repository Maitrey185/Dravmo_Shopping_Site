import React, { useState, useEffect } from "react";
import "./Checkout.css";
import axios from "axios";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { useHistory } from "react-router-dom";
init("user_St4piuA2vmnlWG4i8Zhpt");
var itemsPrice = 0;

function Checkout() {
  let history = useHistory();

  function showSuccess() {
    axios.delete("http://localhost:5000/cart/").then((res) => {
      console.log(res);
    });
    setCartItems([]);
    history.push("/success");
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4wh33hz",
        "template_9yy62sh",
        e.target,
        "user_St4piuA2vmnlWG4i8Zhpt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cart/")
      .then((res) => {
        setCartItems(res.data.cart);
        setCount(res.data.count);
      })
      .catch((error) => console.log(error));
  });

  itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  function emptyCart() {
    axios.delete("http://localhost:5000/cart/").then((res) => {
      console.log(res);
    });
    setCartItems([]);
  }

  return (
    <div>
      <div className="container ch-container">
        <div className="py-4 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="images/Logo.PNG"
            height="100px"
            alt=""
          />
          <h2>Checkout form</h2>
        </div>
        <div className="row ">
          <div className="col-md-4 order-md-2 mb-4 align-self-start ">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">{count}</span>
            </h4>
            <ul className="list-group mb-3 sticky-top">
              {cartItems.map((cartItems, index) => {
                return (
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">{cartItems.name}</h6>
                      <small className="text-muted">
                        Quantity: {cartItems.quantity}
                      </small>
                    </div>
                    <span className="text-muted">
                      ₹ {cartItems.quantity * cartItems.price}
                    </span>
                  </li>
                );
              })}
              <li className="list-group-item d-flex justify-content-between">
                <strong>Total</strong>
                <strong>₹ {itemsPrice}</strong>
              </li>
            </ul>
          </div>
          <div class="col-md-8 order-md-1 align-self-start d-flex">
            <form
              style={{ borderColor: "#000000" }}
              className="from-group login-signup"
            >
              <h4 className="mb-3">Payment</h4>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label className="form-check-label" for="exampleRadios2">
                  COD
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label className="form-check-label" for="exampleRadios2">
                  Card
                </label>
              </div>
              <div className="mb-3 reveal-if-active">
                <label style={{ color: "#000000" }} className="form-label my-3">
                  Credit Card number
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Credit Card No"
                />
              </div>
              <div className="mb-3">
                <label
                  for="email"
                  style={{ color: "#000000" }}
                  className="form-label"
                >
                  CVV
                </label>
                <input
                  type="tel"
                  name="CVV"
                  className="form-control"
                  placeholder="Enter CVV"
                />
              </div>
            </form>
          </div>
          <div className="col-md-8 order-md-1 align-self-start d-flex">
            <form
              onSubmit={sendEmail}
              style={{ borderColor: "#000000" }}
              className="from-group login-signup"
            >
              <div className="mb-3">
                <label
                  for="fname"
                  style={{ color: "#000000" }}
                  className="form-label"
                  type="text"
                >
                  User Name
                </label>
                <input
                  name="uname"
                  type="text"
                  class="form-control"
                  id="fname"
                  placeholder="User name"
                />
              </div>
              <div className="mb-3">
                <label
                  for="email"
                  style={{ color: "#000000" }}
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3">
                <label style={{ color: "#000000" }} className="form-label">
                  Amount to be paid:
                </label>
                <input
                  type="text"
                  name="total"
                  value={itemsPrice}
                  className="form-control"
                />
              </div>

              <p
                className="form-text"
                style={{ color: "#ff0000", fontSize: "12px" }}
              ></p>
              
              <div className="d-grid gap-2">
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Place Order"
                  onClick={showSuccess}
                />
              </div>
            </form>
          </div>
        </div>
        <footer className="my-5 pt-5 text-muted text-center text-small">
          <p className="mb-1">© 2021 Dravmo</p>
        </footer>
      </div>
    </div>
  );
}

export default Checkout;
