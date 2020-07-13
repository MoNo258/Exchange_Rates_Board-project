import {firebaseConfigData} from "../services/constants";
import firebase from 'firebase/app';
import 'firebase/auth';

// import firebaseConfigData from "../services/constants";

// Initialize Firebase
firebase.initializeApp(firebaseConfigData);

export default firebase;