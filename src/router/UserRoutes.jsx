import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import A from '../container/A';


export default  [
    <Route exact path="/user/a" component={A} key={1}/>,
    <Route exact path="/user" render={() => <Redirect to="/user/a" />} key={2} />
];