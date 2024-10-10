import React, { useEffect, useState } from "react";
import { auth } from "../firebaseСonfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/"); // Перенаправление на главную страницу, если пользователь не авторизован
      }
    });

    return () => unsubscribe(); // Очистка подписки при размонтировании
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Перенаправление на главную страницу после выхода
    } catch (error) {
      console.error("Ошибка при выходе: ", error);
    }
  };

  if (!user) {
    return null; // Если нет пользователя, не отображаем ничего
  }

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <p>Добро пожаловать, {user.displayName || user.email}!</p>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
}

export default Profile;