// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqEXd2YU0hKSU1f_yJNbeXbCmjKlIOq6I",
  authDomain: "ecommerce11-2022.firebaseapp.com",
  projectId: "ecommerce11-2022",
  storageBucket: "ecommerce11-2022.appspot.com",
  messagingSenderId: "1063001984104",
  appId: "1:1063001984104:web:65badac0266c17efb57fdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);