import React, {useState, useEffect} from "react";

import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import {element} from "prop-types";


const HistoricalRates = () => {
    const [historicalData, setHistoricalData] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currencyTarget, setCurrencyTarget] = useState('');
    const [effectiveDate, setEffectiveDate] = useState([]);

    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().length === 2 ? currentDate.getMonth() + 1 : `0${currentDate.getMonth() + 1}`;
    const currentDay = currentDate.getDate().toString().length === 2 ? currentDate.getDate() : `0${currentDate.getDate()}`;
    const newCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;


    useEffect(() => {
        fetch(`http://api.nbp.pl/api/exchangerates/rates/A/EUR/2020-01-01/${newCurrentDate}/`, {
            method: 'GET'
        })
            .then(resp => {
                // console.log(resp)
                return resp.json()
            })
            .then(data => {
                console.log(data);
                setHistoricalData(data.rates);
                setCurrencyTarget(data.code);
            })
            .then( () => {
                console.log(historicalData);
                console.log(currencyTarget);
                console.log(historicalData[10].effectiveDate);
                console.log(historicalData[10].mid);
            })
            .then( () => {
                const histRatesArray = [];
                const effDateArray = [];
                historicalData.forEach( element => histRatesArray.push(element.mid));
                console.log(histRatesArray);
                historicalData.forEach( element => effDateArray.push(element.effectiveDate));
                console.log(effDateArray);

            })
            .catch(error => console.log(error));
    }, [currencyTarget]);

    // const myPromiseHistRates1 = new Promise( (resolve, reject) => {
    //     try{
    //         const result = a / b;
    //         resolve(result);
    //     } catch (error) {
    //         reject(error)
    //         // reject('dsads')
    //     }
    // });
    //
    // const myPromiseHistRates2 = new Promise( (resolve, reject) => {
    //     if ( b !== 0){
    //         const result = a / b;
    //         resolve(result);
    //     } else {
    //         reject('blankswdeiow')
    //     }
    // });
    //
    // myPromiseHistRates1
    //     .then( (result) => console.log(result))
    //     .catch( (error) => console.log(error)); //przechwyci wartosc z reject
    //
    // myPromiseHistRates2
    //     .then( (result) => console.log(result))
    //     .catch( (error) => console.log(error));






    return

};

export default HistoricalRates;