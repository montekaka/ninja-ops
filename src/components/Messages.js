import React from 'react';
import { Avatar, Skeleton, Typography } from '@douyinfe/semi-ui';
import { IconUser } from '@douyinfe/semi-icons';

const Message = ({item}) => {
  const { Title, Text, Paragraph } = Typography;

  if(item) {
    const {content, createTime, fromUserName, messageType, fromUserAvatar} = item;
    return (
      <div style={{display: 'flex'}}>
        <div>
          {fromUserAvatar ? <Avatar size="small" src={fromUserAvatar}></Avatar> : <Avatar size="small" color="red" ><IconUser/></Avatar>}
        </div>
        <div style={{padding: '0 10px'}}>
          <Text style={{fontWeight: 'bold'}}>{fromUserName}</Text>
          <Paragraph>{content}</Paragraph>
        </div>
      </div>
    )
  }

  return null;
}

const Messages = ({messages}) => {
  if(messages) {
    return (
      <div style={{
        display: 'flex', 
        padding: "20px", 
        flexDirection: 'column-reverse'
      }}>
        {
          messages.map((item, id) => <Message key={(id+1).toString()} item={item}/>)
        }
      </div>
    )
  }

  return (
    <Skeleton placeholder={(<Skeleton.Paragraph rows={2}/>)} loading={true}>
      <p>Hi, Bytedance dance dance.</p>
      <p>Hi, Bytedance dance dance.</p>
    </Skeleton>    
  );
}

export default Messages;