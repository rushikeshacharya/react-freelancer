import React from "react";
import Portfolio from "./Portfolio";
import Cabin from "./assets/img/portfolio/cabin.png";
import Cake from "./assets/img/portfolio/cake.png";
import Circus from "./assets/img/portfolio/circus.png";
import Game from "./assets/img/portfolio/game.png";
import Safe from "./assets/img/portfolio/safe.png";
import Submarine from "./assets/img/portfolio/submarine.png";

const PortfolioGrid = () => {
  return (
    <div className="row justify-content-center">
      <Portfolio modelNo={"1"} imgPath={Cabin} />
      <Portfolio modelNo={"2"} imgPath={Cake} />
      <Portfolio modelNo={"3"} imgPath={Circus} />
      <Portfolio modelNo={"4"} imgPath={Game} />
      <Portfolio modelNo={"5"} imgPath={Safe} />
      <Portfolio modelNo={"6"} imgPath={Submarine} />
    </div>
  );
};

export default PortfolioGrid;
