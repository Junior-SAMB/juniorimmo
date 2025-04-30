import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXx1X2FCpJAdgwW-U5W99ScWO03laoZYg",
  authDomain: "villas-5c3ae.firebaseapp.com",
  projectId: "villas-5c3ae",
  storageBucket: "villas-5c3ae.appspot.com",
  messagingSenderId: "579493114505",
  appId: "1:579493114505:web:14b2ed5cdcfb78cbd50c58"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)