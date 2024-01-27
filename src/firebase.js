import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDUGgjHNgExscBHdRZde3iJ1ESHrqK1gRs",
  authDomain: "seatwise.firebaseapp.com",
  projectId: "seatwise",
  storageBucket: "seatwise.appspot.com",
  messagingSenderId: "528619276557",
  appId: "1:528619276557:web:40cea8a84ecf93dba5c844"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)  
export const db = getFirestore(app);