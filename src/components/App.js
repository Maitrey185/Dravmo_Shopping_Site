import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import MainPage from "./MainPage";
import ProtectedRoute from "./ProtectedRoute";
import ProductDetails from "./ProductDetails";
import Map from "./Map/map";
import SellingPage from "./SellingPage";
import ShoppingCart from "./ShoppingCart";
import UserCart from "./UserCart";
import Checkout from "./CheckoutForm/Checkout";
import CategoryProduct from "./CategoryProduct";
import UserProfile from "./UserProfile";
import success from "./success";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userToken, setUserToken] = useState("");

  function getCurrentUser(id, uName, uToken) {
    setUserName(uName);
    setUserId(id);
    setUserToken(uToken);
  }

  function checkAuth() {
    setIsAuth(!isAuth);
  }

  return (
    <Router>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/Map" exact component={Map} />
      <Route path="/SellingPage" exact component={SellingPage} />
      <Route
        path="/signup"
        exact
        render={(props) => <SignupPage changeAuthStatus={checkAuth} />}
      />

      <Route
        path="/login"
        exact
        render={(props) => (
          <LoginPage changeAuthStatus={checkAuth} getUser={getCurrentUser} />
        )}
      />

      <ProtectedRoute
        path="/mainPage"
        exact
        component={MainPage}
        uID={userId}
        uName={userName}
        changeAuthStatus={checkAuth}
        isAuth={isAuth}
      />
      <ProtectedRoute
        path="/user/:id"
        exact
        component={UserProfile}
        uID={userId}
        uName={userName}
        changeAuthStatus={checkAuth}
        isAuth={isAuth}
      />
      <Route path="/ProductDetails/:pID" exact component={ProductDetails} />
      <Route path="/cart" exact component={ShoppingCart} />
      <Route path="/user-cart" exact component={UserCart} />
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/products/:category" exact component={CategoryProduct} />
      <Route path="/success" exact component={success} />
    </Router>
  );
}

export default App;
