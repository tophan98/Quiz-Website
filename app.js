// Import Firebase Auth instance from firebase.js
import { auth } from "./firebase.js";

// Import Firebase Auth functions from SDK
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// ======================
// SIGN UP
// ======================
window.signup = function () {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("✅ Account Created! Please login.");
      window.location.href = "login.html"; // redirect to login page
    })
    .catch(err => {
      alert("❌ Error: " + err.message);
    });
};

// ======================
// LOGIN
// ======================
window.login = function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCred => {
      // Save user info in localStorage
      localStorage.setItem("user", userCred.user.email);

      alert("✅ Login Successful!");
      window.location.href = "quiz.html"; // redirect after login
    })
    .catch(err => {
      alert("❌ Error: " + err.message);
    });
};

// ======================
// LOGOUT
// ======================
window.logout = function () {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("user");
      alert("✅ Logged out!");
      window.location.href = "index.html"; // back to home
    })
    .catch(err => {
      alert("❌ Error: " + err.message);
    });
};

// ======================
// SHOW LOGGED-IN USER (quiz.html)
// ======================
if (document.getElementById("userEmail")) {
  const userEmailElement = document.getElementById("userEmail");

  // Listen for auth state changes
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userEmailElement.innerText = "Logged in as: " + user.email;
    } else {
      userEmailElement.innerText = "Not logged in";
    }
  });
}
