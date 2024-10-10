import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkzkbwYy8DWiBiTRzH9DN2OuCk0LVOxzw",
  authDomain: "sneakerwart.firebaseapp.com",
  projectId: "sneakerwart",
  storageBucket: "sneakerwart.appspot.com",
  messagingSenderId: "822895257180",
  appId: "1:822895257180:web:e0be3a7273fcfe12f86899",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
