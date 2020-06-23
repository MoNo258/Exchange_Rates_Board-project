import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Register} from "./components/Register";
// import { variableName } from '../assets/black-dashboard-react/variables/charts';
import {createBrowserHistory} from "history";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import Layout from "./layouts/Layout";
import "../scss/main.scss";

console.log('check if working...');

const hist = createBrowserHistory();
const App = () => {
    return (
        <>
            {/*<Register/>*/}
            <Router history={hist}>
                <Switch>
                    <Route path="/main" render={props => <Layout {...props} />}/>
                    <Redirect from="/" to="/main/dashboard"/>
                </Switch>
            </Router>,
        </>
    )
};

ReactDOM.render(<App/>, document.querySelector("#app"));
