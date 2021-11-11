import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Pages/Context/AuthProvider";
import ProductProvider from "./Pages/Context/ProductProvider";
import ReviewsProvider from "./Pages/Context/ReviewsProvider";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Products from "./Pages/Products/Products";
import Purchase from "./Pages/Purchase/Purchase";
import Register from "./Pages/Register/Register";

const App = () => {
  return (
    <AuthProvider>
      <ReviewsProvider>
        <ProductProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/products">
                <Products></Products>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <PrivateRoute path="/dashboard">
                <DashBoard></DashBoard>
              </PrivateRoute>
              <PrivateRoute path="/product/:productId">
                <Purchase></Purchase>
              </PrivateRoute>
              <Route exact path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </BrowserRouter>
        </ProductProvider>
      </ReviewsProvider>
    </AuthProvider>
  );
};

export default App;
