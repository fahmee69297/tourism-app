// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtvpAmfyzhVNeJHKM414cigBdeLpgA7nQ",
  authDomain: "fadak-tours.firebaseapp.com",
  projectId: "fadak-tours",
  storageBucket: "fadak-tours.firebasestorage.app",
  messagingSenderId: "450527856478",
  appId: "1:450527856478:web:1ff7732cc3799c0326f1cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export the Firestore database
export const db = getFirestore(app);
