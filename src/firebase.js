import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyD314Im0mFzfWakvRKGFPMNoNOVg6KGefE",
    authDomain: "twitter-clone-164ab.firebaseapp.com",
    projectId: "twitter-clone-164ab",
    storageBucket: "twitter-clone-164ab.appspot.com",
    messagingSenderId: "747827952630",
    appId: "1:747827952630:web:f0960add0473dac6ef65d7",
    measurementId: "G-CXBT4N16LS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth, db};



