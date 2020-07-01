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
    Modal
} from "reactstrap";

export const Login = () => {
    // const [modalUser, setModalUser] = useState(true);
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState([]);

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
        if (user.username.length < 2) {
            newErrors.push("Username is too short")
        }
        if (user.password.length < 4) {
            newErrors.push("Password is too short")
        }
        setErrors(newErrors);
        if (newErrors.length > 0) return false;
        // sendForm();
    };


    // // this function is to open the Search modal
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
                                            {/*{errors.length > 0 && <ul> {errors.map( (err, index) => <li key={index}>{err}</li>)} </ul>}*/}
                                            {/*{ errors.length > 0 && <ListGroup> { errors.map( (error, id) => <ListGroupItem key={id}>{error}</ListGroupItem>) } </ListGroup> }*/}
                                            { errors.length > 0 &&  <div > { errors.map( (error, id) => <Alert className="warning-new" color="warning" key={id}>{error}</Alert>) } </div> }
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="px-md-1" md="6">
                                            <FormGroup>
                                                <label>Username</label>
                                                <Input placeholder="Username" type="text" name={"username"} value={user.username}
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
