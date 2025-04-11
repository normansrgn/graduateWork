import React, { useEffect, useState } from "react";
import { auth } from "../firebaseСonfig";
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import ava from "../components/snealerDetImg/user.png";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiClock,
  FiShoppingBag,
  FiLogOut
} from "react-icons/fi";
import "./profile.scss";

function Profile() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + '₽';
  };

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoading(false);
      if (user) {
        setUser(user);
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/log");
    } catch (error) {
      console.error("Ошибка при выходе: ", error);
    }
  };

  if (isLoading) {
    return (
      <div className="profile-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <section className="profile">
      <Container className="profile__container">
        <div className="profile__grid">
          <div className="profile__sidebar">
            <div className="profile__card">
              <div className="profile__header">
                <div className="profile__avatar-wrapper">
                  <img
                    src={user.photoURL || ava}
                    alt="Аватар"
                    className="profile__avatar"
                    onError={(e) => e.target.src = ava}
                  />
                  <div className="profile__status-indicator"></div>
                </div>
                <h2 className="profile__name">{user.displayName || "Пользователь"}</h2>
                <p className="profile__email">{user.email}</p>
              </div>

              <div className="profile__details">
                <div className="profile__detail-item">
                  <FiUser className="profile__detail-icon" />
                  <div className="profile__detail-content">
                    {/* <span className="profile__detail-label">Имя пользователя</span> */}
                    <span className="profile__detail-value">{user.displayName || "Не указано"}</span>
                  </div>
                </div>

                <div className="profile__detail-item">
                  <FiMail className="profile__detail-icon" />
                  <div className="profile__detail-content">
                    {/* <span className="profile__detail-label">Электронная почта</span> */}
                    <span className="profile__detail-value">{user.email}</span>
                  </div>
                </div>

                {/* <div className="profile__detail-item">
                  <FiPhone className="profile__detail-icon" />
                  <div className="profile__detail-content">
                    <span className="profile__detail-label">Телефон</span>
                    <span className="profile__detail-value">{user.phoneNumber || "Не указан"}</span>
                  </div>
                </div> */}

                <div className="profile__detail-item">
                  <FiClock className="profile__detail-icon" />
                  <div className="profile__detail-content">
                    <span className="profile__detail-label">Дата регистрации</span>
                    <span className="profile__detail-value">
                      {new Date(user.metadata.creationTime).toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <button
                className="profile__logout-btn"
                onClick={handleLogout}
              >
                <FiLogOut className="logout-icon" />
                <span>Выйти из аккаунта</span>
              </button>
            </div>
          </div>

          <div className="profile__orders">
            <div className="orders__header">
              <h2 className="orders__title">
                <FiShoppingBag className="orders__title-icon" />
                История покупок
              </h2>
              <span className="orders__count">{orders.length} заказов</span>
            </div>

            {orders.length === 0 ? (
              <div className="orders__empty">
                <img
                  src="/empty-orders.svg"
                  alt="Нет заказов"
                  className="orders__empty-image"
                />
                <p className="orders__empty-text">У вас пока нет завершенных покупок</p>
                <Link to="/men">
                  <button className="profile__sale">Перейти в каталог</button>
                </Link>

              </div>
            ) : (
              <div className="orders__list">
                {orders.map((order) => (
                  <div key={order.id} className="order__card">
                    <div className="order__header">
                      <div className="order__meta">
                        <span className="order__id">Заказ #{order.id}</span>
                        <span className="order__date">
                          {new Date(order.date).toLocaleDateString('ru-RU', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className={`order__status order__status--${order.status.toLowerCase()}`}>
                        {order.status}
                      </div>
                    </div>

                    <div className="order__items">
                      {order.items.map((item, index) => (
                        <div key={index} className="order__item">
                          <div className="order__item-image-wrapper">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="order__item-image"
                            />
                          </div>
                          <div className="order__item-info">
                            <h3 className="order__item-title">{item.title}</h3>
                            {item.size && (
                              <span className="order__item-size">Размер: {item.size}</span>
                            )}
                          </div>
                          <div className="order__item-pricing">
                            <span className="order__item-quantity">x{item.quantity}</span>
                            <span className="order__item-price">{formatPrice(item.price * item.quantity)}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="order__footer">
                      <div className="order__total">
                        <span>Общая сумма:</span>
                        <span className="order__total-price">{formatPrice(order.total)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Profile;