// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALaKwXDRzA_IQ2WqNfNZGJ7vAT1jFLZ18",
  authDomain: "assignment-12-9cc01.firebaseapp.com",
  projectId: "assignment-12-9cc01",
  storageBucket: "assignment-12-9cc01.appspot.com",
  messagingSenderId: "786851111614",
  appId: "1:786851111614:web:acc99901f74bae5f91f4ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
