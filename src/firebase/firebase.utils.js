import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyD9v_wN6xVhSeBFjjLfVAfBtzcipZld__o",
  authDomain: "crwn-db-5ffb7.firebaseapp.com",
  databaseURL: "https://crwn-db-5ffb7.firebaseio.com",
  projectId: "crwn-db-5ffb7",
  storageBucket: "crwn-db-5ffb7.appspot.com",
  messagingSenderId: "517761067109",
  appId: "1:517761067109:web:5f277f70b3be9d7813be8c",
  measurementId: "G-MML80W37NS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
