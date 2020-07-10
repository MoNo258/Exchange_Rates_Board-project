import {KEY_FIXER} from "../services/secret";

//API FIXER
export const API_URL_REST = 'http://data.fixer.io/api';
export const latest_REST = '/latest'; //option for latest spots -> http://data.fixer.io/api/latest?access_key=YOUR_ACCESS_KEY&base=JPY&symbols=USD,AUD,CAD,PLN,MXN
export const historical_REST = '2020-01-01'; ////option for historical rates/spots for given date -> http://data.fixer.io/api/2020-01-01?access_key=c02b87d109a928029679584b8d27fb65&base=EUR&symbols=USD,AUD,CAD,PLN,MXN
export const API_KEY_REST =  `?access_key=${process.env.KEY_FIXER}`;
export const base_REST = '&base=EUR'; //optional //looks like only EUR is free. also EUR is default value (no need to provide this part at all)
export const symbols_API_REST = 'USD,AUD,CAD'; //optional //quote currencies (against base)

//API NBP
export const API_NBP = 'http://api.nbp.pl/api/exchangerates/tables/C';

