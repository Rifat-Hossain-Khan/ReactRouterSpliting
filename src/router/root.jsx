import React from 'react';
import { Switch } from 'react-router-dom';
import OtherRoutes from './OtherRoutes';
import UserRoutes from './UserRoutes';
import TopRoutes from './TopRoutes';
import ErrorRoute from './ErrorRoute';

const root = (
    <Switch>
        {TopRoutes.map(v=>v)}
        {UserRoutes.map(v=>v)}
        {OtherRoutes.map(v=>v)}
        {ErrorRoute.map(v=>v)}
    </Switch>
);

export default root;