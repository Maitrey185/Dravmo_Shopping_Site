import React from "react";
import { useHistory } from "react-router-dom";

function CardTile(props) {
  let history = useHistory();

  function getDetails() {
    history.push("/ProductDetails/" + props.id);
  }

  function getCategory() {
    history.push("products/" + props.category);
  }

  return (
    <div id="c1" className="d-flex justify-content-center col-4 mx-0.5 my-5">
      <div className="card cardtile" style={{ width: "24rem" }}>
        <img
          style={{ objectFit: "cover" }}
          src={props.img}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <button
            onClick={
              props.btnTitle === "More Details" ? getDetails : getCategory
            }
            className="btn btn-dark"
          >
            {props.btnTitle}
          </button>
        </div>
      </div>
    </div>
  );
}
export default CardTile;
