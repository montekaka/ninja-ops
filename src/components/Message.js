import React from 'react';
import { Avatar, Skeleton, Typography } from '@douyinfe/semi-ui';
import { IconUser } from '@douyinfe/semi-icons';
import MessageAvatar from './MessageAvatar'
import MessageHeading from './MessageHeading';

const Message = ({item, prevItem}) => {
  const { Title, Text, Paragraph } = Typography;

  if(item) {
    const {content, createTime, fromUserName, messageType, fromUserAvatar} = item;
    
    return (
      <div style={{display: 'flex'}}>
        <div style={{width: "32px"}}>
          <MessageAvatar fromUserName={fromUserName} fromUserAvatar={fromUserAvatar} prevUser={prevItem}/>
        </div>
        <div style={{padding: '0 10px'}}>
          <MessageHeading fromUserName={fromUserName} prevUser={prevItem}/>
          <Paragraph>{content}</Paragraph>
        </div>
      </div>
    )
  }

  return null;
}

export default Message;