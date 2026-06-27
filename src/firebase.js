// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-4u1RYma1uDaHtDzeg-w0WmVVc5i1cds",
  authDomain: "foundation-team-project.firebaseapp.com",
  projectId: "foundation-team-project",
  storageBucket: "foundation-team-project.firebasestorage.app",
  messagingSenderId: "846100126650",
  appId: "1:846100126650:web:6585b71829997f0cc05b83",
  measurementId: "G-3K2N96922C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (optional, only in browser)
export const analytics = getAnalytics(app);

export default app;
