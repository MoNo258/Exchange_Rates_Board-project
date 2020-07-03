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
import {Router, Route, Switch, Link, Redirect} from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
import firebase from '../firebase/firebase.config'

// reactstrap components
import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Input,
    InputGroup,
    NavbarBrand,
    Navbar,
    NavLink,
    Nav,
    Container,
    Modal
} from "reactstrap";

class MainNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseOpen: false,
            color: "navbar-transparent"
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateColor);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateColor);
    }
    // function that adds color white/transparent to the navbar on resize (this is for the collapse)
    updateColor = () => {
        if (window.innerWidth < 993 && this.state.collapseOpen) {
            this.setState({
                color: "bg-white"
            });
        } else {
            this.setState({
                color: "navbar-transparent"
            });
        }
    };
    // this function opens and closes the collapse on small devices
    toggleCollapse = () => {
        if (this.state.collapseOpen) {
            this.setState({
                color: "navbar-transparent"
            });
        } else {
            this.setState({
                color: "bg-white"
            });
        }
        this.setState({
            collapseOpen: !this.state.collapseOpen
        });
    };

    handleLogOut = () => {
      firebase.auth().signOut()
          .catch( err => {
              console.log('Error while signing out: ', err)
          });
        console.log('Sign out user')
    };

    render() {
        return (
            <>
                <Navbar
                    className={classNames("navbar-absolute", this.state.color)}
                    expand="lg"
                >
                    <Container fluid>
                        {/* this part i related to left-hand-side burger button + X: */}
                        <div className="navbar-wrapper">
                            <div
                                className={classNames("navbar-toggle d-inline", {
                                    toggled: this.props.sidebarOpened
                                })}
                            >
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    onClick={this.props.toggleSidebar}
                                >
                                    <span className="navbar-toggler-bar bar1" />
                                    <span className="navbar-toggler-bar bar2" />
                                    <span className="navbar-toggler-bar bar3" />
                                </button>
                            </div>
                            <NavbarBrand href="#" onClick={e => e.preventDefault()}>
                                {this.props.brandText}
                            </NavbarBrand>
                        </div>
                        {/* this part is related to right-hand-side burger(kebab) button: */}
                        <button
                            aria-expanded={false}
                            aria-label="Toggle navigation"
                            className="navbar-toggler"
                            data-target="#navigation"
                            data-toggle="collapse"
                            id="navigation"
                            type="button"
                            onClick={this.toggleCollapse}
                        >
                            <span className="navbar-toggler-bar navbar-kebab" />
                            <span className="navbar-toggler-bar navbar-kebab" />
                            <span className="navbar-toggler-bar navbar-kebab" />
                        </button>
                        <Collapse navbar isOpen={this.state.collapseOpen}>
                            <Nav className="ml-auto" navbar>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle
                                        caret
                                        color="default"
                                        data-toggle="dropdown"
                                        nav
                                        onClick={e => e.preventDefault()}
                                    >
                                        <div className="d-lg">
                                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                                        </div>
                                        <b className="caret d-none d-lg-block d-xl-block" />
                                        <p className="d-lg-none">Log out</p>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-navbar" right tag="ul">
                                        {(!firebase.auth().currentUser) ?
                                            <>
                                            <Link to='/main/sign-in' tag="li">
                                                <DropdownItem className="nav-item">Sign in</DropdownItem>
                                            </Link>
                                            <Link to='/main/login' tag="li">
                                            <DropdownItem className="nav-item">Login</DropdownItem>
                                            </Link>
                                            </>
                                        :
                                            <>
                                            <Link to='/main/user-profile' tag="li">
                                                <DropdownItem className="nav-item">Profile</DropdownItem>
                                            </Link>
                                            <Link to='/main/settings' tag="li">
                                            <DropdownItem className="nav-item">Settings</DropdownItem>
                                            </Link>
                                            <DropdownItem divider tag="li" />
                                            <Link to='main/dashboard' tag="li">
                                            <DropdownItem className="nav-item" onClick={this.handleLogOut}>Log out</DropdownItem>
                                            </Link>
                                            </>
                                        }



                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <li className="separator d-lg-none" />
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default MainNavbar;
