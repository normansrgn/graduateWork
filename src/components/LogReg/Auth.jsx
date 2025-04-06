import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile,
  onAuthStateChanged 
} from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Auth.scss";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate("/profile");
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
      offset: 50,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
      } else {
        if (formData.password !== formData.confirmPassword) {
          throw new Error("Пароли не совпадают");
        }
        
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          formData.email, 
          formData.password
        );
        
        await updateProfile(userCredential.user, {
          displayName: formData.name,
          phoneNumber: formData.phone
        });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return (
      <div className="welcome-message">
        <h1>Добро пожаловать, {user.displayName || user.email}!</h1>
        <Link to="/profile">Перейти к профилю</Link>
      </div>
    );
  }

  return (
    <section className="auth-section">
      <div className="auth-container" data-aos="fade-right">
        <div className="auth-header">
          <h1>{isLogin ? "Вход" : "Регистрация"}</h1>
          <p>{isLogin ? "Войдите в свой аккаунт" : "Создайте новый аккаунт"}</p>
        </div>

        {error && (
          <div className="auth-error">
            <div className="error-icon">!</div>
            <p>{error}</p>
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <div className="input-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2ZM5 20C5 16.6863 8.68629 14 12 14C15.3137 14 19 16.6863 19 20H5Z"></path>
                </svg>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                required={!isLogin}
              />
            </div>
          )}

          {!isLogin && (
            <div className="form-group">
              <div className="input-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M3 2h18a1 1 0 011 1v18a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm17 8h-2V7h2v3zm0 5h-2v-3h2v3zm0 5h-2v-3h2v3zM6 7h3v3H6V7zm0 5h3v3H6v-3zm0 5h3v3H6v-3zM4 4v16h16V4H4z"></path>
                </svg>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Номер телефона"
                value={formData.phone}
                onChange={handleChange}
                required={!isLogin}
              />
            </div>
          )}

          <div className="form-group">
            <div className="input-icon">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M3 6H21V18H3V6ZM2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM13 8H19V10H13V8ZM18 12H13V14H18V12ZM10.5 10C10.5 11.3807 9.38071 12.5 8 12.5C6.61929 12.5 5.5 11.3807 5.5 10C5.5 8.61929 6.61929 7.5 8 7.5C9.38071 7.5 10.5 8.61929 10.5 10ZM8 13.5C6.067 13.5 4.5 15.067 4.5 17H11.5C11.5 15.067 9.933 13.5 8 13.5Z"></path>
              </svg>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <div className="input-icon">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"></path>
              </svg>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <div className="input-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"></path>
                </svg>
              </div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Повторите пароль"
                value={formData.confirmPassword}
                onChange={handleChange}
                required={!isLogin}
                minLength="6"
              />
            </div>
          )}

          <button 
            type="submit" 
            className="auth-button"
            disabled={loading || 
              !formData.email || 
              !formData.password || 
              (!isLogin && (!formData.name || !formData.confirmPassword))
            }
          >
            {loading ? (
              <span className="spinner"></span>
            ) : isLogin ? (
              "Войти"
            ) : (
              "Зарегистрироваться"
            )}
          </button>

          <div className="auth-footer">
            <p>
              {isLogin ? "Еще нет аккаунта?" : "Уже есть аккаунт?"}
              <button 
                type="button" 
                className="toggle-button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError(null);
                }}
              >
                {isLogin ? " Зарегистрироваться" : " Войти"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Auth;