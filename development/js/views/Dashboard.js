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
import React from "react";

import Rates from "../components/Rates";
import RatesWithChange from "../components/RatesWithChange";
import InterestRates from "../components/InterestRates";

class Dashboard extends React.Component {


    render() {
        return (
            <>
                <div className="content">

                    <RatesWithChange />
                    <Rates />
                    {/*<InterestRates />*/}

                </div>
            </>
        );
    }
}

export default Dashboard;
