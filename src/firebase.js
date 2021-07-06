import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4VxUJJ-3BRClNWJD_8QnhRDxW029lTn4",
  authDomain: "mah-slack.firebaseapp.com",
  projectId: "mah-slack",
  storageBucket: "mah-slack.appspot.com",
  messagingSenderId: "310910060802",
  appId: "1:310910060802:web:3644a944c4e9ca43319a1b"
};

// const firebaseApp
// creating app -- to connect front end and backend
const firebaseApp = firebase.initializeApp(firebaseConfig);

// data base
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// goole auth provider
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
