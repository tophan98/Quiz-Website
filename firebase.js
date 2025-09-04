// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ✅ Your Firebase project configuration (copied from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDfITAhx8LPG8T1lGex0lyK7EpCWIDQ0X0",
  authDomain: "quiz-cbb29.firebaseapp.com",
  projectId: "quiz-cbb29",
  storageBucket: "quiz-cbb29.appspot.com",   // 🔥 corrected (was wrong before)
  messagingSenderId: "161535173206",
  appId: "1:161535173206:web:c483f899f4ec36cf9a11f7",
  measurementId: "G-911QKFWWSW"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Authentication & Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
