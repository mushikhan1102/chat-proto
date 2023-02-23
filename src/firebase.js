// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3H4YEyiCrr77ATwsIT4Tc5kLVsADUHM0",
  authDomain: "cobit-connect.firebaseapp.com",
  databaseURL: "https://cobit-connect-default-rtdb.firebaseio.com",
  projectId: "cobit-connect",
  storageBucket: "cobit-connect.appspot.com",
  messagingSenderId: "158244046036",
  appId: "1:158244046036:web:6f2ccfb3f9994fdea3a741",
  measurementId: "G-0SDLZ0FYNK"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)