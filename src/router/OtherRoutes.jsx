import React from 'react';
import { Route, Redirect } from "react-router-dom";
import B from "../container/B";
import C from "../container/C";


export default [
    <Route exact path="/other/b" component={B} key={1} />,
    <Route exact path="/other/c" component={C} key={2} />,
    <Route exact path="/other" key={3} render={() => <Redirect to="/other/b" />} />,
    <Route path="/other" key={4} render={() => <Redirect to="/error/400" />} />
];