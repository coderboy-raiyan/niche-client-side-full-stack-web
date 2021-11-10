import React from "react";
import HomeProducts from "../HomeProducts/HomeProducts";
import Banner from "./../Banner/Banner";
import Header from "./../Haeder/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Banner></Banner>
      <HomeProducts />
    </>
  );
};

export default Home;
