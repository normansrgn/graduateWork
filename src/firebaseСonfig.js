import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Добавляем Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDkzkbwYy8DWiBiTRzH9DN2OuCk0LVOxzw",
  authDomain: "sneakerwart.firebaseapp.com",
  projectId: "sneakerwart",
  storageBucket: "sneakerwart.appspot.com",
  messagingSenderId: "822895257180",
  appId: "1:822895257180:web:e0be3a7273fcfe12f86899",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Инициализация аутентификации и Firestore
const auth = getAuth(app);
const db = getFirestore(app); // Инициализация Firestore

// Экспортируем auth и db
export { auth, db };