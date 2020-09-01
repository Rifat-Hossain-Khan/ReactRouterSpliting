import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorRoute from '../../router/ErrorRoute';

const ErrorLayout = () => {
    return (
        <div>
            <Switch>
                {ErrorRoute.map(v => v)}
            </Switch>
        </div>
    );
}

export default ErrorLayout;