import React, {Component} from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import Layout from "./layouts/Layout";
import firebase from "./firebase/firebase.config";
import "../scss/main.scss";


const hist = createBrowserHistory();

const App = () => {
    return (
        <>
            <Router history={hist}>
                <Switch>
                    <Route path="/main/login" render={ (props) => (firebase.auth().currentUser ? (<Redirect to="/main/dashboard" />) : (<Layout {...props} />) )} />
                    <Route path="/main/sign-in" render={ (props) => (firebase.auth().currentUser ? (<Redirect to="/main/dashboard" />) : (<Layout {...props} />) )} />
                    <Route path="/main" render={props => <Layout {...props} />}/>
                    <Redirect from="/" to="/main/dashboard"/>
                </Switch>
            </Router>
        </>
    )
};

ReactDOM.render(<App/>, document.querySelector("#app"));


//const reload = () => window.location.reload();
//
// <Route path="/my-static-file.ext" onEnter={reload} />
// <Route path="/something.html" onEnter={reload} />