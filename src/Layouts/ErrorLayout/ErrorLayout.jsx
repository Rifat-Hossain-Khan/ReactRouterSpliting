import React from 'react';
import ErrorRoute from '../../router/ErrorRoute';

const ErrorLayout = () => {
    return (
        <div>
            {ErrorRoute.map(v=>v)}
        </div>
    );
}

export default ErrorLayout;