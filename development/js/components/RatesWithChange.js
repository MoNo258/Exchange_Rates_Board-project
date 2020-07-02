import React, {useState, useEffect} from "react";
import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import {API_NBP} from "../services/constants";

//rates available in this API:
//USD,AUD,CAD,EUR,HUF,CHF,GBP,JPY,CZK,DKK,NOK,SEK

const RatesWithChange = () => {
    const [rates, setRates] = useState([]);
    const [date, setDate] = useState('...');
    const [code, setCode] = useState([]);
    const [prevRates, setPrevRates] = useState([]);
    const [prevDate, setPrevDate] = useState('...');
    const [prevCode, setPrevCode] = useState([]);

    const currentValueDate = new Date(date);
    const prevValueDate = new Date(currentValueDate - 86400000);
    const prevYear = prevValueDate.getFullYear();
    const prevMonth = (prevValueDate.getMonth() + 1).toString().length === 2 ? prevValueDate.getMonth() + 1 : `0${prevValueDate.getMonth() + 1}`;
    const prevDay = prevValueDate.getDate().toString().length === 2 ? prevValueDate.getDate() : `0${prevValueDate.getDate()}`;
    const newPrevValueDate = `${prevYear}-${prevMonth}-${prevDay}`;

    useEffect(() => {
        fetch(`${API_NBP}`, {
            method: 'GET'
        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                setRates(data[0].rates);
                setCode(prev => {
                    const array = [];
                    data[0].rates.forEach(rate => array.push(rate.code));
                    return [...prev, array]
                });
                setDate(data[0].tradingDate);
            })
            .catch(error => console.log(error));
    }, []);


    useEffect(() => {
        // const timer = setTimeout( () => {
        if (date !== '...') {
            const newFetchApi = `${API_NBP}/${date}`;
            // console.log(newFetchApi);
            fetch(newFetchApi, {
                method: 'GET'
            })
                .then(resp => {
                    // console.log(resp)
                    return resp.json()
                })
                .then(data => {
                    // console.log(data[0].rates);
                    setPrevRates(data[0].rates);
                    setPrevCode(prev => {
                        const array = [];
                        data[0].rates.forEach(rate => array.push(rate.code));
                        return [...prev, array]
                    });
                    // console.log(data[0].tradingDate);
                    setPrevDate(data[0].tradingDate);
                })
                .catch(error => console.log(error));
        }
        // }, 5000);
    }, [date]);


    const htmlRatesTags = (k) => {
        const arrayRates = [];
        {
            for (let i = k; i <= k + 3; i++) {
                arrayRates.push(
                    <tr key={i}>
                        <td>{code[0] ? code[0][i] : null}</td>
                        <td>{rates[i] ? rates[i].bid : null}</td>
                        <td>{rates[i] ? rates[i].ask : null}</td>
                        <td>{date}</td>
                        <td>{prevRates[i] ? ((prevRates[i].bid + prevRates[i].ask) / 2).toFixed(4) : null}</td>
                        <td>{prevRates[i] ? (((((rates[i].bid + rates[i].ask) / 2) - ((prevRates[i].bid + prevRates[i].ask) / 2)) / ((prevRates[i].bid + prevRates[i].ask) / 2)) * 100).toFixed(2) : null}%</td>
                        <td>
                            {
                                prevRates[i] ?
                                    (
                                        ((((((rates[i].bid + rates[i].ask) / 2) - ((prevRates[i].bid + prevRates[i].ask) / 2)) / ((prevRates[i].bid + prevRates[i].ask) / 2)) * 100).toFixed(2) > 0) ?
                                            <i className="value-growth fa fa-arrow-up" aria-hidden="true"></i>
                                            :
                                            ((((((rates[i].bid + rates[i].ask) / 2) - ((prevRates[i].bid + prevRates[i].ask) / 2)) / ((prevRates[i].bid + prevRates[i].ask) / 2)) * 100).toFixed(2) < 0) ?
                                                <i className="value-decrease fa fa-arrow-down" aria-hidden="true"></i>
                                                :
                                                <i className="value-stable fas fa-arrows-alt-h"></i>
                                    )
                                    : null
                            }
                        </td>
                    </tr>
                );
            }
        }

        return (
            <Col md='6'>
                <CardHeader>
                    <CardTitle tag='h6'>Spots Forex</CardTitle>
                </CardHeader>
                <CardBody>
                    <Table className='tablesorter' responsive>
                        <thead className='text-primary'>
                        <tr>
                            <th>Crncy</th>
                            <th>Bid</th>
                            <th>Ask</th>
                            <th>Time</th>
                            <th>Close</th>
                            <th>Chng %</th>
                            <th></th>
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
                            <CardTitle tag="h4">Spots for PLN as of date {date} with DtD change</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                {htmlRatesTags(0)}
                                {htmlRatesTags(4)}
                                {htmlRatesTags(8)}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
};

export default RatesWithChange;