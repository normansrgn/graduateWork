import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3001;
const TELEGRAM_TOKEN = "7369490699:AAGeEBrwyBYDURUZGRQnogGicyKMT8bemho";

app.use(bodyParser.json());

app.post("/send-order", (req, res) => {
  const { name, phone, email, address, telegramId, cartItems, totalPrice } = req.body;

  const message = `
    Новый заказ:
    Имя: ${name}
    Телефон: ${phone}
    Email: ${email}
    Адрес: ${address}
    Товары: ${cartItems.map((item) => item.title).join(", ")}
    Общая сумма: ${totalPrice}$
  `;

  axios
    .post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: telegramId,
      text: message,
    })
    .then((response) => {
      console.log("Message sent:", response.data);
      res.status(200).send("Order sent to Telegram");
    })
    .catch((error) => {
      console.error("Error sending message:", error.response ? error.response.data : error.message);
      res.status(500).send("Failed to send order to Telegram");
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});