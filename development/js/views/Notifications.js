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
            bigChartData: "data1",
        };
    }

    setBgChartData = name => {
        this.setState({
            bigChartData: name
        });
    };



    render() {
        return (
            <>
                <div className="content">

                    <Row>
                        <Col xs="12">
                            <Card className="card-chart">
                                <CardHeader>
                                    <Row>
                                        <Col className="text-left" sm="6">
                                            <h5 className="card-category">Spot rates for base currency PLN</h5>
                                            <CardTitle tag="h2">Historical EUR spot rates</CardTitle>
                                        </Col>
                                                      <Col sm="6">
                                                          <ButtonGroup
                                                              className="btn-group-toggle float-right"
                                                              data-toggle="buttons"
                                                          >
                                                              <Button
                                                                  tag="label"
                                                                  className={classNames("btn-simple", {
                                                                      active: this.state.bigChartData === "data1"
                                                                  })}
                                                                  color="info"
                                                                  id="0"
                                                                  size="sm"
                                                                  onClick={() => this.setBgChartData("data1")}
                                                              >
                                                                  <input
                                                                      defaultChecked
                                                                      className="d-none"
                                                                      name="options"
                                                                      type="radio"
                                                                  />
                                                                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                          EUR
                                        </span>
                                                                  <span className="d-block d-sm-none">
                                          <i className="tim-icons icon-single-02" />
                                        </span>
                                                              </Button>
                                                              <Button
                                                                  color="info"
                                                                  id="1"
                                                                  size="sm"
                                                                  tag="label"
                                                                  className={classNames("btn-simple", {
                                                                      active: this.state.bigChartData === "data2"
                                                                  })}
                                                                  onClick={() => this.setBgChartData("data2")}
                                                              >
                                                                  <input
                                                                      className="d-none"
                                                                      name="options"
                                                                      type="radio"
                                                                  />
                                                                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                          Another CCY
                                        </span>
                                                                  <span className="d-block d-sm-none">
                                          <i className="tim-icons icon-gift-2" />
                                        </span>
                                                              </Button>
                                                              <Button
                                                                  color="info"
                                                                  id="2"
                                                                  size="sm"
                                                                  tag="label"
                                                                  className={classNames("btn-simple", {
                                                                      active: this.state.bigChartData === "data3"
                                                                  })}
                                                                  onClick={() => this.setBgChartData("data3")}
                                                              >
                                                                  <input
                                                                      className="d-none"
                                                                      name="options"
                                                                      type="radio"
                                                                  />
                                                                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                          Another CCY
                                        </span>
                                                                  <span className="d-block d-sm-none">
                                          <i className="tim-icons icon-tap-02" />
                                        </span>
                                                              </Button>
                                                          </ButtonGroup>
                                                      </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>


                                    <div className="chart-area">
                                        <Line
                                            data={chartExample1[this.state.bigChartData]}
                                            options={chartExample1.options}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Notifications;
