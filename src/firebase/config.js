import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk2ZLIefjJJtTeVfZf0bs9S-osl8vP0jM",
  authDomain: "cooking-ninja-site-67a96.firebaseapp.com",
  projectId: "cooking-ninja-site-67a96",
  storageBucket: "cooking-ninja-site-67a96.appspot.com",
  messagingSenderId: "254676090196",
  appId: "1:254676090196:web:cda2fc4e316ab815891cc1",
};

// init firebase
// this method connects do firebase BE
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
