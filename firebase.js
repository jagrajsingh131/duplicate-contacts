import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBMYpdPB9qheEGc1BlalSAZC1giaHSnbpE",
  authDomain: "buckupmedia-6ad96.firebaseapp.com",
  projectId: "buckupmedia-6ad96",
  storageBucket: "buckupmedia-6ad96.appspot.com",
  messagingSenderId: "931014030006",
  appId: "1:931014030006:web:dda47360939201a1a8ec17"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Force long polling to reduce “offline” issues in some networks
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false
});

export const storage = getStorage(app);
