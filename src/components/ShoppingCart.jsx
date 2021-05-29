import React from "react";
import "./ShopCart.css";

function ShoppingCart(props) {
  function deleteCartItem() {
    props.onDelete(props.id);
  }

  return (
    <div className="mt-2">
      <hr className="mt-0" />
      <div className="d-flex flex-row-reverse">
        <h5 className="shop_cart_price">Price</h5>
      </div>
      <div className="d-flex flex-row">
        <div className="col-1"></div>
        <div className="col-2">
          <img src={props.img_url} alt="" className="card-img" />
        </div>
        <div className="col-6">
          <div className="card-body">
            <h2 className="card-title">{props.name}</h2>
            <h5>
              <span className="mx-0 shop_cart_comp">By {props.company}</span>
            </h5>
            <span className="mx-0 pt-0 shop_cart_stock">In stock</span>
            <br />
            <span className="mx-0">
              Eligible for
              <span className="mx-0 shop_cart_eligibility"> FREE</span> shipping
            </span>
            <br />
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                This will be a gift
              </label>
            </div>
            <p>
              <span className="mx-0 shop_cart_describe">Description: </span>
              <span className="lead shop_cart_lead_desc">
                {props.description}
              </span>
            </p>
            <div className="d-flex d-row">
              <span className="mx-0 shop_cart_lead_desc">
                <b>Quantity: {props.quantity}</b>
              </span>
              <div className="d-flex justify-content-center col-2 shop_cart_trash_col">
                <button
                  onClick={deleteCartItem}
                  className="btn btn-danger py-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex flex-row-reverse">
          <h3>{props.price}.00</h3>
        </div>
      </div>
      <div className="d-flex flex-row-reverse">
        <h3>
          Subtotal( {props.quantity} Item ): ₹ {props.price * props.quantity}.00
        </h3>
      </div>
      <div className="d-flex flex-row justify-content-center mt-3">
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
      <br />
    </div>
  );
}

export default ShoppingCart;
