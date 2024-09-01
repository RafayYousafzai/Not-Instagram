import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF1uo1N5Q0BfnNwllayZGIcT4KltYyGDg",
  authDomain: "notinstagram-62f1b.firebaseapp.com",
  projectId: "notinstagram-62f1b",
  storageBucket: "notinstagram-62f1b.appspot.com",
  messagingSenderId: "88543802112",
  appId: "1:88543802112:web:160a0f2a51467a8132b9e5",
  measurementId: "G-WV6RV1GT75",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { firebase, db };
