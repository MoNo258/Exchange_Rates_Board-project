import React, {useState, useEffect} from "react";
import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";



const InterestRates = () => {



    return (
        <>
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">Rates</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col md='4'>
                                    <CardHeader>
                                        <CardTitle tag='h6'>Interest Rates EUR </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Table className='tablesorter' responsive>
                                            <thead className='text-primary'>
                                            <tr>
                                                <th>Tenor</th>
                                                <th>Bid</th>
                                                <th></th>
                                                <th>Ask</th>
                                                <th>Time</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1M</td>
                                                <td>0.1234</td>
                                                <td>/</td>
                                                <td>0.2345</td>
                                                <td>11:23</td>
                                            </tr>
                                            <tr>
                                                <td>2M</td>
                                                <td>0.1344</td>
                                                <td>/</td>
                                                <td>0.2245</td>
                                                <td>11:24</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Col>
                                <Col md='4'>
                                    <CardHeader>
                                        <CardTitle tag='h6'>Interest Rates EUR </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Table className='tablesorter' responsive>
                                            <thead className='text-primary'>
                                            <tr>
                                                <th>Tenor</th>
                                                <th>Bid</th>
                                                <th></th>
                                                <th>Ask</th>
                                                <th>Time</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1M</td>
                                                <td>0.1234</td>
                                                <td>/</td>
                                                <td>0.2345</td>
                                                <td>11:23</td>
                                            </tr>
                                            <tr>
                                                <td>2M</td>
                                                <td>0.1344</td>
                                                <td>/</td>
                                                <td>0.2245</td>
                                                <td>11:24</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Col>
                                <Col md='4'>
                                    <CardHeader>
                                        <CardTitle tag='h6'>Interest Rates EUR </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Table className='tablesorter' responsive>
                                            <thead className='text-primary'>
                                            <tr>
                                                <th>Tenor</th>
                                                <th>Bid</th>
                                                <th></th>
                                                <th>Ask</th>
                                                <th>Time</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1M</td>
                                                <td>0.1234</td>
                                                <td>/</td>
                                                <td>0.2345</td>
                                                <td>11:23</td>
                                            </tr>
                                            <tr>
                                                <td>2M</td>
                                                <td>0.1344</td>
                                                <td>/</td>
                                                <td>0.2245</td>
                                                <td>11:24</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
};

export default InterestRates;