import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Импортируем стили для автоплея

import { Navigation, Pagination, Autoplay } from "swiper";

import img from "./image.png";
import PromImg from "./promImg.png";

import "./__NewFProm.scss"; // Ваши стили

export default function NewFProm() {
  return (
    <>
      <Container>
        <section className="newFeautered">
          <div className="newFeautered__title">
            <h1>Step Into Style with Our Trendy Shoes!</h1>
            <button>SHOP NOW</button>
          </div>
          <div className="newFeautered__slider">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]} // Подключаем модули
              spaceBetween={30}
              loop={true}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000, // Интервал в 1 секунду (1000 миллисекунд)
                disableOnInteraction: false, // Не останавливать автоплей при взаимодействии
              }}
            >
              <SwiperSlide>
                <img src={img} alt="Slide 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img} alt="Slide 2" />
              </SwiperSlide>
              {/* Добавьте больше слайдов по необходимости */}
            </Swiper>
          </div>
        </section>
      </Container>

      <img className="newFeautered__img" src={PromImg} alt="" />
    </>
  );
}
