// import {API_KEY_REST, API_URL_REST, latest_REST, historical_REST, base_REST, symbols_API_REST} from "./constants";
// //http://data.fixer.io/api/latest?access_key=YOUR_ACCESS_KEY&base=EUR&symbols=USD,GBP,CHF,AUD,CAD,JPY,SEK,DKK,NOK,SEK,PLN,RON,BGN,HUF,CZK,INR,CNY,ZAR,MAD,MXN
//
// export const getLatest = (successCallback) => {
//     fetch(`${API_URL_REST}${latest_REST}${API_KEY_REST}`, {
//         method: 'GET'
//     })
//         .then(resp => resp.json())
//         .then(data => {
//             if (data.error === false && typeof successCallback === 'function'){
//                 console.log(data.rates);
//                 successCallback(data.rates)
//             }
//         })
//         .catch(error => console.log(error));
// };
//
// export const getHistorical = (successCallback) => {
//     fetch(`${API_URL_REST}${historical_REST}${API_KEY_REST}`, {
//         method: 'GET'
//     })
//         .then(resp => resp.json())
//         .then(data => successCallback(data))
//         .catch(error => console.log(error));
// };