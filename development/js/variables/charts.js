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
// ##############################
// // // Chart variables
// #############################

//import Charts from "../views/Charts";
import {HistoricalRates} from "../services/HistoricalRates";
const historicalRates = new HistoricalRates();

let chart1_2_options = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
    },
    responsive: true,
    scales: {
        yAxes: [
            {
                barPercentage: 1.6,
                gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent"
                },
                ticks: {
                    suggestedMin: 4.2571,
                    suggestedMax: 4.2571,
                    padding: 10,
                    fontColor: "#9a9a9a"
                }
            }
        ],
        xAxes: [
            {
                barPercentage: 1.6,
                gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.1)",
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 10,
                    fontColor: "#9a9a9a"
                }
            }
        ]
    }
};


// #########################################
// // // used inside src/views/Charts.js
// #########################################

let chartExample1 = {
    data1: (rates, dates,  canvas) => {
        let ctx = canvas.getContext("2d");
        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        // console.log(historicalRates());
        // console.log(historicalRates().EUR.histRatesArray);
        // console.log(historicalRates().EUR.histRatesArray);
        // console.log(historicalRates().EUR.effDateArray);
        // console.log(historicalRates().EUR.effDateArray.slice(0));
        // console.log(Array.from(historicalRates().EUR.effDateArray).join());
        // console.log(historicalRates().EUR);

        //let result = HistoricalRates.EUR;
        //????????????????????????????????????????????????????????????????????????????????????????????
        // something like: this.props.histRatesArray & this.props.histDatesArray if this was a Component...
        let labelsX = dates;
        let labelsY = rates;

        gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors


        return {
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
        };
    },

    data2: canvas => {
        let ctx = canvas.getContext("2d");
        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
        let result = historicalRates().USD;
        let labelsX = result.effDateArray;
        let labelsY = result.histRatesArray;


        gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

        return {
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
        };
    },

    data3: canvas => {
        let ctx = canvas.getContext("2d");
        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
        let result = historicalRates().GBP;
        let labelsX = result.effDateArray;
        let labelsY = result.histRatesArray;

        gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

        return {
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
        };
    },
    options: chart1_2_options
};


export {chartExample1}


