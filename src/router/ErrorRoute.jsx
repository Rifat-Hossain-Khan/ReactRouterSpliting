import React from 'react';
import { Route } from 'react-router-dom';
import Error500 from '../container/Error500';


export default [
    <Route exact path="/error" component={Error500} key={1}/>
];