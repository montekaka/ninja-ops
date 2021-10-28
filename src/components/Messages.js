import React from 'react';
import { Skeleton } from '@douyinfe/semi-ui';
import Message from './Message';

const Messages = ({messages}) => {
  if(messages) {
    return (
      <div style={{
        display: 'flex', 
        gap: '10px',
        padding: "20px", 
        flexDirection: 'column-reverse'
      }}>
        {
          messages.map((item, id) => <Message 
            key={(id+1).toString()} 
            item={item}
            prevItem={messages[id+1]}
          />)
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