import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper";

import img from "./image.png";
import PromImg from "./promImg.png";

import "./__NewFProm.scss";
import NewFBlock from "../NewFBlock/NewFBlock";

export default function NewFProm() {
  return (
    <>
      <Container className="newFeautered__container">
        <section className="newFeautered">
          <div className="newFeautered__title">
            <h1>Step Into Style with Our Trendy Shoes!</h1>
            <button>SHOP NOW</button>
          </div>
          <div className="newFeautered__slider">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              loop={true}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <img src={img} alt="Slide 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img} alt="Slide 2" />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </Container>

      <img className="newFeautered__img" src={PromImg} alt="" />
      <Container>
        <NewFBlock />
      </Container>
    </>
  );
}
