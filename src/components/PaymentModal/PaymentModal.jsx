import React from "react";
import { Modal, Button } from "react-bootstrap";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./PaymentModal.scss";

const PaymentModal = ({ show, onClose, amount, cartItems, navigate }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        alert(error.message);
        return;
      }

      // Тут можно отправить paymentMethod.id на бэкенд для обработки платежа
      alert("Оплата прошла успешно!");
      onClose();
      navigate("/success"); // перенаправление на страницу успешной оплаты
    } catch (err) {
      alert("Ошибка оплаты: " + err.message);
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Оплата заказа</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
          </div>
          <button
            type="submit"
            disabled={!stripe}
            className="btn btn-primary w-100"
          >
            Оплатить {new Intl.NumberFormat("ru-RU").format(amount)}₽
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentModal;