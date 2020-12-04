import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD81gW-6r5CYr7Joct3zjPL1Eryntb3RjY",
    authDomain: "digibujoproject5.firebaseapp.com",
    databaseURL: "https://digibujoproject5.firebaseio.com",
    projectId: "digibujoproject5",
    storageBucket: "digibujoproject5.appspot.com",
    messagingSenderId: "897137595662",
    appId: "1:897137595662:web:30fb6d9f801e90cefb735f"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

export default firebase;