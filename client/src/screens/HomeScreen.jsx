import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import RecordIncidence from "../components/RecordIncidence";
import Footer from "../components/footer/Footer";
const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Services />
      <RecordIncidence />
      <Footer />
    </>
  );
};

export default HomeScreen;
