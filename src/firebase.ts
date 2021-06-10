// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
// Required for side-effects
require("firebase/firestore");

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyBMo4AtDGEWhsxDAiDiHez6jU_PUq6VUOY",
    authDomain: "modelion-6f30c.firebaseapp.com",
    projectId: "modelion-6f30c",
    storageBucket: "modelion-6f30c.appspot.com",
    messagingSenderId: "619882528496",
    appId: "1:619882528496:web:0eea8a4bbe18ae13a60c35",
    measurementId: "G-G8J2VK21YB"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

window.firebase = firebase;
window.db = db;

//examples
// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });

// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} =>`, doc.data());
//     });
// });