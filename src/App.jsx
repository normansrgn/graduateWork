import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Prom from "./components/Prom/Prom";
import MenWomen from "./components/MenWomen/MenWomen";
import SneakersPromo from "./components/SneakersPromo/SneakersPromo";
import PromoSlider from "./components/PromoSlider/PromoSlider";
import Footer from "./components/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Header />

    <Prom />
    <MenWomen />
    <SneakersPromo />
    <PromoSlider />

    <Footer />
  </React.Fragment>
);

export default App;
