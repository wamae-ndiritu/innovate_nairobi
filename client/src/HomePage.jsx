import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";

const HomePage = () => {
  const greetings = () => {
    console.log("Helo world!");
  };

  greetings();
  return (
    <>
      <Hero />
      <Services />
    </>
  );
};

export default HomePage;
