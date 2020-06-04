import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZ6ndDAG7tD8PlzjX_evoLUHgvJyuM2uQ",
  authDomain: "sachin-shukla.firebaseapp.com",
  databaseURL: "https://sachin-shukla.firebaseio.com",
  projectId: "sachin-shukla",
  storageBucket: "sachin-shukla.appspot.com",
  messagingSenderId: "299822090814",
  appId: "1:299822090814:web:6c449477079a383168df6f",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
