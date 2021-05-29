import ProfileImage from "@daym3l/react-profile-image";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import "./NewProfilePage.css";

function UserProfile() {
  const getImages = (base64Image, fileImage) => {
    // Do something with the selected image)
    console.log(base64Image);
    console.log(fileImage);
  };

  const [user, setUser] = useState([]);

  const location = useLocation();
  let pathName = location.pathname;
  const uID = pathName.substr(6);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    contactNo: "",
    deliveryAddress: ""
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/" + uID)
      .then((res) => {
        console.log(res.data.user);
        setUserInfo((preValues) => {
          return {
            ...preValues,
            name: res.data.user.name,
            email: res.data.user.email,
            contactNo: res.data.user.contactNo,
            deliveryAddress: res.data.user.deliveryAddress
          };
        });
      })
      .catch((error) => console.log(error));
  }, [uID]);

  function handleChange(event) {
    const { name, value } = event.target;
    setUserInfo((preValues) => {
      return {
        ...preValues,
        [name]: value
      };
    });
  }

  function update() {
    setUserInfo((preValues) => {
      return {
        ...preValues
      };
    });
    axios
      .patch("http://localhost:5000/user/" + uID, userInfo)
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <div>
      <MyNavbar />
      <div className="container mt-5">
        <div className="d-flex flex-row align-items-center my-3">
          <div className="col-3"></div>
          <div className="col-3">
            <ProfileImage
              returnImage={getImages}
              uploadBtnProps={{
                variant: "contained",
                label: "Upload your photo"
              }}
            />
          </div>
          <div className="col-4">
            <h1>{userInfo.name}</h1>
            <h5 className="profileemail">{userInfo.email}</h5>
            <br />
            <div className="d-grid gap-2">
              <button
                className="btn btn-outline-primary btn-block"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                type="button"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="col-2"></div>
          <div className="col-8">
            <hr />
          </div>
        </div>
        <div className="d-flex flex-row mb-3">
          <div className="col-3"></div>
          <div className="col-4">
            <h4>
              Contact Number: <span class="mobileNo">{userInfo.contactNo}</span>
            </h4>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="col-3"></div>
          <div className="col-7">
            <h3>Address: </h3>

            <h4 className="address_profile">{userInfo.deliveryAddress}</h4>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Update Your Profile
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ padding: "0px" }}>
                <form
                  style={{ borderColor: "#000000" }}
                  className="from-group login-signup"
                >
                  <div className="mb-3">
                    <label
                      for="fname"
                      style={{ color: "#000000" }}
                      className="form-label"
                    >
                      User Name
                    </label>
                    <input
                      onChange={handleChange}
                      name="name"
                      value={userInfo.name}
                      type="text"
                      className="form-control"
                      placeholder="Enter User Name"
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
                      onChange={handleChange}
                      name="email"
                      value={userInfo.email}
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="email"
                      style={{ color: "#000000" }}
                      className="form-label"
                    >
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      onChange={handleChange}
                      name="contactNo"
                      value={userInfo.contactNo}
                      className="form-control"
                      placeholder="Enter Contact Number"
                    />
                  </div>

                  <p
                    className="form-text"
                    style={{ color: "#ff0000", fontSize: "12px" }}
                  ></p>
                  <div className="mb-3">
                    <label
                      for="address"
                      style={{ color: "#000000" }}
                      className="form-label"
                    >
                      Address
                    </label>
                    <textarea
                      onChange={handleChange}
                      name="deliveryAddress"
                      value={userInfo.deliveryAddress}
                      rows="3"
                      type="text"
                      id="address"
                      className="form-control text-break"
                      placeholder="Address"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={update}
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
