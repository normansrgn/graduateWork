import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, useLocation } from "react-router-dom";
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
import Profile from "./pages/profile";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import Marquee from "./components/Marquee/Marquee";


function App() {
  const location = useLocation();
  const stripePromise = loadStripe("pk_test_51RCI0R2akLwMO1Cu2QIDXanXHsqP8NN8o2S22Eb2HFzCmLxgIPUWOedjpWIzN6QOBqrnZkUKbwiX13I1va7sAdZQ00JNPFdQWW");


  return (
    <>

      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/log" element={<Log />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/checkout" element={<Elements stripe={stripePromise}> <CheckoutPage /> </Elements>} />
          <Route path="/new-featured" element={<NewFeautered />} />
          <Route path="/product/:id" element={<SneakerDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
      
    </>
  );
}

export default App;
