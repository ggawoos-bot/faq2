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
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
