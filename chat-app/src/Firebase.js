// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD70Hvostg5bos1KK1iCxFl39FRCYFxGq8",
  authDomain: "chat-app-6cf59.firebaseapp.com",
  projectId: "chat-app-6cf59",
  storageBucket: "chat-app-6cf59.appspot.com",
  messagingSenderId: "330859683126",
  appId: "1:330859683126:web:d1b03c184cb2972f7ea797"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
