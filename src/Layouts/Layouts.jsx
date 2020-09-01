import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TopLayout from './TopLayout/TopLayout';
import UserLayout from './UserLayout/UserLayout';
import OtherLayout from './OtherLayout/OtherLayout';
import ErrorLayout from './ErrorLayout/ErrorLayout';

const Layouts = () => {
    return (
        <Switch>
            <Route  path="/top" component={TopLayout} />
            <Route  path="/user" component={UserLayout}/>
            <Route  path="/other" component={OtherLayout}/>
            <Route  path="/error" component={ErrorLayout}/>
            <Route render={() => <h1>400</h1>} />
        </Switch>
    );
}

export default Layouts;