import React from 'react';
import { Layout } from 'antd';
import Nav from '../../components/Nav/Nav';
import OtherRoutes from '../../router/OtherRoutes';

const OtherLayout = () => {
    return (
        <Layout>
            <Nav />
            {OtherRoutes.map(v => v)}
        </Layout>
    );
}

export default OtherLayout;