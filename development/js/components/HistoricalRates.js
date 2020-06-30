import React, {useState, useEffect} from "react";

import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import {element} from "prop-types";


const historicalRates = () => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().length === 2 ? currentDate.getMonth() + 1 : `0${currentDate.getMonth() + 1}`;
    const currentDay = currentDate.getDate().toString().length === 2 ? currentDate.getDate() : `0${currentDate.getDate()}`;
    const newCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;

    const histRatesAll = {
        EUR: {histRatesArray: [], effDateArray: []},
        USD: {histRatesArray: [], effDateArray: []},
        GBP: {histRatesArray: [], effDateArray: []}
    };

    // console.log(histRatesAll)
    // console.log(Object.keys(histRatesAll).length)
    // console.log(Object.keys(histRatesAll))
    // console.log(Object.keys(histRatesAll)[0])


    let getHistRates = () => {
         Object.keys(histRatesAll).forEach( curr => {
            fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${curr}/2020-01-01/${newCurrentDate}/`, {
                method: 'GET'
            })

                .then(resp => {
                    // console.log(resp)
                    return resp.json()
                })
                // .then(data => {
                //     return data.rates.slice(0);
                // })
                .then((data) => {
                    // const histRatesArray = [];
                    // const effDateArray = [];
                    // console.log(data);
                    data.rates.forEach(element => histRatesAll[curr].histRatesArray.push(element.mid));
                     // = histRatesArray.slice(0);

                    // console.log(curr);
                    data.rates.forEach(element => histRatesAll[curr].effDateArray.push(element.effectiveDate));

                    // histRatesAll.curr.effDateArray = effDateArray;
                    // histRatesAll.EUR.concat(effDateArray);

                    // console.log(histRatesArray, effDateArray)
                    console.log('this is it:');
                    // console.log( histRatesAll);
                    // return {histRatesArray: histRatesArray, effDateArray: effDateArray}

                })
                .catch(error => console.log(error));

        })
        return histRatesAll;
    };


    // console.log(getHistRates());
    return getHistRates();


};

// module.exports = {historicalRates}
export default historicalRates;


////----------------------------------------------------------------------------------------------------------------
////start of working version for EUR
// import React, {useState, useEffect} from "react";
//
// import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
// import {element} from "prop-types";
//
//
// const historicalRates = () => {
//     // const [currency, setCurrency] = useState('EUR'); //
//     // const [historicalData, setHistoricalData] = useState([]);
//     // // const [currentDate, setCurrentDate] = useState(new Date());
//     // const [currencyTarget, setCurrencyTarget] = useState('');
//     // const [historicalEffectiveDateArray, setHistoricalEffectiveDateArray] = useState([]); //
//     // const [historicalRatesArray, setHistoricalRatesArray] = useState([]); //
//
//
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     const currentMonth = (currentDate.getMonth() + 1).toString().length === 2 ? currentDate.getMonth() + 1 : `0${currentDate.getMonth() + 1}`;
//     const currentDay = currentDate.getDate().toString().length === 2 ? currentDate.getDate() : `0${currentDate.getDate()}`;
//     const newCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;
//
//     const histRatesAll = {
//         EUR: [],
//         USD: [],
//         GBP: []
//     };
//
//
//     // const getHistRates = ({currency}) =>
//     //     fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${currency}/2020-01-01/${newCurrentDate}/`, {
//
//     const getHistRates = (curr) => {
//         return fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${curr}/2020-01-01/${newCurrentDate}/`, {
//             method: 'GET'
//         })
//             .then(resp => {
//                 // console.log(resp)
//                 return resp.json()
//             })
//             .then(data => {
//                 histRatesAll.curr = data.rates.slice(0);
//             })
//             .then(() => {
//                 const histRatesArray = [];
//                 const effDateArray = [];
//                 histRatesAll.curr.forEach(element => histRatesArray.push(element.mid));
//                 histRatesAll.curr.forEach(element => effDateArray.push(element.effectiveDate));
//                 return {histRatesArray: histRatesArray, effDateArray: effDateArray}
//             })
//             .catch(error => console.log(error));
//     }
//
//
//
//
//
//     return getHistRates('EUR');;
//
//
// };
//
// // module.exports = {historicalRates}
// export default historicalRates;
////end of working version for EUR
////----------------------------------------------------------------------------------------------------------------





//import React, {useState, useEffect} from "react";
//
// import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
// import {element} from "prop-types";
//
//
// const HistoricalRates = () => {
//     const [currency, setCurrency] = useState('EUR'); //
//     const [historicalData, setHistoricalData] = useState([]);
//     const [currentDate, setCurrentDate] = useState(new Date());
//     const [currencyTarget, setCurrencyTarget] = useState('');
//     const [historicalEffectiveDateArray, setHistoricalEffectiveDateArray] = useState([]); //
//     const [historicalRatesArray, setHistoricalRatesArray] = useState([]); //
//
//     const currentYear = currentDate.getFullYear();
//     const currentMonth = (currentDate.getMonth() + 1).toString().length === 2 ? currentDate.getMonth() + 1 : `0${currentDate.getMonth() + 1}`;
//     const currentDay = currentDate.getDate().toString().length === 2 ? currentDate.getDate() : `0${currentDate.getDate()}`;
//     const newCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;
//
//
//     useEffect(() => {
//         fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${currency}/2020-01-01/${newCurrentDate}/`, {
//             method: 'GET'
//         })
//             .then(resp => {
//                 // console.log(resp)
//                 return resp.json()
//             })
//             .then(data => {
//                 // console.log(data);
//                 setHistoricalData(data.rates);
//                 setCurrencyTarget(data.code);
//             })
//             .then( () => {
//                 const histRatesArray = [];
//                 const effDateArray = [];
//                 historicalData.forEach( element => histRatesArray.push(element.mid));
//                 // console.log(histRatesArray);
//                 setHistoricalRatesArray(histRatesArray);
//                 historicalData.forEach( element => effDateArray.push(element.effectiveDate));
//                 console.log(effDateArray);
//                 setHistoricalEffectiveDateArray(effDateArray);
//             })
//             .catch(error => console.log(error));
//     }, [currencyTarget]);
//
//     const getValues = () => {
//         console.log(historicalRatesArray);
//         console.log(historicalEffectiveDateArray);
//         return {
//             rates: historicalRatesArray,
//             dates: historicalEffectiveDateArray
//         }
//     };
//
//     // console.log(getValues());
//     // console.log(getValues);
//
//
//     // const myPromiseHistRates1 = new Promise( (resolve, reject) => {
//     //     try{
//     //         const result = a / b;
//     //         resolve(result);
//     //     } catch (error) {
//     //         reject(error)
//     //         // reject('dsads')
//     //     }
//     // });
//     //
//     // const myPromiseHistRates2 = new Promise( (resolve, reject) => {
//     //     if ( b !== 0){
//     //         const result = a / b;
//     //         resolve(result);
//     //     } else {
//     //         reject('blankswdeiow')
//     //     }
//     // });
//     //
//     // myPromiseHistRates1
//     //     .then( (result) => console.log(result))
//     //     .catch( (error) => console.log(error)); //przechwyci wartosc z reject
//     //
//     // myPromiseHistRates2
//     //     .then( (result) => console.log(result))
//     //     .catch( (error) => console.log(error));
//
//
//
//
//
//
//     // return getValues()
//     // return <p />
//
// };
//
// // export {getValues()};