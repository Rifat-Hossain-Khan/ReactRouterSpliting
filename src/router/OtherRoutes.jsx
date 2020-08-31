import React from 'react';
import { Route } from "react-router-dom";
import B from "../container/B";
import C from "../container/C";


export default  [
    <Route exact path="/b" component={B} key={1}/>,
    <Route exact path="/c" component={C} key={2}/>
];