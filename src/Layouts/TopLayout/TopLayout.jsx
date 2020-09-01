import React from 'react';
import { Layout } from 'antd';
import Nav from '../../components/Nav/Nav';
import TopRoutes from '../../router/TopRoutes';


const TopLayout = () => {
    return (
        <Layout>
            <Nav/>
            {TopRoutes.map(v=>v)}
        </Layout>
    );
}

export default TopLayout;