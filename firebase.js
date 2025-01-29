// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCurncKlCERp0ze_ApN3-bKBRegeJsZI54",
    authDomain: "primedrylandingpage.firebaseapp.com",
    projectId: "primedrylandingpage",
    storageBucket: "primedrylandingpage.firebasestorage.app",
    messagingSenderId: "22611648142",
    appId: "1:22611648142:web:c46af8ca198e107959f3df",
    measurementId: "G-5X6GLN96YR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
