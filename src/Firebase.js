// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection } from 'firebase/firestore';



//   const firebaseApp = initializeApp(firebaseConfig);
// const firestore = getFirestore(firebaseApp);
// const collectionRef = collection(firestore, 'people');

// export default {
//   firestore,
//   collectionRef
// };

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2sPfqX6Ml9IqLLPndyhnxihj7JMt_Fms",
    authDomain: "tinder-clone-18b8c.firebaseapp.com",
    projectId: "tinder-clone-18b8c",
    storageBucket: "tinder-clone-18b8c.appspot.com",
    messagingSenderId: "679160162374",
    appId: "1:679160162374:web:ed69efbfd11a1d4745c247",
    measurementId: "G-HQDE6Q9161",
  };

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const collectionRef = collection(firestore, 'people');
export { collectionRef ,onSnapshot};
export default {
  firestore,
  collectionRef,
   // Add this line to export the onSnapshot function
};
