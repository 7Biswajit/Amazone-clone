// //  import  firebase from 'firebase';
   import  firebase from "firebase/compat/app";
  //  import 'firebase/firestore';
  //  import "firebase/compat/auth";
// //  import { initializeApp } from 'firebase/app';
 import "firebase/compat/auth"
 import "firebase/compat/firestore"
// other services is needed
// import { initializeApp } from 'firebase/compat/app';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional



// const initializeApp={}

const firebaseConfig = {
    apiKey: "AIzaSyDtMn2xx2Z9FEL_JSurmUprVwwl0RaGz6k",
    authDomain: "e-challenge-84892.firebaseapp.com",
    projectId: "e-challenge-84892",
    storageBucket: "e-challenge-84892.appspot.com",
    messagingSenderId: "1098951594134",
    appId: "1:1098951594134:web:8920bc286d149add1672b7",
    measurementId: "G-QXJR3WGNDV"
  };

   const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};