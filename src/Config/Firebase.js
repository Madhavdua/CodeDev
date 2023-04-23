// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore}  from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBCDiyfkVZKdVT5PxGrLuO9Lm0EATNFTQ",
  authDomain: "code-dev-3e10e.firebaseapp.com",
  projectId: "code-dev-3e10e",
  storageBucket: "code-dev-3e10e.appspot.com",
  messagingSenderId: "866532320119",
  appId: "1:866532320119:web:14df11ced803b5ca44f772",
  measurementId: "G-LJJ4ZYSWB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();
export const db=getFirestore(app);
// const analytics = getAnalytics(app);