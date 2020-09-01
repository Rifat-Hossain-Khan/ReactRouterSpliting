import React from 'react';
import { Layout } from 'antd';
import { Switch } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import TopRoutes from '../../router/TopRoutes';


const TopLayout = () => {
    return (
        <Layout>
            <Nav />
            <Switch>
                {TopRoutes.map(v => v)}
            </Switch>
        </Layout>
    );
}

export default TopLayout;