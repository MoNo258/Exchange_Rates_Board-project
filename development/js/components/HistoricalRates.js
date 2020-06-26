import React, {useState, useEffect} from "react";

import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";


const HistoricalRates = () => {
    const [historicalRates, setHistoricalRates] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [effectiveDate, setEffectiveDate] = useState([]);

    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().length === 2 ? currentDate.getMonth() + 1 : `0${currentDate.getMonth() + 1}`;
    const currentDay = currentDate.getDate().toString().length === 2 ? currentDate.getDate() : `0${currentDate.getDate()}`;
    const newCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`


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
                console.log(data.currency)
                console.log(data.code)
                console.log(data.rates)
                console.log(data.rates[0].effectiveDate)
                console.log(data.rates[0].mid)
                console.log(data.rates[1].effectiveDate)
                console.log(data.rates[1].mid)
                setHistoricalRates(data);
                setEffectiveDate(prev => [...prev, data.rates[0].effectiveDate])
                console.log(effectiveDate)
            })
            .catch(error => console.log(error));
    }, []);



    return(
        <>
        <p></p>
        </>
    )

};

export default HistoricalRates;