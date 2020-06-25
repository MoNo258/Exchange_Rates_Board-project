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
import Notifications from "./views/Notifications.js";
// import Rtl from "./views/Rtl.js";
import TableList from "./views/TableList.js";
import Typography from "./views/Typography.js";
import UserProfile from "./views/UserProfile.js";
import News from "./views/News";

var routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        rtlName: "rtlName",
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
        path: "/notifications",
        name: "Notifications",
        rtlName: "rtlName",
        icon: "tim-icons icon-bell-55",
        component: Notifications,
        layout: "/main"
    },
    {
        path: "/user-profile",
        name: "User Profile",
        rtlName: "rtlName",
        icon: "tim-icons icon-single-02",
        component: UserProfile,
        layout: "/main"
    },
    {
        path: "/tables",
        name: "Table List",
        rtlName: "rtlName",
        icon: "tim-icons icon-puzzle-10",
        component: TableList,
        layout: "/main"
    },
    {
        path: "/typography",
        name: "Typography",
        rtlName: "rtlName",
        icon: "tim-icons icon-align-center",
        component: Typography,
        layout: "/main"
    },
    {
        path: "/news",
        name: "News",
        rtlName: "rtlName",
        icon: "tim-icons icon-align-center",
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
