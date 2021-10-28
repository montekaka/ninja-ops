import React, {useEffect, useState} from 'react';
import wechat from '../apis/wechat'
import {useSocketMessages} from '../hooks'
import {  messagesAtom,
  currentUserAtom,
  getCurrentContactAtom,
  getContactsAtom,
  fetchContacts} from '../jotais'
import { Layout, Breadcrumb, Avatar, Typography} from '@douyinfe/semi-ui';
import {UserSidebar, MessageHeader, MessageInput, Messages, ContactList} from './../components'
import { useAtom } from 'jotai';

const Chatroom = (props) => {
  // const id = props.match.params.id;
  const { Content, Sider, Footer} = Layout;
  const { Text } = Typography;

  // fetch contacts
  // create socket connection
  const [contacts] = useAtom(messagesAtom)
  const [friends] = useAtom(getContactsAtom)
  const [_, fetchData] = useAtom(fetchContacts);

  useEffect(() => {
    fetchData()
  }, [])

  // const [currentUser, setCurrentUser] = useState({"name": "Kaka", "id": "7881300233152715", "avatar": "http://mmhead.c2c.wechat.com/mmhead/SMt4cxnN46q1o0KsondHotCuFkCZh28ZbKHichbnFRFbiad2ZkRFswkg/0"});
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const changeUser = (user) => {
    setCurrentUser(user.id);
  }

  return (
    <Layout>
      <Sider>
        <ContactList
          items={friends}
          changeUser={changeUser}
        />
      </Sider>
      <Layout>
        <Content 
          style={{
            padding: '24px',
            backgroundColor: 'var(--semi-color-bg-4)'
          }}      
        >
          {currentUser && <div style={{marginBottom: '24px'}}>
            <Avatar src={currentUser.avatar} size="small"/>
            <Text style={{marginLeft: '10px'}} >{currentUser.name}</Text>
          </div>}
          <Messages/>
        </Content>
        <Footer style={{
          padding: '24px',
        }}>
          <MessageInput
                // onMessageChange={onMessageChange}
                // message={message} 
                // submitting={submitting} 
                // onSubmit={onSubmit} 
              />
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Chatroom;