// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdD4ZaHpZmz9ImVxFy79injQVY2x1yZLY",
  authDomain: "szoftvteszt.firebaseapp.com",
  projectId: "szoftvteszt",
  storageBucket: "szoftvteszt.appspot.com",
  messagingSenderId: "642500009188",
  appId: "1:642500009188:web:78051c253a5145848320f1",
  measurementId: "G-9KQ8FQP433"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

console.log("app");