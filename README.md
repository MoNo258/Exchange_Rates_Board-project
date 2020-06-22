# Exchange Rates Board project
Final Project for CodersLab JavaScrip+React course

#### This project uses:
* JavaScript ES6
* React
* CSS and Sass
* Bootstrap
* Gulp (for Sass)
* Webpack (for js)
* REST API
* GitHub repository: Black Dashboard React `*`


`*` Copyright (c) 2018 Creative Tim | Information and license:
```JavaScript
=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
```


# Useful info

## Webpack stuff

How to run app?
in `package.json` there is key `scripts` which give information what needs to be run when app is starting.
```JavaScript
{
"start": "webpack-dev-server --hot -d",
"build": "webpack -p"
}
```
`start` will run development server:
```JavaScript
npm start
```
`build` will run production version of our app. This will create `build` folder with out.js file:
```JavaScript
npm run build
```

## JSON Server
In case when API is not available yet we can simulate getting data from the server using `JSON Server`:
`JSON Server` should be installed:
`npm install -g json-server`
Then we need to create file: `db.json` to keep data we need.
To run JSON Server we must be in the catalog where `db.json` is saved and then run:
`json-server --watch db.json`
Local server will start under address: `http://localhost:3000` (our `REST API`) so the whole database will be availabe under `http://localhost:3000/db`.
Code:
```JavaScript
const API = "http://localhost:3000";
 
fetch(`${API}/db`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```

## React Router
#### -
Installation of `React Router` from npm - put below command in the folder where you have `package.json` file:
`npm i react-router-dom --save`

The next step is configuration of `webpack-dev-server`.

`?????`

You can start your app using `npm start` command and check for the result on: `http://localhost:3001`.

#### -
In your main js file you should always import components and classes that will be used in your project, example:
```JavaScript
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
```

Example of usage inside of component:
```JavaScript
class App extends Component {
  render() {
    return <BrowserRouter>
             <>
               <Route exact path='/' component={Main} />
               <Route path='/contact' component={Contact} />
             </>
           </BrowserRouter>;
  }
}
```
#### -
`BrowserRouter` is an element taken from `React Router`. Result can be found on address: `http://localhost:3001/` for Main route and on `http://localhost:3001/contact` for Contact route.
* * Checkout difference between BrowserRouter and HashRouter.

#### -
`404`: To display customized page with error 404 page not found you need to create your own Component (example: `NotFound`) and then use Switch option to use it in case when provided address will not be available.
```JavaScript
class NotFound extends Component {
  render() {
    return <h1>404,Nothing is here</h1>;
  }
}
//...
<HashRouter>
  <Switch>
    <Route exact path='/' component={Main} />
    <Route path='/contact' component={Contact} />
    <Route component={NotFound} />
  </Switch>
</HashRouter>
```

#### -
Link creation:
React Router uses `Link` component that will generate `a` elements with with `href` attribute. 
```JavaScript
class Main extends Component {
  render() {
    return <div>
      <h1>Hello, World!</h1>
      <Link to="/contact">Go to contact</Link>
    </div>
  }
}
class Contact extends Component {
  render() {
    return <div>
      <h1>Contact us at contact@example.com</h1>
      <Link to="/">Home</Link>
    </div>
  }
}
```

#### -
`Navigation` component example (?????????????????):
```JavaScript
class Navigation extends Component {
  render() {
    return (
      <nav>
        <h1>App</h1>
        <HashRouter>
          <>
            <Navigation />
            <Switch>
              <Route path='/contact' component={Contact} />
              <Route path='*' component={NotFound} />
            </Switch>
          </>
        </HashRouter>
      </nav>

    );
  }
}
```

#### -
Parameters in React Router:
```JavaScript
<Route path='/user/:userId'
       component={UserInfo} />
```
```JavaScript
class UserInfo extends Component {
  render() {
    return (
      <h1>
        Info about User with ID:
        {this.props.match.params.userId}
      </h1>
    );
  }
}
```

#### -
Active link: Component link can know when it is active. We need to use `NavLink` instead of `Link` and add attribute `activeStyle` which will style correctly activated link. 
We also need to add attribute `exact`, to point on active element. 
```JavaScript
const activeStyle = {
  backgroundColor:'green'
};
 
<NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
<NavLink to="/contact" activeStyle={activeStyle}>Contact</NavLink>
```
or alternative styling:
```JavaScript
<NavLink exact to="/" activeClassName="active">Home</NavLink>
<NavLink to="/contact" activeClassName="active">Contact</NavLink>
```

