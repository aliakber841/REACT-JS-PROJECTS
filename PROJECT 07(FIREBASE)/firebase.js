import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA1y1ObX8p6S-o87R7nvk2VNhxYt-MCn8A",
  authDomain: "react-notes-34ed9.firebaseapp.com",
  projectId: "react-notes-34ed9",
  storageBucket: "react-notes-34ed9.appspot.com",
  messagingSenderId: "621915741795",
  appId: "1:621915741795:web:de4dceea845d4f27d82256"
};


const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
export const notesCollection=collection(db,"notes")