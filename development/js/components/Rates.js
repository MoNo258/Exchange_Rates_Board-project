import React, {useState, useEffect} from "react";
import {getHistorical, getLatest} from "../services/rates";
import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import {API_KEY_REST, API_URL_REST, latest_REST} from "../services/constants";

//http://data.fixer.io/api/latest?access_key=YOUR_ACCESS_KEY&base=EUR&symbols=USD,GBP,CHF,AUD,CAD,JPY,SEK,DKK,NOK,SEK,PLN,RON,BGN,HUF,CZK,INR,AED,ZAR,MAD,MXN

const Rates = () => {
    const [rates, setRates] = useState([]);
    const [date, setDate] = useState('...');
    const [base, setBase] = useState('...');
    const [timestamp, setTimestamp] = useState('...');

    useEffect(() => {
        fetch(`${API_URL_REST}${latest_REST}${API_KEY_REST}&base=EUR&symbols=USD,GBP,CHF,AUD,CAD,JPY,SEK,DKK,NOK,SEK,PLN,RON,BGN,HUF,CZK,INR,AED,ZAR,MAD,MXN,CNY,TRY`, {
            method: 'GET'
        })
            .then(resp => {
                // console.log(resp)
                return resp.json()
            })
            .then(data => {
                setRates(data.rates);
                setDate(data.date);
                setBase(data.base);
                setTimestamp(data.timestamp);
            })
            .catch(error => console.log(error));
    }, []);

    const newDate = new Date(timestamp * 1000)

    const htmlRatesTags = (k) => {
        const arrayRates = [];
        {
            for (let i = k; i <= k + 4; i++) {
                arrayRates.push(
                    <tr key={i}>
                        <td>{Object.keys(rates)[i]}</td>
                        <td>{Object.values(rates)[i]}</td>
                        {/*<td>Date</td>*/}
                        {/*<td></td>*/}
                    </tr>
                )
            }
        }
        return (
            <Col md='3'>
                <CardHeader>
                    <CardTitle tag='h6'>Spots Forex</CardTitle>
                </CardHeader>
                <CardBody>
                    <Table className='tablesorter' responsive>
                        <thead className='text-primary'>
                        <tr>
                            <th>Crncy</th>
                            <th>Latest</th>
                            {/*<th></th>*/}
                            {/*<th>Change</th>*/}
                            {/*<th></th>*/}
                        </tr>
                        </thead>
                        <tbody>
                        {arrayRates}
                        </tbody>
                    </Table>
                </CardBody>
            </Col>
        )
    };



    return (
        <>
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">Spots for {base} as of date: {newDate.toDateString()} </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                {htmlRatesTags(0)}
                                {htmlRatesTags(5)}
                                {htmlRatesTags(10)}
                                {htmlRatesTags(15)}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
};

export default Rates;