// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9tMXwqU7ijIKnQu0vsX1UoR9FM_w7r2E",
  authDomain: "blog-5814a.firebaseapp.com",
  projectId: "blog-5814a",
  storageBucket: "blog-5814a.appspot.com",
  messagingSenderId: "787500061298",
  appId: "1:787500061298:web:242f526d6800f0bbbf68eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();