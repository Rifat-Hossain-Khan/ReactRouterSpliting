import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Root from '../container/Root';


export default [
    <Route exact path="/top/root" component={Root} key={1} />,
    <Route exact path="/top" render={() => <Redirect to="/top/root" />} key={2} />
];
