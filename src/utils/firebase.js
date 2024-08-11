// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAQYiSTbS3BF-pJo3TuaPc1eRaLyZpx5dg",
  authDomain: "linkedin-17df8.firebaseapp.com",
  projectId: "linkedin-17df8",
  storageBucket: "linkedin-17df8.appspot.com",
  messagingSenderId: "825634578071",
  appId: "1:825634578071:web:65424792e9c50fbf5053d2",
  measurementId: "G-ZNWZQXXJVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage();
// const analytics = getAnalytics(app);