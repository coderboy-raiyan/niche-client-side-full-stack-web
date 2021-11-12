import React from "react";
import HomeProducts from "../HomeProducts/HomeProducts";
import Reviews from "../Reviews/Reviews";
import Banner from "./../Banner/Banner";
import Header from "./../Haeder/Header";
import Helping from "./../Helping/Helping";

const Home = () => {
  return (
    <>
      <Header />
      <Banner></Banner>
      <HomeProducts />
      <Reviews />
      <Helping />
    </>
  );
};

export default Home;
