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

import {Line, Bar} from "react-chartjs-2";
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

import {chart1_2_options} from "../variables/charts";
import {chartExample1} from "../variables/charts";

import {HistoricalRates} from "../services/HistoricalRates";

const historicalRates = new HistoricalRates();

class Charts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartCurrency: {
                curr1: "EUR",
                curr2: "USD",
                curr3: "GBP"
            },
            histRatesArray1: {
                EUR: []
            },
            histDatesArray1: {
                EUR: []
            },
            histRatesArray2: {
                USD: []
            },
            histDatesArray2: {
                USD: []
            },
            histRatesArray3: {
                GBP: []
            },
            histDatesArray3: {
                GBP: []
            },
        };
    }


    componentDidMount() {
        historicalRates.getHistRatesForCurrency(this.state.chartCurrency.curr1, (data) => {
            const newRates = data.map(element => element.mid);
            const newDates = data.map(element => element.effectiveDate);
            this.setState({
                    histRatesArray1: {
                        EUR: newRates
                    },
                    histDatesArray1: {
                        EUR: newDates
                    },
                },
            );
        });
        historicalRates.getHistRatesForCurrency(this.state.chartCurrency.curr2, (data) => {
            const newRates = data.map(element => element.mid);
            const newDates = data.map(element => element.effectiveDate);
            this.setState({
                    histRatesArray2: {
                        USD: newRates
                    },
                    histDatesArray2: {
                        USD: newDates
                    },
                },
            );
        });
        historicalRates.getHistRatesForCurrency(this.state.chartCurrency.curr3, (data) => {
            const newRates = data.map(element => element.mid);
            const newDates = data.map(element => element.effectiveDate);
            this.setState({
                    histRatesArray3: {
                        GBP: newRates
                    },
                    histDatesArray3: {
                        GBP: newDates
                    },
                },
                // () => console.log('DatesEUR: ', this.state.histDatesArray1['EUR'], 'RatesEUR: ', this.state.histRatesArray1.EUR, 'DatesUSD: ', this.state.histDatesArray2.USD, 'RatesUSD: ', this.state.histRatesArray2.USD, 'DatesGBP: ', this.state.histDatesArray3.GBP, 'RatesGBP: ', this.state.histRatesArray3.GBP)
            );
        });
    }


    htmlChart = (currency) => {
        return (
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

                                {/*/!*version for potential taking chart data from variables/charts.js*!/*/}
                                {/*<Line*/}
                                {/*    // data={() => chartExample1(this.state.histDatesArray1[currency], this.state.histRatesArray1[currency]) }*/}
                                {/*    // data={chartExample1(this.state.histDatesArray1[currency], this.state.histRatesArray1[currency]) }*/}
                                {/*    data={ () => chartExample1(this.state.histDatesArray1['EUR'], this.state.histRatesArray1['EUR']) }*/}
                                {/*    options={ chart1_2_options }*/}
                                {/*/>*/}

                                <Line
                                    data={
                                        canvas => {
                                            let ctx = canvas.getContext("2d");
                                            let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
                                            let labelsX;
                                            let labelsY;
                                            if (currency === 'EUR') {
                                                labelsX = this.state.histDatesArray1[currency];
                                                labelsY = this.state.histRatesArray1[currency];
                                            }
                                            if (currency === 'USD') {
                                                labelsX = this.state.histDatesArray2[currency];
                                                labelsY = this.state.histRatesArray2[currency];
                                            }
                                            if (currency === 'GBP') {
                                                labelsX = this.state.histDatesArray3[currency];
                                                labelsY = this.state.histRatesArray3[currency];
                                            }
                                            gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
                                            gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
                                            gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

                                            return {
                                                // data: {
                                                labels: labelsX,
                                                datasets: [
                                                    {
                                                        label: "Historical rate",
                                                        fill: true,
                                                        backgroundColor: gradientStroke,
                                                        borderColor: "#1f8ef1",
                                                        borderWidth: 2,
                                                        borderDash: [],
                                                        borderDashOffset: 0.0,
                                                        pointBackgroundColor: "#1f8ef1",
                                                        pointBorderColor: "rgba(255,255,255,0)",
                                                        pointHoverBackgroundColor: "#1f8ef1",
                                                        pointBorderWidth: 20,
                                                        pointHoverRadius: 4,
                                                        pointHoverBorderWidth: 15,
                                                        pointRadius: 2.5,
                                                        data: labelsY
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                    options={chart1_2_options}
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

export default Charts;
