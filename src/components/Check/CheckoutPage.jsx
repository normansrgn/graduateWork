import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./__check.scss";

function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems = [], totalPrice = 0 } = location.state || {};
  const [phone, setPhone] = useState("");
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const cleanedValue = value.replace(/[^\d+]/g, '');
    
    if (!cleanedValue.startsWith("+7")) {
      const digits = cleanedValue.replace(/\D/g, '');
      setPhone("+7" + digits.slice(0, 10));
    } else {
      setPhone(cleanedValue.slice(0, 12));
    }
  };

  const handlePhoneFocus = () => {
    setIsPhoneFocused(true);
    if (!phone) setPhone("+7");
  };

  const handlePhoneBlur = () => {
    setIsPhoneFocused(false);
    if (phone === "+7") setPhone("");
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + '₽';
  };

  const handleOpenPaymentModal = () => {
    setShowModal(true);
  };

  const handleClosePaymentModal = () => {
    setShowModal(false);
  };

  const stripe = useStripe();
  const elements = useElements();

  const handleConfirmPayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      alert(error.message);
      return;
    }

    const newOrder = {
      id: `#${Date.now()}`,
      date: new Date().toISOString(),
      items: cartItems.map(item => ({
        ...item,
        price: Number(item.price),
        quantity: Number(item.quantity)
      })),
      total: totalPrice,
      status: "В обработке"
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    localStorage.setItem('orders', JSON.stringify([newOrder, ...existingOrders]));
    localStorage.removeItem('cart');

    navigate('/profile');
    setShowModal(false);
  };

  return (
    <>
      <h1 className="checkoutPage__title">Оформление заказа</h1>

      <Container>
        <h2 className="userInfo__title">Личные данные</h2>
      </Container>

      <Container className="checkCont">
        <div className="userInfo">
          <div className="userInfo__content">
            <form className="userInfo__form">
              <div className="login__input">
                <i className="login__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(255,254,254,1)">
                    <path d="M3 6H21V18H3V6ZM2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM13 8H19V10H13V8ZM18 12H13V14H18V12ZM10.5 10C10.5 11.3807 9.38071 12.5 8 12.5C6.61929 12.5 5.5 11.3807 5.5 10C5.5 8.61929 6.61929 7.5 8 7.5C9.38071 7.5 10.5 8.61929 10.5 10ZM8 13.5C6.067 13.5 4.5 15.067 4.5 17H11.5C11.5 15.067 9.933 13.5 8 13.5Z"></path>
                  </svg>
                </i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Имя и Фамилия"
                  required
                />
              </div>
              <div className="login__input">
                <i className="login__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(255,255,255,1)">
                    <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                  </svg>
                </i>
                <input
                  type="tel"
                  className="login__input"
                  placeholder={isPhoneFocused ? "" : "Номер телефона"}
                  value={phone}
                  onChange={handlePhoneChange}
                  onFocus={handlePhoneFocus}
                  onBlur={handlePhoneBlur}
                  required
                  pattern="\+7\d{10}"
                  title="Формат: +7XXXXXXXXXX"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="checkoutPage">
          {cartItems.length > 0 ? (
            <div className="checkoutPage__card">
              <div className="checkoutPage__items">
                {cartItems.map((item, index) => (
                  <div key={index} className="checkoutPage__item">
                    <div className="checkoutPage__imageee">
                      <img src={item.img} alt={item.title} className="checkoutPage__image" />
                      <div className="checkoutPage__titleBl">
                        <span className="checkoutPage__itemTitle">{item.title}</span>
                      </div>
                    </div>
                    <div className="checkoutPage__details">
                      <span className="checkoutPage__itemPrice">{formatPrice(item.price * (item.quantity || 1))}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="checkoutPage__total">
                <div>К оплате:</div>
                <span>{formatPrice(totalPrice)}</span>
              </div>

              <button 
                className="checkoutPage__confirmButton"
                onClick={handleOpenPaymentModal}
                disabled={cartItems.length === 0}
              >
                Перейти к оплате
              </button>
            </div>
          ) : (
            <p className="empty-cart-message">Ваша корзина пуста</p>
          )}
        </div>
      </Container>

      {/* Модальное окно оплаты */}
      <Modal 
        show={showModal} 
        onHide={handleClosePaymentModal} 
        centered
        className="payment-modal"
      >
        <Modal.Header closeButton className="payment-modal__header">
          <Modal.Title className="payment-modal__title">Оплата заказа</Modal.Title>
        </Modal.Header>
        <Modal.Body className="payment-modal__body">
          <div className="payment-modal__order-summary">
            <h4 className="payment-modal__summary-title">Ваш заказ:</h4>
            <div className="payment-modal__order-items">
              {cartItems.map((item, index) => (
                <div key={index} className="payment-modal__order-item">
                  <div className="payment-modal__item-image-container">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="payment-modal__item-image" 
                    />
                    <span className="payment-modal__item-quantity">{item.quantity || 1}</span>
                  </div>
                  <div className="payment-modal__item-details">
                    <h5 className="payment-modal__item-title">{item.title}</h5>
                    <p className="payment-modal__item-price">{formatPrice(item.price * (item.quantity || 1))}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="payment-modal__order-total">
              <span>Итого:</span>
              <span className="payment-modal__total-price">{formatPrice(totalPrice)}</span>
            </div>
          </div>

          <form onSubmit={handleConfirmPayment} className="payment-modal__form">
            <h4 className="payment-modal__form-title">Данные карты</h4>
            <div className="payment-modal__card-element">
              <CardElement 
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                }}
              />
            </div>
            <Button 
              variant="primary" 
              type="submit" 
              disabled={!stripe} 
              className="payment-modal__submit-button"
            >
              Оплатить {formatPrice(totalPrice)}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CheckoutPage;