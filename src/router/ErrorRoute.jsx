import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Error500 from '../container/Error500';


export default [
    <Route exact path="/error" component={Error500} key={1} />,
    <Route exact path="/error/404" render={() => <h1>400</h1>} key={2} />,
    <Route path="/error" render={() => <Redirect to="/error/404" />} key={3} />
];