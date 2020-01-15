import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Contacts from "../Main/contacts/Contacts";
import Home from "../Main/home/Home";
import Points from "../Main/exchange_points/Points";
import Photos from "../Main/photos/Photos";
import PrivatAPI from '../Main/main/main';


class Router extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/main" component={PrivatAPI}/>
                <Route path='/contacts' component={Contacts} />
                <Route path='/photos' component={Photos} />
                <Route path='/points' component={Points} />

            </Switch >
        )
    }
}
export default Router;