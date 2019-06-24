import * as firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ_VQDMws4LQvEKjaY4nlaX-yLytroaD4",
  authDomain: "adrian-marquez.firebaseapp.com",
  databaseURL: "https://adrian-marquez.firebaseio.com",
  projectId: "adrian-marquez",
  storageBucket: "adrian-marquez.appspot.com",
  messagingSenderId: "316018229692",
  appId: "1:316018229692:web:f86737b682d47f73"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
