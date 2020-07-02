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
import { NavLink, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";

var ps;

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.activeRoute.bind(this);
    }
    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(this.refs.sidebar, {
                suppressScrollX: true,
                suppressScrollY: false
            });
        }
    }
    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
        }
    }
    linkOnClick = () => {
        document.documentElement.classList.remove("nav-open");
    };
    render() {
        const { bgColor, routes, logo } = this.props;
        let logoImg = null;
        let logoText = null;
        if (logo !== undefined) {
            if (logo.outterLink !== undefined) {
                logoImg = (
                    <a
                        href={logo.outterLink}
                        className="simple-text logo-mini"
                        target="_blank"
                        onClick={this.props.toggleSidebar}
                    >
                        <div className="logo-img">
                            {/*<img src={logo.imgSrc} alt="logo" />*/}
                            <img src='https://cdn.pixabay.com/photo/2017/01/25/17/33/diagram-2008478_960_720.png' alt="logo" />
                        </div>
                    </a>
                );
                logoText = (
                    <a
                        href={logo.outterLink}
                        className="simple-text logo-normal"
                        target="_blank"
                        onClick={this.props.toggleSidebar}
                    >
                        {logo.text}
                    </a>
                );
            } else {
                logoImg = (
                    <Link
                        to={logo.innerLink}
                        className="simple-text logo-mini"
                        onClick={this.props.toggleSidebar}
                    >
                        <div className="logo-img">
                            {/*<img src={logo.imgSrc} alt="logo" />*/}
                            <img src='https://cdn.pixabay.com/photo/2017/01/25/17/33/diagram-2008478_960_720.png' alt="logo" />
                            {/*<img src='https://cdn.pixabay.com/photo/2013/07/12/14/28/chart-line-148256_960_720.png' alt="logo" />*/}
                        </div>
                    </Link>
                );
                logoText = (
                    <Link
                        to={logo.innerLink}
                        className="simple-text logo-normal"
                        onClick={this.props.toggleSidebar}
                    >
                        {logo.text}
                    </Link>
                );
            }
        }
        return (
            <div className="sidebar" data={bgColor}>
                <div className="sidebar-wrapper sidebar-wrapper--custom" id='sidebar-wrapper--custom' ref="sidebar">
                    {logoImg !== null || logoText !== null ? (
                        <div className="logo">
                            {logoImg}
                            {logoText}
                        </div>
                    ) : null}
                    <Nav>
                        {routes.map((prop, key) => {
                            if (prop.redirect) return null;
                            return (
                                <li
                                    className={
                                        this.activeRoute(prop.path)
                                    }
                                    key={key}
                                >
                                    <NavLink
                                        to={prop.layout + prop.path}
                                        className="nav-link"
                                        activeClassName="active"
                                        onClick={this.props.toggleSidebar}
                                    >
                                        <i className={prop.icon} />
                                        <p>{prop.name}</p>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </Nav>
                </div>
            </div>
        );
    }
}

Sidebar.defaultProps = {
    bgColor: "primary",
    routes: [{}]
};

Sidebar.propTypes = {
    // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
    // insde the links of this component
    bgColor: PropTypes.oneOf(["primary", "blue", "green"]),
    routes: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
        // innerLink is for links that will direct the user within the app
        // it will be rendered as <Link to="...">...</Link> tag
        innerLink: PropTypes.string,
        // outterLink is for links that will direct the user outside the app
        // it will be rendered as simple <a href="...">...</a> tag
        outterLink: PropTypes.string,
        // the text of the logo
        text: PropTypes.node,
        // the image src of the logo
        imgSrc: PropTypes.string
    })
};

export default Sidebar;
