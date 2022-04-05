import firebase from "firebase";

// FIREBASE VERSION 9
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDCGqfXHO2xeBnxFTG56jsxV1xatdeDEKU",
  authDomain: "linkedin-clone-42951.firebaseapp.com",
  projectId: "linkedin-clone-42951",
  storageBucket: "linkedin-clone-42951.appspot.com",
  messagingSenderId: "283691218633",
  appId: "1:283691218633:web:4e5a944ebd6fa74bd8ff18",
};

// Initialize firebase
// initializeApp(firebaseConfig); -v9

const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize services
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

// NEW WAY OF USING FIREBASE SERVICES - NEW VERSION OF FIREBASE( VERSION 9)
// const db = getFirestore();firease
// const auth = getAuth();
// const provider = new GoogleAuthProvider();
// const storage = getStorage();

export { auth, provider, storage };
export default db;
