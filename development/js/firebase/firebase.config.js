// import {firebaseConfigData} from "../services/constants";
const firebaseConfigData = require("../services/constantsFirebase")
import firebase from 'firebase/app';
import 'firebase/auth';



// Initialize Firebase
firebase.initializeApp(firebaseConfigData);

export default firebase;