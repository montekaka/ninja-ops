import React, {useEffect, useState} from 'react';
import wechat from '../apis/wechat'
import {useSocketMessages} from '../hooks'
import { Layout, Breadcrumb, Avatar, Typography} from '@douyinfe/semi-ui';
import {UserSidebar, MessageHeader, CommentBox, Messages, ContactList} from './../components'

const Chatroom = () => {
  const { Content, Sider} = Layout;
  const { Text } = Typography;

  const [currentUser, setCurrentUser] = useState({"name": "Kaka", "id": "7881300233152715", "avatar": "http://mmhead.c2c.wechat.com/mmhead/SMt4cxnN46q1o0KsondHotCuFkCZh28ZbKHichbnFRFbiad2ZkRFswkg/0"});

  const changeUser = (user) => {
    setCurrentUser(user);
  }

  return (
    <Layout>
      <Sider>
        <ContactList
          items={[
            {"name": "Kaka", "id": "7881300233152715", "avatar": "http://mmhead.c2c.wechat.com/mmhead/SMt4cxnN46q1o0KsondHotCuFkCZh28ZbKHichbnFRFbiad2ZkRFswkg/0"},
            {"name": "may 张丹萍", "id": "7881302734171450", "avatar": "http://mmhead.c2c.wechat.com/mmhead/bVy2VQVTWzbNu2kVtzRgbiaPAO53Ws8uG1HB7PS2bBGNr6mEfj80XUA/0"}
          ]}
          changeUser={changeUser}
        />
      </Sider>
      <Content 
        style={{
          padding: '24px',
          backgroundColor: 'var(--semi-color-bg-0)'
        }}      
      >
        <div style={{marginBottom: '24px'}}>
          <Avatar src={currentUser.avatar} size="small"/>
          <Text size='large' style={{marginLeft: '10px'}} >{currentUser.name}</Text>
        </div>
          
      </Content>
    </Layout>
  )
}

export default Chatroom;