// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbLCYsLPQVNoJsdejwOeI1dd1SRhxJ28w",
  authDomain: "ottclone-19ec5.firebaseapp.com",
  projectId: "ottclone-19ec5",
  storageBucket: "ottclone-19ec5.appspot.com",
  messagingSenderId: "380549203560",
  appId: "1:380549203560:web:3ebacc6804689d7d31dddd",
  measurementId: "G-JB9XFX8BN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
