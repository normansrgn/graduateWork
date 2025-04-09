import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './SneakerOfTheDay.scss';

const SneakerOfTheDay = () => {
  const [sneaker, setSneaker] = useState(null);
  const [timer, setTimer] = useState(24 * 60 * 60); // 24 часа в секундах

  useEffect(() => {
    // Загрузка кроссовка дня (в реальном приложении - API запрос)
    const dailySneaker = {
      id: 1,
      title: "Nike Air Jordan 1 Retro High OG",
      price: 15990,
      oldPrice: 18990,
      image: "jordan-day.jpg",
      discount: 15
    };
    setSneaker(dailySneaker);

    // Таймер обратного отсчета
    const interval = setInterval(() => {
      setTimer(prev => prev > 0 ? prev - 1 : 24 * 60 * 60);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!sneaker) return null;

  return (
    <section className="sneaker-of-the-day">
      <Container>
        <div className="sneaker-day-header">
          <h2>Кроссовок дня</h2>
          <div className="timer">
            <span>До конца акции:</span>
            <div className="time">{formatTime(timer)}</div>
          </div>
        </div>
        
        <div className="sneaker-day-content">
          <div className="sneaker-image">
            <img src={require(`./images/${sneaker.image}`)} alt={sneaker.title} />
            <div className="discount-badge">-{sneaker.discount}%</div>
          </div>
          
          <div className="sneaker-info">
            <h3>{sneaker.title}</h3>
            <div className="prices">
              <span className="current-price">{sneaker.price.toLocaleString()}₽</span>
              <span className="old-price">{sneaker.oldPrice.toLocaleString()}₽</span>
            </div>
            <Button variant="dark" size="lg">Купить сейчас</Button>
            <div className="stock-info">Осталось всего 5 пар!</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SneakerOfTheDay;