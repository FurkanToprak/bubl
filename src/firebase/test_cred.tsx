// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import * as firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";


export const firebaseConfig = {
    apiKey: "AIzaSyApMUojuot6esBceZv5lRRtklpCx7EQHJs",
    authDomain: "bubl-315.firebaseapp.com",
    databaseURL: "https://bubl-315.firebaseio.com",
    projectId: "bubl-315",
    storageBucket: "bubl-315.appspot.com",
    messagingSenderId: "691431470293",
    appId: "1:691431470293:web:6fe6746b83c5ffcfa21e5c",
    measurementId: "G-ZS5R5WFZ78"
  };

const app  = firebase.initializeApp(firebaseConfig);
export default app;
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();