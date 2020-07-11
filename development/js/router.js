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
// import Dashboard from "./views/Dashboard.js";
// import Charts from "./views/Charts.js";
import Settings from "./views/Settings.js";
// import UserProfile from "./views/UserProfile.js";
// import News from "./views/News";
// import SignIn from "./views/SignIn";
// import Login from "./views/Login";

var routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "tim-icons icon-chart-pie-36",
        // component: Dashboard,
        component: Settings,
        layout: "/main"
    },
    {
        path: "/charts",
        name: "Charts",
        icon: "tim-icons icon-chart-bar-32",
        // component: Charts,
        component: Settings,
        layout: "/main"
    },
    {
        path: "/news",
        name: "News",
        icon: "tim-icons icon-world",
        // component: News,
        component: Settings,
        layout: "/main"
    },
    {
        path: "/settings",
        name: "Settings",
        icon: "tim-icons icon-puzzle-10",
        component: Settings,
        layout: "/main"
    },
    {
        path: "/sign-in",
        name: "Sign In",
        icon: "tim-icons icon-single-02",
        // component: SignIn,
        component: Settings,
        layout: "/main"
    },
    {
        path: "/login",
        name: "Login",
        icon: "tim-icons icon-single-02",
        // component: Login,
        component: Settings,
        layout: "/main"
    },
    {
        path: "/user-profile",
        name: "User Profile",
        icon: "tim-icons icon-single-02",
        component: Settings,
        // component: UserProfile,
        layout: "/main"
    },


];
export default routes;
