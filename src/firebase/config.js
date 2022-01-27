import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz2Mjwziftb-6UDXRi-fTotSxGOHkwsGo",
  authDomain: "recipes-app-yabu.firebaseapp.com",
  projectId: "recipes-app-yabu",
  storageBucket: "recipes-app-yabu.appspot.com",
  messagingSenderId: "636585519386",
  appId: "1:636585519386:web:c916d3abb5d6b5870ba4a3"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore
const projectFirestore = firebase.firestore();

export { projectFirestore };
