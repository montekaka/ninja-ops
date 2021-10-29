import React, {useEffect, useState} from 'react';
import { Layout, Card, Avatar, Space, Button, Typography } from '@douyinfe/semi-ui';
import wechat from '../apis/wechat'

const Home = () => {
  const { Content} = Layout;
  const { Meta } = Card;
  const { Text } = Typography;

  const [user, setUser] = useState({});

  useEffect(() => {
    wechat.get(`/v1/wecom-member/joshchen`)
    .then((res) => {
      const {avatar, name, qr_code, userid} = res.data;
      setUser({avatar, name, qr_code, userid});
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <Content className="site-layout"
      style={{
        padding: '24px',
        backgroundColor: 'var(--semi-color-bg-0)'
      }}    
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Card
          style={{ maxWidth: 360 }}
          title={
            <Meta 
              title={user.name}
              avatar={
                <Avatar 
                  size="default"
                  src={user.avatar}
                />
              }
            />
          }
          cover={ 
            <img 
              alt="example" 
              src={user.qr_code}
            />
          }          
        >
        </Card>        
      </div>      
    </Content>
  )
}

export default Home;