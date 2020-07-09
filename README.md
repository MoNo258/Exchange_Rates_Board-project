# Exchange Rates Board project
Final Project for CodersLab JavaScrip+React course

#### This project uses:
* JavaScript ES6
* React
* CSS and Sass
* Bootstrap & reactstrap
* Webpack (for configuration)
* REST API + WebSocket API
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

## General stuff

#### if you want to download this project locally and run it there you need to get access to APIs and connect the project with Firebase.
1. Create accounts for FIXER API and XTB API.
2. You need to create Firebase account and then project for web app that must be connected to this one (use Firebase tutorials).
3. Create file `secret.js` with details for APIs and Firebase.
    * create file: `development/js/services/secret.js`. Structure should be as follows:
```JavaScript
//API FIXER key
export const KEY_FIXER = 'YOUR-KEY';

//API XTB login & password
export const USER_ID_XTB = 'YOUR-LOGIN-ID';
export const USER_PSSWRD_XTB = 'YOUR-PASSWORD';

//Firebase web app configuration
// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: 'YOUR_DATA',
    authDomain: 'YOUR_DATA',
    databaseURL: 'YOUR_DATA',
    projectId: 'YOUR_DATA',
    storageBucket: 'YOUR_DATA',
    messagingSenderId: 'YOUR_DATA',
    appId: 'YOUR_DATA'
};
```




## Webpack stuff and running app
`webpack.config.js` is ready for development usage.


How to run app?

In `package.json` there is key called `scripts` which give information what needs to be run when app is starting.
```JavaScript
{
"start": "webpack-dev-server --hot -d",
"build": "webpack -p"
}
```
`start` will run development server (`http://localhost:3001/`)
```JavaScript
npm start
```
`build` will run production version of our app. This will create `build` folder with out.js file:
```JavaScript
npm run build
```

There are cases when extensions installed in your browser can disturb when running app (mostly connected to WebSocket API) - then I recommend to open this project in incognito card (without extensions).
