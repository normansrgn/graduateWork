import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Prom from "./components/Prom/Prom";
import MenWomen from "./components/MenWomen/MenWomen";
import SneakersPromo from "./components/SneakersPromo/SneakersPromo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Prom />
    <MenWomen />
    <SneakersPromo />
  </React.StrictMode>
);
