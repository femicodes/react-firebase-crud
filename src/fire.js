import firebase from 'firebase';
import 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
    apiKey: "AIzaSyCYKFsMSci2QAzE0YeAtwROSPLhJYmABwU",
    authDomain: "react-fire-81f6e.firebaseapp.com",
    databaseURL: "https://react-fire-81f6e.firebaseio.com",
    projectId: "react-fire-81f6e",
    storageBucket: "",
    messagingSenderId: "316301895370",
    appId: "1:316301895370:web:b3923dd39eac3cc0767633"
};

/* firebase.firestore().settings(settings); */

const fire = firebase.initializeApp(firebaseConfig);
export default fire;