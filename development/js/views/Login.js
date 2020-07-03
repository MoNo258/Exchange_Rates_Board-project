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
import React, {useState, useEffect} from 'react';

// reactstrap components
import {
    Alert,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
    Label,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Modal, DropdownItem
} from "reactstrap";

import firebase from '../firebase/firebase.config'
import {Link, Redirect, Route, Router, Switch} from "react-router-dom";
import Layout from "../layouts/Layout";
import {createBrowserHistory} from "history";

export const Login = () => {
    // const [modalUser, setModalUser] = useState(true);
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState([]);
    const [info, setInfo] = useState([]);

    const handleInputUserData = e => {
        const {name, value} = e.target;
        setUser(prev => ({
                ...prev,
                [name]: value
            })
        );
    };

    const handleSubmit = e => {
        e.preventDefault();
        const newErrors = [];
        const newInfo =[];
        if (user.email.length < 3 && !user.email.includes("@")) {
            newErrors.push("Wrong email address")
        }
        if (user.password.length < 4) {
            newErrors.push("Password is too short")
        }
        setErrors(newErrors);
        if (newErrors.length > 0) return false;
        // send form
        //login existing user
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .catch( err => {
                newErrors.push('Error while login in existing user: ', err);
                console.log('Error while login in existing user: ', err);
            });
        const currentUser = firebase.auth().currentUser;
        if (firebase.auth().currentUser) {
            console.log('Logged in as ');
            console.log('State: ', user.email);
            console.log('Firebase: ', currentUser);
            newInfo.push(`You logged in as ${user.email}`);
            setInfo(newInfo);
            if (newInfo.length > 0) return false;
        }
    };


    // // this function is to open the modal
    // const toggleModalUser = () => {
    //     setModalUser({
    //         modalUser: !modalUser
    //     });
    // };


    return (
        <>
            {/*<Modal*/}
            {/*    modalClassName="modal-search"*/}
            {/*    isOpen={modalUser}*/}
            {/*    // toggle={toggleModalUser}*/}
            {/*>*/}
            {/*    <div className="modal-header">*/}
            {/*        /!*<Input id="inlineFormInputGroup" placeholder="SEARCH" type="text" />*!/*/}
            {/*        <button*/}
            {/*            aria-label="Close"*/}
            {/*            className="close"*/}
            {/*            data-dismiss="modal"*/}
            {/*            type="button"*/}
            {/*            // onClick={toggleModalUser}*/}
            {/*        >*/}
            {/*            <i className="tim-icons icon-simple-remove"/>*/}
            {/*        </button>*/}
            {/*    </div>*/}
            <div className="content">
                <Row>
                    <Col md='2'/>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Login to account</h5>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md="12">
                                            { info.length > 0 &&  <div > { info.map( (inf, id) => <Alert color="info" key={id}>{inf}</Alert>) } </div> }
                                            { errors.length > 0 &&  <div > { errors.map( (error, id) => <Alert className="warning-new" color="warning" key={id}>{error}</Alert>) } </div> }
                                        </Col>
                                    </Row>
                                    <Row>
                                        {/*<Col className="px-md-1" md="6">*/}
                                        {/*    <FormGroup>*/}
                                        {/*        <label>Username</label>*/}
                                        {/*        <Input placeholder="Username" type="text" name={"username"} value={user.username}*/}
                                        {/*               onChange={handleInputUserData}*/}
                                        {/*        />*/}
                                        {/*    </FormGroup>*/}
                                        {/*</Col>*/}
                                        <Col className="pl-md-1" md="6">
                                            <FormGroup>
                                                <label htmlFor="exampleInputEmail1">
                                                    Email address
                                                </label>
                                                <Input placeholder="mail@mail.com" type="email" name={"email"} value={user.email}
                                                       onChange={handleInputUserData}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-md-1" md="6">
                                            <FormGroup>
                                                <label>Password</label>
                                                <Input placeholder="Password" type="password" name={"password"} value={user.password}
                                                       onChange={handleInputUserData}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="12">
                                            <Button className="btn-fill" color="primary" type="submit">
                                                Login
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <div className="typography-line"><span>Please login to your account</span></div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md='2'/>
                </Row>
            </div>
            {/*</Modal>*/}
        </>
    );
}


export default Login;
