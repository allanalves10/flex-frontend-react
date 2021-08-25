import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Debts from './../pages/Debts';
import Home from './../pages/Home';

function Routes() {
    return (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/debts" component={Debts}/>
    </Switch>
    )
}

export default Routes;