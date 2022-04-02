import React from "react";
import AboutUs from "../../components/E-Commerce/AboutUs";
import Banner from "../../components/E-Commerce/Banner";
import Footer from "../../components/E-Commerce/Footer";
import Navbar from "../../components/E-Commerce/Navbar";
import NewArrival from "../../components/E-Commerce/NewArrival";
import Preview from "../../components/E-Commerce/Preview";
import Slider from "../../components/E-Commerce/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Preview />
      <NewArrival />
      <AboutUs />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
