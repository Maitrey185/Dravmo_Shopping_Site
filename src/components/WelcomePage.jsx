import React from "react";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="welcome-body">
      <nav className="navbar sticky-top navbar-dark py-0 ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="mt-2" src="images/Logo.PNG" alt="" width="200px" />
          </a>
        </div>
      </nav>
      <div className="container">
        <div id="row_1" className="row">
          <div id="col_1" className="col-12 text-white col-lg-6 mb-5">
            <h1 className="welcome-title">Welcome</h1>
            <p className="lead">
              You'll be the first to hear about our new collections, special
              offers, private events, upcoming sales and all the latest news.
              <br />
              <span class="mx-0" style={{ fontWeight: "400" }}>
                A LITTLE THANK YOU....
              </span>
              <br />
              <span class="mx-0" style={{ fontWeight: "400" }}>
                AND FREE STANDARD SHIPPING ANYWHERE IN INDIA.
              </span>
            </p>
            <Link to="/login">
              <button id="bh" className="btn btn-outline-light px-0 mt-3">
                <strong>Log In</strong>
              </button>
            </Link>
            <Link to="/signup">
              <button id="bh" className="btn btn-outline-light px-0 mt-3">
                <strong>Sign Up</strong>
              </button>
            </Link>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="card w-card c1"></div>
              <div className="card w-card c2"></div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card w-card c3"></div>
              <div className="card w-card c4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
