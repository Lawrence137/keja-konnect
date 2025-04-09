import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX8mKEIVDwHItZvfZO7WqOju68zlnb6Ik",
  authDomain: "keja-konnect-5c697.firebaseapp.com",
  projectId: "keja-konnect-5c697",
  storageBucket: "keja-konnect-5c697.firebasestorage.app",
  messagingSenderId: "250950063033",
  appId: "1:250950063033:web:415e3f3c237b7f99cd1c68",
  measurementId: "G-9R1HS4WBR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; 