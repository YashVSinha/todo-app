import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBtYpsAajG8gFHudhApD7lS9iCDhfVVtLI",
  authDomain: "todo-app-cp-af0d8.firebaseapp.com",
  projectId: "todo-app-cp-af0d8",
  storageBucket: "todo-app-cp-af0d8.appspot.com",
  messagingSenderId: "1028374373099",
  appId: "1:1028374373099:web:90082d22557d0ffae0d4ae",
  measurementId: "G-5L3XP89E7D",
});

const db = firebaseApp.firestore();

export default db;
