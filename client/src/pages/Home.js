/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Hero from './../components/layouts/Hero';
import Footer from '../components/layouts/Footer';
import CallToAction5 from "../components/layouts/CallToAction5";
import Services from './Services';
import ReviewCard from "../components/layouts/ReviewCard";
import Contact from "../components/layouts/Contact";
import Gallery from "../components/layouts/Gallery";



const Home = () => {
  return (
    <div >

      <Hero />
      <div className="px-5">

        <Services />
        <ReviewCard />
        <Gallery />
        <CallToAction5 />
        <Contact />
      </div>

      <Footer />
    </div>


  );
};

export default Home;
