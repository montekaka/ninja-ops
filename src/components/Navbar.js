import React from "react";
import { Link } from 'react-router-dom';
import { IconSemiLogo, IconBell, IconHelpCircle, IconBytedanceLogo,IconHome, IconComment,IconSetting } from '@douyinfe/semi-icons';
// import { Layout, Menu, Breadcrumb } from 'antd';
// const { Header, Content, Footer } = Layout;
import { Layout, Nav, Button, Breadcrumb } from '@douyinfe/semi-ui';


const Navbar = () => {
  const { Header } = Layout;

  return (
    <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <div>
        <Nav mode="horizontal" defaultSelectedKeys={['home']}>
          <Link to="/"><Nav.Item itemKey="home" text="Home" icon={<IconHome size="large" />}/></Link>
          <Link to="/chatroom"><Nav.Item itemKey="chatroom" text="Chatroom" icon={<IconComment size="large" to="/chatroom"/>} /></Link>
        </Nav>
      </div>
    </Header>
  )
}

export default Navbar