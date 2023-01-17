import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDJpb909kwO0b059HOIpd6t5EIhoZ21J_Q",
    authDomain: "auth-d3fb4.firebaseapp.com",
    projectId: "auth-d3fb4",
    storageBucket: "auth-d3fb4.appspot.com",
    messagingSenderId: "475907599520",
    appId: "1:475907599520:web:3fe3e4d28f65f4f1f0edc5",
    measurementId: "G-1P99ZSPHKK"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};