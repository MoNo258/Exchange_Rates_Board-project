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
/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";
import {Router, Route, Switch, Link, Redirect} from "react-router-dom";

class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <Container fluid>
                    <Nav>
                        <NavItem>
                            <Link to="/main/dashboard" className="nav-link">Ex Rates Board</Link>
                        </NavItem>
                    </Nav>
                    <div className="copyright">
                        <Link to="/main/news" className="nav-link" id="to-lower-case-id" >Checkout financial news - be always up-to-date</Link>
                    </div>
                </Container>
            </footer>
        );
    }
}

export default Footer;
