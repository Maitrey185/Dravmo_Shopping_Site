import "./ProductDetails.css";
import React, { useState, useEffect } from "react";
import MyNavbar from "./MyNavbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

import {
  Typography,
  Button,
  CardActions
} from "@material-ui/core";
import useStyles from "./ProductDeeets.js";
function ProductDetails() {
  const classes = useStyles();

  const location = useLocation();
  let pathName = location.pathname;
  const pID = pathName.substr(16);

  const [product, setProduct] = useState({});

  const [qty, setQty] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/" + pID)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => console.log(error));
  });

  function add() {
    setQty(qty + 1);
  }

  function sub() {
    if (qty !== 1) {
      setQty(qty - 1);
    }
  }

  function addToCart() {
    console.log("Add to Cart");

    var cartProd = {
      img_url: "http://localhost:5000/" + product.productImage,
      name: product.model,
      price: product.price,
      company: product.company,
      description: product.description,
      quantity: qty
    };

    axios.post("http://localhost:5000/cart", cartProd).then((response) => {
      console.log(response.data);
    });

    alert("Product added to cart!");
  }

  return (
    <div clasName="pro_body">
      <MyNavbar />
      <div className="container mt-5 p-0 pro_container">
        <div className="d-none d-lg-flex flex-row m-0">
          <div className="col-5 p-0">
            <img
              src={"http://localhost:5000/" + product.productImage}
              alt=""
              className="card-img"
            />
          </div>
          <div className="col-1"></div>
          <div className="col-6">
            <div className="card-body">
              <h1 className="display-4">{product.model}</h1>
              <span className="mx-0 pro_product_by">By {product.company}</span>
              <hr className="mt-2" />
              <span className="mx-0">
                Deal Price:{" "}
                <span className="mx-0 pro_price">₹ {product.price}.00</span>
                <br />
                <span className="mx-0 pro_tax">Inclusive of all taxes</span>
              </span>
              <br />
              <br />
              <span className="mx-0 pro_stock">In stock</span>
              <br />
              <span className="mx-0 pro_desc">Description: </span>
              <span className="mx-0 lead pro_pro_desc">
                {product.description}
              </span>
              <br />
              <br />
              <div className="d-flex flex-row">
                <div className="col-2 mx-5">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                    alt=""
                    width="60em"
                  />
                  <p className="pro_three">7 days replacement</p>
                </div>
                <div className="col-2 mx-5">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png"
                    alt=""
                    width="60em"
                  />
                  <p className="pro_three">1 year warranty</p>
                </div>
                <div className="col-2 mx-5">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png"
                    alt=""
                    width="60em"
                  />
                  <p className="pro_three">No contact delivery</p>
                </div>
              </div>
              <hr />
              <div>
                <CardActions className={classes.cardActions}>
                  <div className={classes.buttons}>
                    <Button
                      onClick={sub}
                      style={{ paddingRight: 20 }}
                      type="button"
                      size="small"
                    >
                      -
                    </Button>
                    <Typography className="typo">&nbsp;{qty}&nbsp;</Typography>
                    <Button
                      onClick={add}
                      style={{ paddingRight: 20 }}
                      type="button"
                      size="small"
                    >
                      +
                    </Button>
                  </div>
                </CardActions>
                <button
                  type="button"
                  className="btn btn-success btn-lg btn-block"
                  onClick={addToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-center d-lg-none">
          <img
            src={"http://localhost:5000/" + product.productImage}
            alt=""
            width="250em"
          />
        </div>
        <hr />
        <div className="d-flex flex-row justify-content-center d-lg-none">
          <div className="card-body">
            <h1 className="display-4">{product.model}</h1>
            <span className="mx-0 pro_product_by">By {product.company}</span>
            <br />
            <hr className="mt-2" />
            <p>
              Deal Price:{" "}
              <span className="pro_price mx-0">₹ {product.price}.00</span>
              <br />
              <span className="pro_tax mx-0">Inclusive of all taxes</span>
            </p>
            <span className="mx-0 pro_stock">In stock</span>
            <br />
            <span className="pro_desc mx-0">Description: </span>
            <span className="lead pro_pro_desc mx-0">
              {product.description}
            </span>
            <br />
            <br />

            <div className="d-flex flex-row">
              <div className="col-1 col-sm-2 mx-5 ">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                  alt=""
                  width="60em"
                />
                <br />
                <span className="mx-0 pro_three">7 days replacement</span>
              </div>
              <div className="col-1 col-sm-2 mx-5">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png"
                  alt=""
                  width="60em"
                />
                <br />
                <span className="mx-0 pro_three">1 year warranty</span>
              </div>
              <div className="col-1 col-sm-2 mx-5">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png"
                  alt=""
                  width="60em"
                />
                <br />
                <span className="mx-0 pro_three">No contact delivery</span>
              </div>
            </div>

            <hr />
            <button
              type="button"
              className="btn btn-success btn-lg btn-block"
              onClick={addToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
