// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import {getFirestore} from 'firebase/firestore'
 import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_cESu4CnwIRMXsJDzBXSRvVltSsNj_iQ",
  authDomain: "shopeomedia.firebaseapp.com",
  projectId: "shopeomedia",
  storageBucket: "shopeomedia.firebasestorage.app",
  messagingSenderId: "840238622362",
  appId: "1:840238622362:web:471812c945d4263cc72123"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
 const db = getFirestore(app)
 const auth = getAuth(app)
export{app as firebaseApp,db,auth}