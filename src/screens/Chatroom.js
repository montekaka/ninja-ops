import React, {useEffect, useState} from 'react';
import wechat from '../apis/wechat'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const Chatroom = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    wechat.get('/v1/wechat-users')
    .then((res) => {
      setUsers(res.data.users)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <Layout>
      <Sider className="site-layout-background" width={200}>

      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
    </Layout>
  )
}

export default Chatroom;