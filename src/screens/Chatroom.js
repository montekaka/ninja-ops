import React, {useEffect, useState} from 'react';
import wechat from '../apis/wechat'
import {useSocketMessages} from '../hooks'
import { Layout, Menu, Breadcrumb } from 'antd';
import {UserSidebar, MessageHeader, CommentBox, Messages} from './../components'
const { Header, Content, Footer, Sider } = Layout;

const Chatroom = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useSocketMessages(user.id)

  const handleUserChange = (_user) => {
    setUser(_user);
  }

  useEffect(() => {
    wechat.get('/v1/contacts')
    .then((res) => {
      setUsers(res.data)
      if(res.data.length > 0) {
        setUser(res.data[0]);
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const onSubmit = () => {
    setSubmitting(true);
    wechat.post('/v1/wechaty-message', {
      "name": user.name,
      "message": message
    })
    .then((res) => {      
      setMessages([{
        content: message, createTime: Date.now(), fromUserName: 'KF', messageType: 'send'
      }, ...messages])
      setMessage('')
      setSubmitting(false);
    })
    .catch((err) => {
      console.log(err)
      setSubmitting(false);
    })
  }

  const onMessageChange = (value) => {
    setMessage(value)
  }

  return (
    <Layout>
      <Sider className="site-layout-background" style={{padding: "20px"}} width={200}>
        <UserSidebar items={users} changeUser={handleUserChange}/>
      </Sider>
      <Content style={{ minHeight: 280 }}>
        <MessageHeader user={user}/>
        <Messages messages={messages}/>
        <CommentBox 
          onMessageChange={onMessageChange}
          message={message} 
          submitting={submitting} 
          onSubmit={onSubmit}
          />
      </Content>
    </Layout>
  )
}

export default Chatroom;