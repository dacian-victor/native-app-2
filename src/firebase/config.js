import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwiDVEEs1BQ0SeHZkjzs5UyLGr0Y6Ham4",
  authDomain: "itemlistenerdb.firebaseapp.com",
  databaseURL: "https://itemlistenerdb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "itemlistenerdb",
  storageBucket: "itemlistenerdb.appspot.com",
  messagingSenderId: "419498059630",
  appId: "1:419498059630:web:4af34a66e046fca887037f",
  measurementId: "G-X5JJBEC9EE"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase };

//const app = initializeApp(firebaseConfig);
//export const db = getFirestore(app);

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);