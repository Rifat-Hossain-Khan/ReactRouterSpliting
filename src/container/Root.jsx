import React from 'react';
import { Layout } from 'antd';
import MenuMain from '../components/Menu/MenuMain';
import BreadcrumbMain from '../components/Breadcrumbmain/BreadcrumbMain';
import ContentMain from '../components/Content/ContentMain';

const Root = () => {
    return (
        <Layout>
            <MenuMain />
            <Layout style={{ padding: '0 24px 24px' }}>
                <BreadcrumbMain />
                <ContentMain />
            </Layout>
        </Layout>
    );
}

export default Root;