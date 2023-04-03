import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <Achievement></Achievement> */}
      <About></About>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
