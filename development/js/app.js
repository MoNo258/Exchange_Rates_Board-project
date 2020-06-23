import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Register} from "./components/Register";

// import Sidebar from "../assets/black-dashboard-react/components/Sidebar/Sidebar";
// import RTL from "../assets/black-dashboard-react/layouts/RTL/RTL";
// import { variableName } from '../assets/black-dashboard-react/variables/charts';
// import FixedPlugin from "../assets/black-dashboard-react/components/FixedPlugin/FixedPlugin";
// import Footer from "../assets/black-dashboard-react/components/Footer/Footer";
// import RTLNavbar from "../assets/black-dashboard-react/components/Navbars/RTLNavbar";

import {createBrowserHistory} from "history";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import AdminLayout from "../assets/black-dashboard-react/layouts/Admin/Admin";
import RTLLayout from "../assets/black-dashboard-react/layouts/RTL/RTL";
import "../assets/black-dashboard-react/assets/scss/black-dashboard-react.scss";
import "../scss/main.scss";


console.log('check if working...');

const hist = createBrowserHistory();
const App = () => {
    return (
        <>
            {/*<Register/>*/}
            <Router history={hist}>
                <Switch>
                    <Route path="/admin" render={props => <AdminLayout {...props} />}/>
                    <Route path="/rtl" render={props => <RTLLayout {...props} />}/>
                    <Redirect from="/" to="/admin/dashboard"/>
                </Switch>
            </Router>,

        </>
    )
};

ReactDOM.render(<App/>, document.querySelector("#app"));
