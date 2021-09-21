import React from "react";
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const Navbar = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>

        {[{link: '/', label: 'Home'}, {link: '/chatroom', label: 'Chatroom'}].map((item, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>
            <Link to={item.link} style={{
            textDecoration: 'none'
          }}>{item.label}</Link>
          </Menu.Item>;
        })}
      </Menu>
    </Header>
  )
}

export default Navbar