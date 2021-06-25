import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAYoCF0-sjYCuJk46GlOQP03s9WI9RQnfo",
  authDomain: "slack-clone-11bb3.firebaseapp.com",
  projectId: "slack-clone-11bb3",
  storageBucket: "slack-clone-11bb3.appspot.com",
  messagingSenderId: "399655487009",
  appId: "1:399655487009:web:09e897691d0cf7d979c560"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
