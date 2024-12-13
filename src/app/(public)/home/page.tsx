import React from "react";
import Herosection from "./components/Herosection";
import Trustedby from "./components/Trustedby";
import Explore from "./components/Explore";
import GradientWrapper from "./components/GradientWrapper";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";
import Paper from "./components/Paper";

const Home = () => {
  return (
    <div className="mt-6">
      <Herosection />
      <Trustedby />
      <Explore />
      <Paper />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
