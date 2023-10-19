import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Service from "./components/Service/Service";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Service />
      <Footer/>
    </div>
  );
};

export default App;
