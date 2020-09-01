import React from 'react';
import { Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Nav from '../../components/Nav/Nav';
import UserRoutes from '../../router/UserRoutes';

const UserLayout = () => {
    return (
        <Layout>
            <Nav />
            <Switch>
                {UserRoutes.map(v => v)}
            </Switch>
        </Layout>
    );
}

export default UserLayout;