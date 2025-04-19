import React, { Component } from "react";
import Prom from "../components/Prom/Prom";
import MenWomen from "../components/MenWomen/MenWomen";
import SneakersPromo from "../components/SneakersPromo/SneakersPromo";
import PromoSlider from "../components/PromoSlider/PromoSlider";
import NewFProm from "../components/NewFProm/NewFProm";
import Marquee from "../components/Marquee/Marquee";
import Testimonials from "../components/Testimonials/Testimonials";
import SneakerQuiz from "../components/SneakerQuiz/SneakerQuiz";

export default class Home extends Component {
  render() {
    return (
      <>
        <Prom />
        {/* <MenWomen /> */}
        <SneakersPromo />
        {/* <SneakerOfTheDay /> */}
        {/* <NewFProm /> */}
        <Testimonials />
        <SneakerQuiz />
        <PromoSlider />

      </>
    );
  }
}
