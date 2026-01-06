// firebase.js (FINAL, SAFE, MINIMAL)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// ✅ Correct Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBMYpdPB9qheEGc1BlalSAZC1giaHSnbpE",
  authDomain: "buckupmedia-6ad96.firebaseapp.com",
  projectId: "buckupmedia-6ad96",
  storageBucket: "buckupmedia-6ad96.appspot.com", // ✅ FIXED
  messagingSenderId: "931014030006",
  appId: "1:931014030006:web:dda47360939201a1a8ec17"
};

// Initialize Firebase app ONCE
const app = initializeApp(firebaseConfig);

// Export services (ALL from same app)
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
