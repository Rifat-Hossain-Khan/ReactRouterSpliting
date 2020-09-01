import React from 'react';
import { Layout } from 'antd';
import Nav from '../../components/Nav/Nav';
import UserRoutes from '../../router/UserRoutes';

const UserLayout = () => {
    return (
        <Layout>
            <Nav />
            {UserRoutes.map(v => v)}
        </Layout>
    );
}

export default UserLayout;