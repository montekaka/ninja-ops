import React from 'react';
import { Avatar, Skeleton } from '@douyinfe/semi-ui';

const Message = ({item}) => {
  if(item) {
    const {content, createTime, fromUserName, messageType} = item;
    if(messageType === 'receive') {
      return (
        <div style={{display: 'flex'}}>
          <div style={{marginRight: "10px"}}>
            <Avatar size="small" style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{fromUserName}</Avatar>
          </div>
          <div><p>{content}</p></div>
        </div>
      )
    } else {
      return (
        <div style={{display: 'flex', flexDirection: 'row-reverse'}}>          
          <div style={{marginLeft: "10px"}}>
            <Avatar size="small" style={{ backgroundColor: '#87d068' }}>{fromUserName}</Avatar>
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

  return (
    <Skeleton placeholder={(<Skeleton.Paragraph rows={2}/>)} loading={true}>
      <p>Hi, Bytedance dance dance.</p>
      <p>Hi, Bytedance dance dance.</p>
    </Skeleton>    
  );
}

export default Messages;