import CardTile from "./CardTile";
import React from "react";
import MyNavbar from "./MyNavbar";
import "./Navbar.css";

function MainPage(props) {
  return (
    <div className="main-page-body">
      <MyNavbar userID={props.uID} checkAuth={props.changeAuthStatus} />
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="d-flex flex-row">
        <CardTile
          img="images/Apple iPhone 11.jpg"
          title="Expert Picks To Capture Your Summer Memories"
          btnTitle="Similar Products"
          category="Mobile%20Phone"
        />
        <CardTile
          img="images/HP Spectre x360.jpg"
          title="Explore Top Rated Laptops"
          btnTitle="Similar Products"
          category="Laptop"
        />
        <CardTile
          img="images/Solimo 4-Door Wardrobe.jpg"
          title="Home Essentials"
          btnTitle="Similar Products"
          category="Furniture"
        />
      </div>

      <div className="d-flex flex-row">
        <CardTile
          img="images/HP Pavillion Gaming.jpg"
          title="Enhanced and Powerful Laptops"
          btnTitle="Similar Products"
          category="Laptop"
        />
        <CardTile
          img="images/Sparx Running Shoes.jpg"
          title="Go the Extra Mile"
          btnTitle="Similar Products"
          category="Shoes"
        />
        <CardTile
          img="images/Cherry Wood Floating Shelf.jpg"
          title="Home and Decor"
          btnTitle="Similar Products"
          category="Furniture"
        />
      </div>

      <div className="d-flex flex-row">
        <CardTile
          img="images/Wrogn Men's Casual Denim Shirt.jpg"
          title="Roll Up Your Sleeves"
          btnTitle="Similar Products"
          category="Shirts"
        />
        <CardTile
          img="images/Dell XPS.jpg"
          title="Feel The Speed"
          btnTitle="Similar Products"
          category="Laptop"
        />
        <CardTile
          img="images/Mast & Harbour Women's Round Neck T-shirt.jpg"
          title="All about Fashion"
          btnTitle="Similar Products"
          category="Shirts"
        />
      </div>
      <div className="d-flex flex-row">
        <CardTile
          img="images/Nike Tennis Shoes.jpg"
          title="Fly While You Play"
          btnTitle="Similar Products"
          category="Shoes"
        />
        <CardTile
          img="images/Redmi Note 10.jpg"
          title="Phone Zone"
          btnTitle="Similar Products"
          category="Mobile%20Phone"
        />
        <CardTile
          img="images/Old Wolf Furniture Study Table.jpg"
          title="Tidy Desk, Tidy Mind"
          btnTitle="Similar Products"
          category="Furniture"
        />
      </div>
    </div>
  );
}

export default MainPage;
