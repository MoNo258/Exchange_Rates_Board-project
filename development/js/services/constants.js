import {KEY_FIXER, USER_ID_XTB, USER_PSSWRD_XTB, firebaseConfig} from "../services/secret" // for heroku this MUST be commented out


// //API FIXER (used in components/Rates.js)
export const API_KEY_REST = `?access_key=${KEY_FIXER}`; // sourced from services/secret.js // for heroku this MUST be commented out
// export const API_KEY_REST = `?access_key=${process.env.KEY_FIXER}`; // sourced from heroku Config Vars // NEEDED for `git push heroku master`

export const API_URL_REST = 'http://data.fixer.io/api';
export const latest_REST = '/latest'; //option for latest spots -> http://data.fixer.io/api/latest?access_key=YOUR_ACCESS_KEY&base=JPY&symbols=USD,AUD,CAD,PLN,MXN


// //API NBP (used in components/RatesWithChange.js)
export const API_NBP = 'https://api.nbp.pl/api/exchangerates/tables/C';


// //API XTB WebSocket (used in components/News.js)
export const userIdXTB = USER_ID_XTB; // sourced from services/secret.js // for heroku this MUST be commented out
// export const userIdXTB = process.env.USER_ID_XTB; // sourced from heroku Config Vars // NEEDED for `git push heroku master`
export const passwordXTB = USER_PSSWRD_XTB; // sourced from services/secret.js // for heroku this MUST be commented out
// export const passwordXTB = process.env.USER_PSSWRD_XTB; // sourced from heroku Config Vars // NEEDED for `git push heroku master`


// //Firebase details used in firebase/firebase.config.js
export const firebaseConfigData = firebaseConfig; // sourced from services/secret.js // for heroku this MUST be commented out
// export const firebaseConfigData = process.env.firebaseConfig; // sourced from heroku Config Vars // NEEDED for `git push heroku master`

