"use client";

import React from "react";
import HomeNavbar from "./components/homeNavbar";
import CustomerHome from "./home/customer";
import Learn from "./home/Learn";
// import RestaurantProfile from "./restaurant_profile/page";

const page = () => {
  return (
    <div>
      <HomeNavbar />
      <CustomerHome />
      <Learn />

      {/* <RestaurantProfile /> */}
    </div>
  );
};

export default page;
