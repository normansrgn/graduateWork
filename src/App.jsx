import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Prom from "./components/Prom/Prom";
import MenWomen from "./components/MenWomen/MenWomen";
import SneakersPromo from "./components/SneakersPromo/SneakersPromo";
import PromoSlider from "./components/PromoSlider/PromoSlider";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home"; // Импортируем Home как компонент

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
      </Routes>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
