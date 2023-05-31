import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2sPfqX6Ml9IqLLPndyhnxihj7JMt_Fms",
    authDomain: "tinder-clone-18b8c.firebaseapp.com",
    projectId: "tinder-clone-18b8c",
    storageBucket: "tinder-clone-18b8c.appspot.com",
    messagingSenderId: "679160162374",
    appId: "1:679160162374:web:ed69efbfd11a1d4745c247",
    measurementId: "G-HQDE6Q9161",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const collectionRef = database.collection('people');

export default {
  database,
  collectionRef
};
