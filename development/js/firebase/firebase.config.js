import {firebaseConfigData} from "../services/constants";
import firebase from 'firebase/app';
import 'firebase/auth';



// Initialize Firebase
firebase.initializeApp(firebaseConfigData);

export default firebase;