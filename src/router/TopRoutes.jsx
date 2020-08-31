import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Root from '../container/Root';


export default [
    <Route exact path="/" key={1} render={() => <Redirect to="/root" />} />,
    <Route exact path="/root" component={Root} key={2}/>
];
