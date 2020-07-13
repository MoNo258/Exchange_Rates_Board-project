# Exchange Rates Board project
Final Project for CodersLab JavaScrip+React course. Application is presenting latest and historical exchange rates (sourced from API) and financial news (sourced from API). Simple Firebase registration and login process is available (this will be developed further together with user's functionalities).

## Link to demo
https://mono258.github.io/Exchange_Rates_Board-project `*`

`*` NOTE: data from one API is missing due to unavailability to reach it through `https` link (this works correctly locally, on dev server, though). Also please be aware that app is not finished - additional features connected to user's customization will ba added later. In case when NEWS tab is not showing you data please open this app in Chrome Incognito card or in Firefox browser.

#### This project uses:
* JavaScript ES6
* React
* CSS and Sass
* Bootstrap & reactstrap
* Webpack (for configuration)
* REST API + WebSocket API
* Firebase
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

#### For running app locally
1. Clone app: `git clone https://github.com/MoNo258/Exchange_Rates_Board-project`
2. Go to folder where files will be placed `cd Exchange_Rates_Board-project`
3. In above folder run in terminal `npm i`

#### if you want to download this project locally and run it there you need to get access to APIs and connect the project with Firebase.
1. Create accounts for FIXER API and XTB API.
2. You need to create Firebase account and then project for web app that must be connected to this one (use Firebase tutorials).
3. Create file `secret.js` with details for APIs and Firebase.
    * create file: `development/js/services/secret.js`. Structure should be as follows:
```JavaScript
//API FIXER key (for REST API used in Rates.js - spot rates for EUR)
export const KEY_FIXER = 'YOUR-KEY';

//API XTB login & password  (for WebSocket API used in News.js)
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

#### Webpack stuff
`webpack.config.js` is ready for development usage.

#### How to run app?

In `package.json` there is key called `scripts` which give information what needs to be run when app is starting.
```JavaScript
{
    "dev": "webpack-dev-server --hot -d",
    "start": "node server.js",
    "build": "webpack -p",
}
```
`dev` will run development server (`http://localhost:3001/`) - use command:
```JavaScript
npm run dev
```
`build` will run production version of app. This will create `build` folder with `index.html`, `main.css` and `out.js` files (then `index.html` must be opened with Live Server option in your IDE) - use command:
```JavaScript
npm run build
```
`start` will run latest version of app using server created with Express (locally this will be: `http://localhost:8080/` - setup is available in `server.js` file) - use command:
```JavaScript
npm start
```
This additional server is added because of Heroku deployment process (note: server used on Heroku is defined by Heroku and so `process.env.PORT` variable is used) - Heroku battle is in progress...

There are cases when extensions installed in your browser can disturb when running app (mostly connected to WebSocket API) - then I recommend to open this project in incognito card (without extensions).
