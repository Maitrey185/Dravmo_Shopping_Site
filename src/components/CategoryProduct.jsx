import CardTile from "./CardTile";
import React, { useState, useEffect } from "react";
import MyNavbar from "./MyNavbar";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
function CategoryProduct() {
  const [items, setItems] = useState([]);

  const location = useLocation();
  let pathName = location.pathname;
  const category = pathName.substr(10);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/category/" + category)
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="main-page-body">
      <MyNavbar />
      <div className="row" style={{ margin: "25px 10px" }}>
        {items.map((items, index) => {
          return (
            <CardTile
              key={index}
              id={items._id}
              img={"http://localhost:5000/" + items.productImage}
              btnTitle="More Details"
              title={items.model}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CategoryProduct;
