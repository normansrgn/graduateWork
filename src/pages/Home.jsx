import React, { Component } from "react";
import Prom from "../components/Prom/Prom";
import MenWomen from "../components/MenWomen/MenWomen";
import SneakersPromo from "../components/SneakersPromo/SneakersPromo";
import PromoSlider from "../components/PromoSlider/PromoSlider";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>

        <Prom />
        <MenWomen />
        <SneakersPromo />
        <PromoSlider />
        
      </React.Fragment>
    );
  }
}
