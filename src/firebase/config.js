// Your web app's Firebase configuration
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
let firebaseConfig = {
    apiKey: `${process.env.local.FIREBASE_API_KEY}`,
    authDomain: "reactimagegallery-a4230.firebaseapp.com",
    projectId: "reactimagegallery-a4230",
    storageBucket: "reactimagegallery-a4230.appspot.com",
    messagingSenderId: "951983162716",
    appId: `${process.env.local.FIREBASE_APPID}`
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};