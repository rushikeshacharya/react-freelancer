import React from "react";
import FooterSection from "./FooterSection";
import Copyright from "./Copyright";
import ContentSection from "./ContentSection";
import AboutSection from "./AboutSection";
import PortfolioSection from "./PortfolioSection";
import Masthead from "./Masthead";
import NavBar from "./Navbar";
import Head from "./Head";

import "./index.css";

const App = () => {
  return (
    <div>
      <Head />
      <NavBar />
      <Masthead />
      <PortfolioSection />
      <AboutSection />
      <ContentSection />
      <FooterSection />
      <Copyright />
    </div>
  );
};

export default App;
