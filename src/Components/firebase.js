import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAXeTzgBXhvXPavnQkDaApfoeIbr069xQI",
    authDomain: "e-commerce-eshop.firebaseapp.com",
    projectId: "e-commerce-eshop",
    storageBucket: "e-commerce-eshop.appspot.com",
    messagingSenderId: "520889958817",
    appId: "1:520889958817:web:4e6cf7302668deca018be0",
    measurementId: "G-6793JDKE6S"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

