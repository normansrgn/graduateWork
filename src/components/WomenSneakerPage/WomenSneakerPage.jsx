import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./menpage.scss";

export default function WomenPage() {
  Aos.init({ duration: 1000 });

  return (
    <div className="menPage">
      <h1 className="menPage__title" data-aos="fade-up">
        Женские 
      </h1>
    </div>
  );
}
