
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBVWpvnIkBhTQQ6S4izIGsw4ZB17jgyYAA",
  authDomain: "movielist-a7639.firebaseapp.com",
  projectId: "movielist-a7639",
  storageBucket: "movielist-a7639.appspot.com",
  messagingSenderId: "121512244869",
  appId: "1:121512244869:web:1a5dceb4015811b5be5bec",
  measurementId: "G-BH0LXSQWKR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)