import React from "react";
import Navbar from "../components/Navbar";
import About from "./About";
import Footer from "../components/Footer";
import Home from "../components/home";
import Inquiries from "../components/Inquiries";
import Menu from "../components/Menu";
import Portfolio from "../components/Portfolio";

const Me = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Menu />
      <Portfolio />
      <Inquiries />
      <Footer />
    </div>
  );
};

export default Me;
