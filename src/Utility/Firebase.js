import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLeC2D5iT8gxd1O7tXvg1yy46tjKMjNWQ",
  authDomain: "clone-41fe6.firebaseapp.com",
  projectId: "clone-41fe6",
  storageBucket: "clone-41fe6.firebasestorage.app",
  messagingSenderId: "130679818186",
  appId: "1:130679818186:web:145d0112ae233ac4ea3133",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
