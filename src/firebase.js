import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDEqPQY3u_ndUnWmUAAm0xiSJGobGU0R_Y",
  authDomain: "firechat-85ff2.firebaseapp.com",
  projectId: "firechat-85ff2",
  storageBucket: "firechat-85ff2.appspot.com",
  messagingSenderId: "578938903049",
  appId: "1:578938903049:web:93e7013707585e9c7176d8",
  measurementId: "G-M8TJ5R1CTY"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}
