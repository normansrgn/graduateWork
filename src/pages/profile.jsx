import React, { useEffect, useState } from "react";
import { auth } from "../firebaseСonfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import ava from "../components/snealerDetImg/user.png";
import "./profile.scss";

function Profile() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
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

  if (!user) {
    return null;
  }

  return (
    <section className="profile">
      <Container className="profile__container">
        <div className="profile__card">
          <div className="profile__header">
            <div className="profile__avatar-container">
              <img 
                src={user.photoURL || ava} 
                alt="Аватар" 
                className="profile__avatar"
                onError={(e) => {
                  e.target.src = ava;
                }}
              />
              <div className="profile__status"></div>
            </div>
            <h2 className="profile__name">{user.displayName || "Пользователь"}</h2>
            <p className="profile__email">{user.email}</p>
          </div>

          <div className="profile__details">
            <div className="profile__detail-item">
              <div className="profile__detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                </svg>
              </div>
              <div className="profile__detail-content">
                <span className="profile__detail-label">Имя пользователя</span>
                <span className="profile__detail-value">{user.displayName || "Не указано"}</span>
              </div>
            </div>

            <div className="profile__detail-item">
              <div className="profile__detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                </svg>
              </div>
              <div className="profile__detail-content">
                <span className="profile__detail-label">Email</span>
                <span className="profile__detail-value">{user.email}</span>
              </div>
            </div>

            <div className="profile__detail-item">
              <div className="profile__detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                </svg>
              </div>
              <div className="profile__detail-content">
                <span className="profile__detail-label">Телефон</span>
                <span className="profile__detail-value">{user.phoneNumber || "Не указан"}</span>
              </div>
            </div>

            <div className="profile__detail-item">
              <div className="profile__detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4C16.418 4 20 7.582 20 12C20 16.418 16.418 20 12 20ZM13 7H11V13H17V11H13V7Z"></path>
                </svg>
              </div>
              <div className="profile__detail-content">
                <span className="profile__detail-label">Дата регистрации</span>
                <span className="profile__detail-value">
                  {user.metadata?.creationTime ? 
                    new Date(user.metadata.creationTime).toLocaleDateString() : 
                    "Неизвестно"}
                </span>
              </div>
            </div>
          </div>

          <div className="profile__actions">
           
            <button className="profile__btn profile__btn--logout" onClick={handleLogout}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z"></path>
              </svg>
              Выйти
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Profile;