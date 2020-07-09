import React from "react";

export class HistoricalRates {

    currentDate = new Date();
    currentYear = this.currentDate.getFullYear();
    currentMonth = (this.currentDate.getMonth() + 1).toString().length === 2 ? this.currentDate.getMonth() + 1 : `0${this.currentDate.getMonth() + 1}`;
    currentDay = this.currentDate.getDate().toString().length === 2 ? this.currentDate.getDate() : `0${this.currentDate.getDate()}`;
    newCurrentDate = `${this.currentYear}-${this.currentMonth}-${this.currentDay}`;

    //for new approach
    getHistRatesForCurrency = (currencyName, successCallback) => {
        fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${currencyName}/2020-01-01/${this.newCurrentDate}/`, {
            method: 'GET'
        })
            .then(resp => {
                // console.log(resp)
                return resp.json()
            })
            .then((data) => {
                successCallback(data.rates);
                // console.log('this is it:');
            })
            .catch(error => console.log(error));
    }
};




////----------------------------------------------------------------------------------------------------------------
////start of version for 3 currencies but with resize issue
//import React from "react";
//const historicalRates = () => {
//
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     const currentMonth = (currentDate.getMonth() + 1).toString().length === 2 ? currentDate.getMonth() + 1 : `0${currentDate.getMonth() + 1}`;
//     const currentDay = currentDate.getDate().toString().length === 2 ? currentDate.getDate() : `0${currentDate.getDate()}`;
//     const newCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;
//
//     const histRatesAll = {
//         EUR: {histRatesArray: [], effDateArray: []},
//         USD: {histRatesArray: [], effDateArray: []},
//         GBP: {histRatesArray: [], effDateArray: []}
//     };//tu nie powinno byc trzymane to co mnie interesuje z API, Z API ma sie pobierac data.rates
//     //i ma NIE byc forEach
//     // ma byc tez successCallback, ktory bedzie przekazany dalej plus to ma byc klasa z methoda
//     //to co chce z API ma byc zalezne od STATE w komponencie Charts
//     //serwis pobiera dane i przeladowuje w config
//     // byla proba skorzystania z async i await, ale za duzo funkcji w funkcji i ForEach
//
//     // //for new approach
//     // let getHistRatesForCurrency = (currencyName, successCallback) => {
//     //
//     //     fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${currencyName}/2020-01-01/${newCurrentDate}/`, {
//     //         method: 'GET'
//     //     })
//     //         .then(resp => {
//     //             // console.log(resp)
//     //             return resp.json()
//     //         })
//     //         .then((data) => {
//     //             successCallback(data.rates)
//     //             console.log('this is it:');
//     //         })
//     //         .catch(error => console.log(error));
//     // }
//
//     let getHistRates = () => {
//         Object.keys(histRatesAll).forEach(  curr => {
//              fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${curr}/2020-01-01/${newCurrentDate}/`, {
//                 method: 'GET'
//             })
//                 .then(resp => {
//                     // console.log(resp)
//                     return resp.json()
//                 })
//                 .then((data) => {
//                     data.rates.forEach(element => histRatesAll[curr].histRatesArray.push(element.mid));
//                     data.rates.forEach(element => histRatesAll[curr].effDateArray.push(element.effectiveDate));
//
//                     console.log('this is it:');
//                 })
//                 .catch(error => console.log(error));
//         });
//         return histRatesAll;
//     };
//     return getHistRates();
// };
//
// export default historicalRates;
////end of version for 3 currencies but with resize issue
////----------------------------------------------------------------------------------------------------------------





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
