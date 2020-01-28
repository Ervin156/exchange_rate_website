import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Contacts from "../Main/contacts/Contacts";
import RateUSD from "../Main/rateUSD/RateUSD";
import Points from "../Main/exchange_points/Points";
import Photos from "../Main/photos/Photos";
import RateUAH from '../Main/rateUAH/RateUAH';
// import Weather from "../Main/weather/Weather";


class Router extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={RateUSD} />
                <Route path='/rateUAH' component={RateUAH}/>
                <Route path='/contacts' component={Contacts} />
                <Route path='/photos' component={Photos} />
                <Route path='/points' component={Points} />
                {/* <Route path='/weather' component={Weather} /> */}

            </Switch >
        )
    }
}
export default Router;