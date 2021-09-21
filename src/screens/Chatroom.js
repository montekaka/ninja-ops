import React, {useEffect, useState} from 'react';
import wechat from '../apis/wechat'
import { Layout, Menu, Breadcrumb } from 'antd';
import {UserSidebar, MessageHeader} from './../components'
const { Header, Content, Footer, Sider } = Layout;

const Chatroom = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  const handleUserChange = (_user) => {
    setUser(_user);
  }

  useEffect(() => {
    wechat.get('/v1/wechat-users')
    .then((res) => {
      setUsers(res.data.users)
      if(res.data.users.length > 0) {
        setUser(res.data.users[0]);
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <Layout>
      <Sider className="site-layout-background" style={{padding: "20px"}} width={200}>
        <UserSidebar items={users} changeUser={handleUserChange}/>
      </Sider>
      <Content style={{ minHeight: 280 }}>
        <MessageHeader user={user}/>
      </Content>
    </Layout>
  )
}

export default Chatroom;