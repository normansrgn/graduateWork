// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkzkbwYy8DWiBiTRzH9DN2OuCk0LVOxzw",
  authDomain: "sneakerwart.firebaseapp.com",
  projectId: "sneakerwart",
  storageBucket: "sneakerwart.appspot.com",
  messagingSenderId: "822895257180",
  appId: "1:822895257180:web:e0be3a7273fcfe12f86899",
  measurementId: "G-CGHCKWWY19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);