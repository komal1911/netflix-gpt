// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsYZK5U7rXN6XILmEJ3q9cmMX1i1POU_8",
  authDomain: "netflixgpt-3e1f8.firebaseapp.com",
  projectId: "netflixgpt-3e1f8",
  storageBucket: "netflixgpt-3e1f8.firebasestorage.app",
  messagingSenderId: "892533604674",
  appId: "1:892533604674:web:c844043f98c1ad402f88db",
  measurementId: "G-JDBQSN0KNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export   const auth = getAuth();
