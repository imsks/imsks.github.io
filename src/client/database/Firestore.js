import firebase from "./FirebaseConfig";

const db = firebase.firestore();

export const messageRef = db.collection("messages");
