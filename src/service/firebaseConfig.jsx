import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDaFAmiodQbKqAKYl04L-Sfn7AAyP9uue4",
  authDomain: "supply-chain-mobile-app.firebaseapp.com",
  projectId: "supply-chain-mobile-app",
  storageBucket: "supply-chain-mobile-app.firebasestorage.app",
  messagingSenderId: "136569618759",
  appId: "1:136569618759:web:8bd9c9703446cdf3f1cc62",
  measurementId: "G-93QJCLYZJ6"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);