import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Testimonials.scss";

const testimonials = [
  {
    name: "Алексей",
    text: "Отличный магазин! Кроссовки пришли быстро, точно соответствуют описанию. Буду заказывать ещё!",
    rating: 5
  },
  {
    name: "Мария",
    text: "Очень довольна покупкой. Качество на высоте, сервис отличный. Рекомендую!",
    rating: 5
  },
  {
    name: "Дмитрий",
    text: "Впервые заказал здесь - не разочаровался. Большой выбор и адекватные цены.",
    rating: 4
  }
];

export default class Testimonials extends Component {
  renderStars(rating) {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  }

  render() {
    return (
      <section className="testimonials">
        <Container>
          <h2 data-aos="fade-up">Что говорят наши клиенты</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="stars">{this.renderStars(testimonial.rating)}</div>
                <p>"{testimonial.text}"</p>
                <div className="author">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }
}