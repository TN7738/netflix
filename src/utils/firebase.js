// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfgWjkIe897D1eMM1kJy2r2vB2BchmzhM",
  authDomain: "netflix-a5b36.firebaseapp.com",
  projectId: "netflix-a5b36",
  storageBucket: "netflix-a5b36.appspot.com",
  messagingSenderId: "17619970740",
  appId: "1:17619970740:web:6486e8983407ebdb3305e1",
  measurementId: "G-6BFCBNFDC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();