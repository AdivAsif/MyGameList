import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjamvr66_Zu3KJwpwmyY47gOGMzb3vyPQ",
  authDomain: "mygamelist-aa.firebaseapp.com",
  projectId: "mygamelist-aa",
  storageBucket: "mygamelist-aa.appspot.com",
  messagingSenderId: "366715667172",
  appId: "1:366715667172:web:f8e89110e9ab8bc4cd62f1",
  measurementId: "G-Q5CWMKRGYH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };