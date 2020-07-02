import firebase from 'firebase/app';
import 'firebase/auth';
import {firebaseConfig} from "../services/secret";


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;