// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj7Li51zOsx7PJ7B2x1fskYbiPgNmXbyY",
  authDomain: "blog-website-b5d32.firebaseapp.com",
  projectId: "blog-website-b5d32",
  storageBucket: "blog-website-b5d32.firebasestorage.app",
  messagingSenderId: "328190071078",
  appId: "1:328190071078:web:3d269c533784435e99f1e7",
  measurementId: "G-ZSBCQBBMLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);