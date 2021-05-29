import React, { Component } from "react";
import "./ProfilePage.css";

export class ProfilePage extends Component {
  state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;

    return (
      <div className="p-body row">
        <div className="col-lg-5 col-md-6">
          <div className="p-card card h-100">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                 <div class="user-avatar">
                    <img src={profileImg} alt="" id="img" className="img" />
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    name="image-upload"
                    id="input"
                    onChange={this.imageHandler}
                  /> 
                </div>
                <div className="about">
                  <h5 class="user-name">Yuki Hayashi</h5>
                  <h6 class="user-email">yuki@Maxwell.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
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
                name="name"
                value=""
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
                name="email"
                value=""
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
                name="contactNo"
                value=""
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
                value=""
                name="deliveryAddress"
                rows="3"
                type="text"
                id="address"
                className="form-control text-break"
                placeholder="Address"
              />
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-outline-dark" type="submit">
                Edit Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
