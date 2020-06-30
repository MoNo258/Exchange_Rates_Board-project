/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

import Rates from "../components/Rates";

class Dashboard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         bigChartData: "data1"
    //     };
    // }
    // setBgChartData = name => {
    //     this.setState({
    //         bigChartData: name
    //     });
    // };


    render() {
        return (
            <>
                <div className="content">

                    <Rates />
                    
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">Spots</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Row>
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
                                                        <th>Change</th>
                                                        <th></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>EUR</td>
                                                        <td>0.1234</td>
                                                        <td>0.1245</td>
                                                        <td>9:35</td>
                                                        <td>0.1375</td>
                                                        <td>-9.85%</td>
                                                        <td><i className="value-decrease fa fa-arrow-down" aria-hidden="true"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>CHF</td>
                                                        <td>0.1434</td>
                                                        <td>0.1545</td>
                                                        <td>9:35</td>
                                                        <td>0.1375</td>
                                                        <td>+11.85%</td>
                                                        <td><i className="value-growth fa fa-arrow-up" aria-hidden="true"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>USD</td>
                                                        <td>1.0000</td>
                                                        <td>1.0000</td>
                                                        <td>9:35</td>
                                                        <td>1.0000</td>
                                                        <td>+0.00%</td>
                                                        <td><i className="value-stable fas fa-arrows-alt-h"></i></td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </CardBody>
                                        </Col>
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
                                                        <th>Change</th>
                                                        <th></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>ZAR</td>
                                                        <td>0.1234</td>
                                                        <td>0.1245</td>
                                                        <td>9:35</td>
                                                        <td>0.1375</td>
                                                        <td>-9.85%</td>
                                                        <td><i className="value-decrease fa fa-arrow-down" aria-hidden="true"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>MXN</td>
                                                        <td>0.1434</td>
                                                        <td>0.1545</td>
                                                        <td>9:35</td>
                                                        <td>0.1375</td>
                                                        <td>+11.85%</td>
                                                        <td><i className="value-growth fa fa-arrow-up" aria-hidden="true"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>IND</td>
                                                        <td>1.0000</td>
                                                        <td>1.0000</td>
                                                        <td>9:35</td>
                                                        <td>1.0000</td>
                                                        <td>+0.00%</td>
                                                        <td><i className="value-stable fas fa-arrows-alt-h"></i></td>
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
                </div>
            </>
        );
    }
}

export default Dashboard;
