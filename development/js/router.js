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
import Dashboard from "./views/Dashboard.js";
// import Icons from "./views/Icons.js";
// import Map from "./views/Map.js";
import Charts from "./views/Charts.js";
// import Rtl from "./views/Rtl.js";
import TableList from "./views/TableList.js";
import Typography from "./views/Typography.js";
import UserProfile from "./views/UserProfile.js";
import News from "./views/News";
import SignIn from "./views/SignIn";
import Login from "./views/Login";

var routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "tim-icons icon-chart-pie-36",
        component: Dashboard,
        layout: "/main"
    },
    // {
    //     path: "/icons",
    //     name: "Icons",
    //     rtlName: "rtlName,
    //     icon: "tim-icons icon-atom",
    //     component: Icons,
    //     layout: "/main"
    // },
    // {
    //     path: "/map",
    //     name: "Map",
    //     rtlName: "rtlName",
    //     icon: "tim-icons icon-pin",
    //     component: Map,
    //     layout: "/main"
    // },
    {
        path: "/charts",
        name: "Charts",
        icon: "tim-icons icon-chart-bar-32",
        component: Charts,
        layout: "/main"
    },


    {
        path: "/sign-in",
        name: "Sign In",
        icon: "tim-icons icon-single-02",
        component: SignIn,
        layout: "/main"
    },

    {
        path: "/login",
        name: "Login",
        icon: "tim-icons icon-single-02",
        component: Login,
        layout: "/main"
    },

    {
        path: "/user-profile",
        name: "User Profile",
        icon: "tim-icons icon-single-02",
        component: UserProfile,
        layout: "/main"
    },
    {
        path: "/tables",
        name: "Table List",
        icon: "tim-icons icon-puzzle-10",
        component: TableList,
        layout: "/main"
    },
    {
        path: "/typography",
        name: "Typography",
        icon: "tim-icons icon-align-center",
        component: Typography,
        layout: "/main"
    },
    {
        path: "/news",
        name: "News",
        icon: "tim-icons icon-world",
        component: News,
        layout: "/main"
    },
    // {
    //     path: "/rtl-support",
    //     name: "RTL Support",
    //     rtlName: "rtlName",
    //     icon: "tim-icons icon-world",
    //     component: Rtl,
    //     layout: "/main"
    // }
];
export default routes;
