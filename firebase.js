// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMYpdPB9qheEGc1BlalSAZC1giaHSnbpE",
  authDomain: "buckupmedia-6ad96.firebaseapp.com",
  projectId: "buckupmedia-6ad96",
  storageBucket: "buckupmedia-6ad96.firebasestorage.app",
  messagingSenderId: "931014030006",
  appId: "1:931014030006:web:dda47360939201a1a8ec17",
  measurementId: "G-1CJCCQ2B5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
