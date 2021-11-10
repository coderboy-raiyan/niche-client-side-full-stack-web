import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ProductProvider from "./Pages/Context/ProductProvider";
import Header from "./Pages/Home/Haeder/Header";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Products from "./Pages/Products/Products";
import Purchase from "./Pages/Purchase/Purchase";

const App = () => {
  return (
    <ProductProvider>
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
          <Route path="/product/:productId">
            <Purchase></Purchase>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
