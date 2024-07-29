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

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
      </Routes>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
