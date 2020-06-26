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
import HistoricalRates from "../components/HistoricalRates";
// import {chartExample1} from "../variables/charts";

import {
    chartExample1,
    chartExample2,
    chartExample3,
    chartExample4
} from "../variables/charts";


class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bigChartData: "data1"
        };
    }
    setBgChartData = name => {
        this.setState({
            bigChartData: name
        });
    };
    notify = place => {
        var color = Math.floor(Math.random() * 5 + 1);
        var type;
        switch (color) {
            case 1:
                type = "primary";
                break;
            case 2:
                type = "success";
                break;
            case 3:
                type = "danger";
                break;
            case 4:
                type = "warning";
                break;
            case 5:
                type = "info";
                break;
            default:
                break;
        }
        var options = {};
        options = {
            place: place,
            message: (
                <div>
                    <div>
                        Welcome to <b>Black Dashboard React</b> - a beautiful freebie for
                        every web developer.
                    </div>
                </div>
            ),
            type: type,
            icon: "tim-icons icon-bell-55",
            autoDismiss: 7
        };
        this.refs.notificationAlert.notificationAlert(options);
    };
    render() {
        return (
            <>
                <div className="content">
                    <div className="react-notification-alert-container">
                        <NotificationAlert ref="notificationAlert" />
                    </div>
                    <Row>
                        <Col md="6">
                            <HistoricalRates />

                        </Col>
                    {/*    <Col md="6">*/}
                    {/*        <Card>*/}
                    {/*            <CardHeader>*/}
                    {/*                <CardTitle tag="h4">Notifications Style</CardTitle>*/}
                    {/*            </CardHeader>*/}
                    {/*            <CardBody>*/}
                    {/*                <Alert color="info">*/}
                    {/*                    <span>This is a plain notification</span>*/}
                    {/*                </Alert>*/}
                    {/*                <UncontrolledAlert color="info">*/}
                    {/*                    <span>This is a notification with close button.</span>*/}
                    {/*                </UncontrolledAlert>*/}
                    {/*                <UncontrolledAlert className="alert-with-icon" color="info">*/}
                    {/*<span*/}
                    {/*    className="tim-icons icon-bell-55"*/}
                    {/*    data-notify="icon"*/}
                    {/*/>*/}
                    {/*                    <span data-notify="message">*/}
                    {/*  This is a notification with close button and icon.*/}
                    {/*</span>*/}
                    {/*                </UncontrolledAlert>*/}
                    {/*                <UncontrolledAlert className="alert-with-icon" color="info">*/}
                    {/*<span*/}
                    {/*    className="tim-icons icon-bell-55"*/}
                    {/*    data-notify="icon"*/}
                    {/*/>*/}
                    {/*                    <span data-notify="message">*/}
                    {/*  This is a notification with close button and icon and have*/}
                    {/*  many lines. You can see that the icon and the close button*/}
                    {/*  are always vertically aligned. This is a beautiful*/}
                    {/*  notification. So you don't have to worry about the style.*/}
                    {/*</span>*/}
                    {/*                </UncontrolledAlert>*/}
                    {/*            </CardBody>*/}
                    {/*        </Card>*/}
                    {/*    </Col>*/}
                    {/*    <Col md="6">*/}
                    {/*        <Card>*/}
                    {/*            <CardHeader>*/}
                    {/*                <CardTitle tag="h4">Notification states</CardTitle>*/}
                    {/*            </CardHeader>*/}
                    {/*            <CardBody>*/}
                    {/*                <UncontrolledAlert color="primary">*/}
                    {/*<span>*/}
                    {/*  <b>Primary - </b>*/}
                    {/*  This is a regular notification made with ".alert-primary"*/}
                    {/*</span>*/}
                    {/*                </UncontrolledAlert>*/}
                    {/*                <UncontrolledAlert color="info">*/}
                    {/*<span>*/}
                    {/*  <b>Info - </b>*/}
                    {/*  This is a regular notification made with ".alert-info"*/}
                    {/*</span>*/}
                    {/*                </UncontrolledAlert>*/}
                    {/*                <UncontrolledAlert color="success">*/}
                    {/*<span>*/}
                    {/*  <b>Success - </b>*/}
                    {/*  This is a regular notification made with ".alert-success"*/}
                    {/*</span>*/}
                    {/*                </UncontrolledAlert>*/}
                    {/*                <UncontrolledAlert color="warning">*/}
                    {/*<span>*/}
                    {/*  <b>Warning - </b>*/}
                    {/*  This is a regular notification made with ".alert-warning"*/}
                    {/*</span>*/}
                    {/*                </UncontrolledAlert>*/}
                    {/*                <UncontrolledAlert color="danger">*/}
                    {/*<span>*/}
                    {/*  <b>Danger - </b>*/}
                    {/*  This is a regular notification made with ".alert-danger"*/}
                    {/*</span>*/}
                    {/*                </UncontrolledAlert>*/}
                    {/*            </CardBody>*/}
                    {/*        </Card>*/}
                    {/*    </Col>*/}
                        <Col md="12">
                            <Card>
                                <CardBody>
                                    <div className="places-buttons">
                                        <Row>
                                            <Col className="ml-auto mr-auto text-center" md="6">
                                                <CardTitle tag="h4">
                                                    Notifications Places<p className="category">
                                                    Click to view notifications
                                                </p>
                                                </CardTitle>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="ml-auto mr-auto" lg="8">
                                                <Row>
                                                    <Col md="4">
                                                        <Button
                                                            block
                                                            color="primary"
                                                            onClick={() => this.notify("tl")}
                                                        >
                                                            Top Left
                                                        </Button>
                                                    </Col>
                                                    <Col md="4">
                                                        <Button
                                                            block
                                                            color="primary"
                                                            onClick={() => this.notify("tc")}
                                                        >
                                                            Top Center
                                                        </Button>
                                                    </Col>
                                                    <Col md="4">
                                                        <Button
                                                            block
                                                            color="primary"
                                                            onClick={() => this.notify("tr")}
                                                        >
                                                            Top Right
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="ml-auto mr-auto" lg="8">
                                                <Row>
                                                    <Col md="4">
                                                        <Button
                                                            block
                                                            color="primary"
                                                            onClick={() => this.notify("bl")}
                                                        >
                                                            Bottom Left
                                                        </Button>
                                                    </Col>
                                                    <Col md="4">
                                                        <Button
                                                            block
                                                            color="primary"
                                                            onClick={() => this.notify("bc")}
                                                        >
                                                            Bottom Center
                                                        </Button>
                                                    </Col>
                                                    <Col md="4">
                                                        <Button
                                                            block
                                                            color="primary"
                                                            onClick={() => this.notify("br")}
                                                        >
                                                            Bottom Right
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <Card className="card-chart">
                                <CardHeader>
                                    <Row>
                                        <Col className="text-left" sm="6">
                                            <h5 className="card-category">Total Shipments</h5>
                                            <CardTitle tag="h2">Performance</CardTitle>
                                        </Col>
                                        {/*              <Col sm="6">*/}
                                        {/*                  <ButtonGroup*/}
                                        {/*                      className="btn-group-toggle float-right"*/}
                                        {/*                      data-toggle="buttons"*/}
                                        {/*                  >*/}
                                        {/*                      <Button*/}
                                        {/*                          tag="label"*/}
                                        {/*                          className={classNames("btn-simple", {*/}
                                        {/*                              active: this.state.bigChartData === "data1"*/}
                                        {/*                          })}*/}
                                        {/*                          color="info"*/}
                                        {/*                          id="0"*/}
                                        {/*                          size="sm"*/}
                                        {/*                          onClick={() => this.setBgChartData("data1")}*/}
                                        {/*                      >*/}
                                        {/*                          <input*/}
                                        {/*                              defaultChecked*/}
                                        {/*                              className="d-none"*/}
                                        {/*                              name="options"*/}
                                        {/*                              type="radio"*/}
                                        {/*                          />*/}
                                        {/*                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">*/}
                                        {/*  Accounts*/}
                                        {/*</span>*/}
                                        {/*                          <span className="d-block d-sm-none">*/}
                                        {/*  <i className="tim-icons icon-single-02" />*/}
                                        {/*</span>*/}
                                        {/*                      </Button>*/}
                                        {/*                      <Button*/}
                                        {/*                          color="info"*/}
                                        {/*                          id="1"*/}
                                        {/*                          size="sm"*/}
                                        {/*                          tag="label"*/}
                                        {/*                          className={classNames("btn-simple", {*/}
                                        {/*                              active: this.state.bigChartData === "data2"*/}
                                        {/*                          })}*/}
                                        {/*                          onClick={() => this.setBgChartData("data2")}*/}
                                        {/*                      >*/}
                                        {/*                          <input*/}
                                        {/*                              className="d-none"*/}
                                        {/*                              name="options"*/}
                                        {/*                              type="radio"*/}
                                        {/*                          />*/}
                                        {/*                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">*/}
                                        {/*  Purchases*/}
                                        {/*</span>*/}
                                        {/*                          <span className="d-block d-sm-none">*/}
                                        {/*  <i className="tim-icons icon-gift-2" />*/}
                                        {/*</span>*/}
                                        {/*                      </Button>*/}
                                        {/*                      <Button*/}
                                        {/*                          color="info"*/}
                                        {/*                          id="2"*/}
                                        {/*                          size="sm"*/}
                                        {/*                          tag="label"*/}
                                        {/*                          className={classNames("btn-simple", {*/}
                                        {/*                              active: this.state.bigChartData === "data3"*/}
                                        {/*                          })}*/}
                                        {/*                          onClick={() => this.setBgChartData("data3")}*/}
                                        {/*                      >*/}
                                        {/*                          <input*/}
                                        {/*                              className="d-none"*/}
                                        {/*                              name="options"*/}
                                        {/*                              type="radio"*/}
                                        {/*                          />*/}
                                        {/*                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">*/}
                                        {/*  Sessions*/}
                                        {/*</span>*/}
                                        {/*                          <span className="d-block d-sm-none">*/}
                                        {/*  <i className="tim-icons icon-tap-02" />*/}
                                        {/*</span>*/}
                                        {/*                      </Button>*/}
                                        {/*                  </ButtonGroup>*/}
                                        {/*              </Col>*/}
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
