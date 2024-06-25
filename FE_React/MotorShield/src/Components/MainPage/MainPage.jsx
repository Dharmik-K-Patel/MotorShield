import React from "react";

import NavBar from '../Navbar/Navbar'
import Title from '../Title/Title'
import Services  from "../Services/Services";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";


const MainPage = () => {
  return (
      <div>
        <NavBar />
        <div className='hero container'>
          <Outlet />
        </div>
        <div className="container">
          <Title subtitle="OUR SERVICES" title="What We Offer" />
          <Services />
          <About />
          <Title subtitle="Contact Us" title="Get in Touch" />
          <Contact />
          <Footer />
        </div>
      </div>
  );
};

export default MainPage;
