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
import classNames from "classnames";

// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
    Alert,
    UncontrolledAlert,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
    ButtonGroup,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    UncontrolledTooltip
} from "reactstrap";


import {
    chartExample1
} from "../variables/charts";


class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bigChartDataArray: {
                EUR: "data1",
                USD: "data2",
                GBP: "data3" }
        };
    }

    htmlChart = (currency) => {
        return(
            <Row>
                <Col xs="12">
                    <Card className="card-chart">
                        <CardHeader>
                            <Row>
                                <Col className="text-left" sm="6">
                                    <h5 className="card-category">Spot rates for base currency PLN</h5>
                                    <CardTitle tag="h2">Historical {currency} spot rates</CardTitle>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <div className="chart-area">
                                <Line
                                    data={chartExample1[this.state.bigChartDataArray[currency]]}
                                    options={chartExample1.options}
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    };


    render() {
        return (
            <>
                <div className="content">

                    {this.htmlChart('EUR')}
                    {this.htmlChart('USD')}
                    {this.htmlChart('GBP')}

                </div>
            </>
        );
    }
}

export default Notifications;
