import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAk5e7_3kiU0ZMCEPy5CsOXKNSS5SgbCr8",
  authDomain: "loginauth-e3cbb.firebaseapp.com",
  projectId: "loginauth-e3cbb",
  storageBucket: "loginauth-e3cbb.firebasestorage.app",
  messagingSenderId: "837428894783",
  appId: "1:837428894783:web:9fe19121663678050dac8a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app