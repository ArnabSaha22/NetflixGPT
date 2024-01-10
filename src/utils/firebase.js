// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAmS74PJVQWN5UXNrvtMdll1PzsdAarAQ",
  authDomain: "netflixgpt-b7267.firebaseapp.com",
  projectId: "netflixgpt-b7267",
  storageBucket: "netflixgpt-b7267.appspot.com",
  messagingSenderId: "979253730173",
  appId: "1:979253730173:web:4ec7d9540bf79c0366ca14",
  measurementId: "G-PWGZRDV819",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
