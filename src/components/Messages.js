import React from 'react';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Message = ({item}) => {
  if(item) {
    const {content, createTime, fromUserName, messageType} = item;
    if(messageType === 'receive') {
      return (
        <div style={{display: 'flex'}}>
          <div style={{marginRight: "10px"}}>
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{fromUserName}</Avatar>
          </div>
          <div><p>{content}</p></div>
        </div>
      )
    } else {
      return (
        <div style={{display: 'flex', flexDirection: 'row-reverse'}}>          
          <div style={{marginLeft: "10px"}}>
            <Avatar style={{ backgroundColor: '#87d068' }}>{fromUserName}</Avatar>
          </div>
          <div><p>{content}</p></div>
        </div>
      )      
    }
 
  }

  return null;
}

const Messages = ({messages}) => {
  if(messages) {
    return (
      <div style={{
          display: 'flex', 
          padding: "20px", 
          minHeight: '280px',
          flexDirection: 'column-reverse'
        }}>
        {
          messages.map((item, id) => <Message key={(id+1).toString()} item={item}/>)
        }
      </div>
    )
  }

  return null;
}

export default Messages;