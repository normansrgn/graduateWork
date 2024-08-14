import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home"; // Импортируем Home как компонент
import Men from "./pages/Men";
import Women from "./pages/Women";
import Basket from "./pages/Basket";
import ScrollToTop from "./components/ScrollTop/ScrollTop";
import Log from "./pages/Login";
import NotFound from "./pages/NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.Fragment>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="basket" element={<Basket />} />
        <Route path="log" element={<Log />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
