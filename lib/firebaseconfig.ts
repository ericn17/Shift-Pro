// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdwBPJZNow6FvrC_a8mu1pGymnhRb47w4",
  authDomain: "shift-pro-1cef9.firebaseapp.com",
  projectId: "shift-pro-1cef9",
  storageBucket: "shift-pro-1cef9.appspot.com",
  messagingSenderId: "783974307364",
  appId: "1:783974307364:web:5018fb03383e6d99caaab1",
  measurementId: "G-D3N199K8EM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };   