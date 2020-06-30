import React, {useState, useEffect} from "react";

import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import {element} from "prop-types";


const historicalRates = () => {
    // const [currency, setCurrency] = useState('EUR'); //
    // const [historicalData, setHistoricalData] = useState([]);
    // // const [currentDate, setCurrentDate] = useState(new Date());
    // const [currencyTarget, setCurrencyTarget] = useState('');
    // const [historicalEffectiveDateArray, setHistoricalEffectiveDateArray] = useState([]); //
    // const [historicalRatesArray, setHistoricalRatesArray] = useState([]); //


    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().length === 2 ? currentDate.getMonth() + 1 : `0${currentDate.getMonth() + 1}`;
    const currentDay = currentDate.getDate().toString().length === 2 ? currentDate.getDate() : `0${currentDate.getDate()}`;
    const newCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;

    const histRatesAll = {
        EUR: [],
        USD: [],
        GBP: []
    };

    console.log(histRatesAll)
    console.log(Object.keys(histRatesAll).length)
    console.log(Object.keys(histRatesAll))
    console.log(Object.keys(histRatesAll)[0])

    //var resultFound = false;
    //
    // var fetchNow = function() {
    //   fetch('some/address').then(function() {
    //     if(someCondition) {
    //       resultFound = true;
    //     }
    //     else {
    //       fetchNow();
    //     }
    //   });
    // }
    //
    // fetchNow();

    let getHistRates = () => {
        return Object.keys(histRatesAll).forEach( curr => {
            fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${curr}/2020-01-01/${newCurrentDate}/`, {
                method: 'GET'
            })

                .then(resp => {
                    // console.log(resp)
                    return resp.json()
                })
                .then(data => {
                    curr = data.rates.slice(0);
                })
                .then(() => {
                    const histRatesArray = [];
                    const effDateArray = [];
                    curr.forEach(element => histRatesArray.push(element.mid));
                    curr.forEach(element => effDateArray.push(element.effectiveDate));
                    console.log(histRatesArray, effDateArray)
                    return {histRatesArray: histRatesArray, effDateArray: effDateArray}
                })
                .catch(error => console.log(error));



        })
    }


    // const getHistRates = (curr) => {
    //     return fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${curr}/2020-01-01/${newCurrentDate}/`, {
    //         method: 'GET'
    //     })
    //         .then(resp => {
    //             // console.log(resp)
    //             return resp.json()
    //         })
    //         .then(data => {
    //             histRatesAll.curr = data.rates.slice(0);
    //         })
    //         .then(() => {
    //             const histRatesArray = [];
    //             const effDateArray = [];
    //             histRatesAll.curr.forEach(element => histRatesArray.push(element.mid));
    //             histRatesAll.curr.forEach(element => effDateArray.push(element.effectiveDate));
    //             return {histRatesArray: histRatesArray, effDateArray: effDateArray}
    //         })
    //         .catch(error => console.log(error));
    // }





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