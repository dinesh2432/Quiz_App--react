// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAk5e7_3kiU0ZMCEPy5CsOXKNSS5SgbCr8",
//   authDomain: "loginauth-e3cbb.firebaseapp.com",
//   projectId: "loginauth-e3cbb",
//   storageBucket: "loginauth-e3cbb.firebasestorage.app",
//   messagingSenderId: "837428894783",
//   appId: "1:837428894783:web:9fe19121663678050dac8a"
// };


// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// export default app


// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";

// ✅ Your Firebase config (make sure the authDomain is correct)
const firebaseConfig = {
  apiKey: "AIzaSyAk5e7_3kiU0ZMCEPy5CsOXKNSS5SgbCr8",
  authDomain: "loginauth-e3cbb.firebaseapp.com",
  projectId: "loginauth-e3cbb",
  storageBucket: "loginauth-e3cbb.appspot.com",  // ✅ fixed typo: should be "appspot.com"
  messagingSenderId: "837428894783",
  appId: "1:837428894783:web:9fe19121663678050dac8a"
};

// ✅ Initialize Firebase app and auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Sign in function that works on mobile and desktop
export const signInWithGoogle = () => {
  signInWithRedirect(auth, provider); // Use redirect for better mobile support
};

// ✅ Handle the result after redirect
export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result) {
      const user = result.user;
      console.log("✅ User signed in:", user.displayName);
      return user;
    }
  } catch (error) {
    console.error("❌ Error during Google redirect login:", error.message);
  }
};

export { auth };
export default app;
