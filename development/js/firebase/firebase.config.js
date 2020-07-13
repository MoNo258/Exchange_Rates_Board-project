// import {firebaseConfigData} from "../services/constants";
import firebaseConfigData from "../services/constants";
// const firebaseConfigData = require("../services/constants");
import firebase from 'firebase/app';
import 'firebase/auth';



// Initialize Firebase
firebase.initializeApp(firebaseConfigData);

export default firebase;