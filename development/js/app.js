import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Register} from "./models/Register";

import "../scss/main.scss";

console.log('check')

const App = () => <Register />

ReactDOM.render(<App />, document.querySelector("#app"));