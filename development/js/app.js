import React, {Component} from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import Layout from "./layouts/Layout";
import firebase from "./firebase/firebase.config";
import "../scss/main.scss";

console.log('check if working...');


const hist = createBrowserHistory();

const App = () => {
    return (
        <>
            <Router history={hist}>
                <Switch>
                    <Route path="/main" render={props => <Layout {...props} />}/>
                    <Route path="/main/sign-in" render={ () => (firebase.auth().currentUser ? (<Redirect to="/" />) : (<Redirect to="/main/sign-in" />) )} />
                    <Route path="/main/login" render={ () => (firebase.auth().currentUser ? (<Redirect to="/" />) : (<Redirect to="/main/login" />) )} />
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