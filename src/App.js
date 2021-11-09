import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Home/Haeder/Header";
import Home from "./Pages/Home/Home/Home";
import Products from "./Pages/Products/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
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
      </Switch>
    </BrowserRouter>
  );
};

export default App;
