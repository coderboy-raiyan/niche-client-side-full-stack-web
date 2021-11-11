import React from "react";
import HomeProducts from "../HomeProducts/HomeProducts";
import Reviews from "../Reviews/Reviews";
import Banner from "./../Banner/Banner";
import Header from "./../Haeder/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Banner></Banner>
      <HomeProducts />
      <Reviews />
    </>
  );
};

export default Home;
