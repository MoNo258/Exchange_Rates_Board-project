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
import React, {useState, useEffect} from "react";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput
} from "reactstrap";

export const Settings = () => {
    const[checked, setChecked] = useState(false);


    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h2">Dashboard settings</CardTitle>
                                <p className="category">Choose currencies to be presented on your dashboard</p>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="6">
                                        <CardHeader>
                                            <CardTitle tag="h4">Choose spots rates for EUR base currency</CardTitle>
                                            <p className="category">Latest MID rate</p>
                                        </CardHeader>
                                        <CardBody>
                                            <Form>
                                                {/*USD,GBP,CHF,AUD,CAD,JPY,SEK,DKK,NOK,SEK,PLN,RON,BGN,HUF,CZK,INR,AED,ZAR,MAD,MXN*/}
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <CustomInput type="checkbox" id="curr-1" checked={checked} onChange={e => setChecked(e.currentTarget.checked)} /> USD
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox" id="curr-2" checked={checked} onChange={e => setChecked(e.target.value)} /> GBP
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox"/> CHF
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox"/> AUD
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox"/> CAD
                                                    </Label>
                                                </FormGroup>
                                            </Form>
                                        </CardBody>
                                    </Col>
                                    <Col md="6">
                                        <CardHeader>
                                            <CardTitle tag="h4">Choose spots rates for PLN base currency</CardTitle>
                                            <p className="category">Latest BID and ASD with DtD comparison</p>
                                        </CardHeader>
                                        <CardBody>
                                            <Form>
                                                {/* //USD,AUD,CAD,EUR,HUF,CHF,GBP,JPY,CZK,DKK,NOK,SEK */}
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox"/> USD
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox"/> AUD
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox"/> CAD
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox"/> EUR
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox"/> HUF
                                                    </Label>
                                                </FormGroup>
                                            </Form>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="12">
                        <Card className="card-plain">
                            <CardHeader>
                                <CardTitle tag="h2">Charts settings</CardTitle>
                                <p className="category">Choose currencies to be presented on your charts</p>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <CardHeader>
                                            <CardTitle tag="h4">Choose spots rates for PLN base currency</CardTitle>
                                            <p className="category">You will see historical rates for this year on
                                                chart</p>
                                        </CardHeader>
                                        <CardBody>
                                            <Form>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox"/> EUR
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox"/> USD
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox"/> GBP
                                                    </Label>
                                                </FormGroup>
                                            </Form>
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
};

export default Settings;
