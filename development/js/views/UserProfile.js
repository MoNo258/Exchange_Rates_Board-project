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
import React, {useState} from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
    Row,
    Col, Alert, Label
} from "reactstrap";

export const UserProfile = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        name: '',
        surname: '',
        gender: 'Female',
        address: '',
        aboutMe: 'You might wanna give it another shot it needs to be the same, but totally different or submit your meaningless business jargon to be used on the site!'
    });
    const [errors, setErrors] = useState([]);

    const handleEditUserData = e => {
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
        // if (user.username.length < 2) {
        //     newErrors.push("Username is too short")
        // }
        if (user.email.length < 3 && !user.email.includes("@")) {
            newErrors.push("Wrong email address")
        }
        if (user.password.length < 4) {
            newErrors.push("Password is too short")
        }
        if (user.password !== passwordRepeat) {
            newErrors.push("Passwords not match")
        // }
        // if (user.address.length < 2) {
        //     newErrors.push("City is too short")
        }

        setErrors(newErrors);
        if (newErrors.length > 0) return false;
        // sendForm();
    };


    return (
        <>
            <div className="content">
                <Row>
                    <Col md="2">
                    </Col>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Edit Profile</h5>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md="12">
                                            {errors.length > 0 &&
                                            <div> {errors.map((error, id) => <Alert className="warning-new" color="warning" key={id}>{error}</Alert>)} </div>}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="px-md-1" md="6">
                                            <FormGroup>
                                                <label>Username</label>
                                                <Input placeholder="Username" type="text" name={"username"} value={user.username}
                                                       onChange={handleEditUserData}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="6">
                                            <FormGroup>
                                                <label htmlFor="exampleInputEmail1">
                                                    Email address
                                                </label>
                                                <Input placeholder="user23@mail.com" type="email" name={"email"} value={user.email}
                                                       onChange={handleEditUserData}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>First Name</label>
                                                <Input placeholder="First Name" type="text" name={"name"} value={user.name}
                                                       onChange={handleEditUserData}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="6">
                                            <FormGroup>
                                                <label>Last Name</label>
                                                <Input placeholder="Last Name" type="text" name={"surname"} value={user.surname}
                                                       onChange={handleEditUserData}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3">
                                            <FormGroup>
                                                <Label for="gender">Gender</Label>
                                                <Input type="select" name="gender" value={user.gender}
                                                       onChange={handleEditUserData} id="gender">
                                                    <option value={"female"}>Female</option>
                                                    <option value={"male"}>Male</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="9">
                                            <FormGroup>
                                                <label>Address</label>
                                                <Input placeholder="Home Address" type="text" name={"address"} value={user.address}
                                                       onChange={handleEditUserData}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="8">
                                            <FormGroup>
                                                <label>About Me</label>
                                                <Input
                                                    cols="80"
                                                    placeholder="Here can be your description"
                                                    rows="4"
                                                    type="textarea"
                                                    name={"aboutMe"}
                                                    value={user.aboutMe}
                                                    onChange={handleEditUserData}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Button className="btn-fill" color="primary" type="submit">
                                                Edit
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <div className="typography-line"><span>You can edit your profile anytime you need</span>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="2">
                    </Col>
                </Row>
            </div>
        </>
    );

};

export default UserProfile;
