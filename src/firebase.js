
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDKI7ypkiZgPIeZe9_YAoivS1-NsnMieMw",
  authDomain: "myportfolio-5a328.firebaseapp.com",
  projectId: "myportfolio-5a328",
  storageBucket: "myportfolio-5a328.appspot.com",
  messagingSenderId: "281373076254",
  appId: "1:281373076254:web:12a6a66d138c93cc23370f",
  measurementId: "G-JF0HCSLRPJ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);