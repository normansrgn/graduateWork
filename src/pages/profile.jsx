import React, { useEffect, useState } from "react";
import { auth } from "../firebaseСonfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import ava from "../components/snealerDetImg/user.png";

import "./profile.scss";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
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

  if (!user) {
    return null;
  }

  return (
    <>
      <section className="profile">
        <Container className="profile__container">
          <div className="profile__dataBlock">
            <img src={ava} alt="" />
            <div className="profile__data">
              <span>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                </svg>{" "}
                {user.displayName}
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                </svg>
                {user.email}
              </span>
            </div>
          </div>

          <button onClick={handleLogout}>Выйти</button>
        </Container>
      </section>
    </>
  );
}

export default Profile;
