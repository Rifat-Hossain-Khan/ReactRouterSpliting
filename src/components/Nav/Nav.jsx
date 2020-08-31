import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './Nav.css';

const { Header } = Layout;

const Nav = () => {
    let location = useLocation();

    let value ;

    if (location.pathname === "/root") {
        value="1"
    }
    else if (location.pathname === "/a") {
        value="2"
    }
    else if (location.pathname === "/b") {
        value="3"
    }
    else if (location.pathname === "/c") {
        value="4"
    }

    return (
        <Header className="header">
            <div className="logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz-E0a4gvE970_NtQeUIJ6exE8c4DQhJUcbw&usqp=CAU" height="50px" alt="logo"/></div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[value]}>
                <Menu.Item key="1" >Dashboard <Link to="/root"/></Menu.Item>
                <Menu.Item key="2">User List <Link to="/a"/></Menu.Item>
                <Menu.Item key="3">Role Manager <Link to="/b"/></Menu.Item>
                <Menu.Item key="4">User Manager <Link to="/c"/></Menu.Item>
                <Menu.Item key="5">Campaing Manager <Link to="/"/></Menu.Item>
            </Menu>
        </Header>
    );
}

export default Nav;