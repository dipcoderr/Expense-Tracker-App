// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth' 
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG1nQA-oXCHyKHqLxaWCImaZlc3u5d1kk",
  authDomain: "expense-tracker-7ae06.firebaseapp.com",
  projectId: "expense-tracker-7ae06",
  storageBucket: "expense-tracker-7ae06.appspot.com",
  messagingSenderId: "292362658017",
  appId: "1:292362658017:web:3f337cbe6af20be79997a0",
  measurementId: "G-9NSC1NK5BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy

