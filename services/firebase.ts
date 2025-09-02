// Fix: Correct Firebase initialization to resolve module export error.
// The original import for 'initializeApp' was causing an error, likely due to a
// project configuration or dependency version issue. Using the Firebase v9 compat
// library for initialization provides a stable alternative that works seamlessly
// with the v9 modular APIs used throughout the rest of the application.
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// IMPORTANT: Replace with your own Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh3m3KMuVVIC53DkKpJaQyjZoRnCOS6iQ",
  authDomain: "faq1-a8fa2.firebaseapp.com",
  projectId: "faq1-a8fa2",
  storageBucket: "faq1-a8fa2.appspot.com",
  messagingSenderId: "265196948796",
  appId: "1:265196948796:web:04ab2bc201e171d945a239"
};

firebase.initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };