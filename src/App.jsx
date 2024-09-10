import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Basket from "./pages/Basket";
import ScrollToTop from "./components/ScrollTop/ScrollTop";
import Log from "./pages/Login";
import Reg from "./pages/Registration";
import AboutUs from "./pages/AboutUs";
import CheckoutPage from "./components/Check/CheckoutPage";
import NewFeautered from "./pages/NewFeautered";
import SneakerDetail from "./pages/SneakerDetail";

function App() {
  const location = useLocation();

  // Список маршрутов, на которых не должны отображаться Header и Footer
  const noHeaderFooterRoutes = ["/reg", "/log", "/checkout"];

  const shouldHideHeaderFooter = noHeaderFooterRoutes.includes(
    location.pathname
  );


  return (
    <React.Fragment>
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="basket" element={<Basket />} />
          <Route path="log" element={<Log />} />
          <Route path="reg" element={<Reg />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/new-featured" element={<NewFeautered />} />
          <Route path="/sneaker/:id" element={<SneakerDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default App;
