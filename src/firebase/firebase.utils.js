import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA8tZEFENrsUCceooS-MuFhjnZe96q_yD4",
  authDomain: "jarp-crwn-db.firebaseapp.com",
  databaseURL: "https://jarp-crwn-db.firebaseio.com",
  projectId: "jarp-crwn-db",
  storageBucket: "jarp-crwn-db.appspot.com",
  messagingSenderId: "649421570543",
  appId: "1:649421570543:web:3f341f7e6a3eb4242cb61a",
  measurementId: "G-D890XEP2CB",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShop = await userRef.get();

  if (!snapShop.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
