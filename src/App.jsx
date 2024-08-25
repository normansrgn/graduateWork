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
import Reg from "./pages/Registration";
import AboutUs from "./pages/AboutUs";
// import NotFound from "./pages/NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.Fragment>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="basket" element={<Basket />} />
          <Route path="log" element={<Log />} />
          <Route path="reg" element={<Reg />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
