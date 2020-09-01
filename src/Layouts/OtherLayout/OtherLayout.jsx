import React from 'react';
import { Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Nav from '../../components/Nav/Nav';
import OtherRoutes from '../../router/OtherRoutes';

const OtherLayout = () => {
    return (
        <Layout>
            <Nav />
            <Switch>
                {OtherRoutes.map(v => v)}
            </Switch>
        </Layout>
    );
}

export default OtherLayout;