import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Register} from "./models/Register";

import "../scss/main.scss";
import Sidebar from "black-dashboard-react/src/components/Sidebar/Sidebar";
import RTL from "black-dashboard-react/src/layouts/RTL/RTL";
import { variableName } from 'black-dashboard-react/src/variables/charts';
import FixedPlugin from "black-dashboard-react/src/components/FixedPlugin/FixedPlugin";
import Footer from "black-dashboard-react/src/components/Footer/Footer";
import RTLNavbar from "black-dashboard-react/src/components/Navbars/RTLNavbar";




// import Sidebar from "black-dashboard-react/src/components/Sidebar/Sidebar";
// import FixedPlugin from "black-dashboard-react/src/components/FixedPlugin/FixedPlugin";
// import Footer from "black-dashboard-react/src/components/Footer/Footer";
// import AdminNavbar from "black-dashboard-react/src/components/Navbars/AdminNavbar";
// import RTLNavbar from "black-dashboard-react/src/components/Navbars/RTLNavbar";
// import Admin from "black-dashboard-react/src/layouts/Admin/Admin";
// import RTL from "black-dashboard-react/src/layouts/RTL/RTL";
// import charts from "black-dashboard-react/src/variables/charts"
// import Dashboard from "black-dashboard-react/src/views/Dashboard";
// import Icons from "black-dashboard-react/src/views/Icons";
// import Map from "black-dashboard-react/src/views/Map";
// import Notifications from "black-dashboard-react/src/views/Notifications";
// import Rtl from "black-dashboard-react/src/views/Rtl";
// import TableList from "black-dashboard-react/src/views/TableList";
// import Typography from "black-dashboard-react/src/views/Typography";
// import UserProfile from "black-dashboard-react/src/views/UserProfile";


console.log('check if working...');

const App = () => {
    return (
        <>
            <Register />
            <Sidebar />
            <RTL />
        </>
    )
}

ReactDOM.render(<App/>, document.querySelector("#app"));


//
// import React from "react";
// import ReactDOM from "react-dom";
// import { createBrowserHistory } from "history";
// import { Router, Route, Switch, Redirect } from "react-router-dom";
//
// import AdminLayout from "black-dashboard-react/src/layouts/Admin/Admin";
// import RTLLayout from "black-dashboard-react/src/layouts/RTL/RTL";
//
// import "black-dashboard-react/src/assets/scss/black-dashboard-react.scss";
// // import "black-dashboard-react/src/assets/demo/demo.css";
// // import "black-dashboard-react/src/assets/css/nucleo-icons.css";
//
// const hist = createBrowserHistory();
//
// ReactDOM.render(
//     <Router history={hist}>
//         <Switch>
//             <Route path="/admin" render={props => <AdminLayout {...props} />} />
//             <Route path="/rtl" render={props => <RTLLayout {...props} />} />
//             <Redirect from="/" to="/admin/dashboard" />
//         </Switch>
//     </Router>,
//     document.getElementById("app")
// );