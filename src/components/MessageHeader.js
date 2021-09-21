import React from 'react';

const MessageHeader = ({user}) => {
  if(user) {
    return (
      <div style={{padding: '10px 10px'}}>        
        <h3>{user.nickname}</h3>
        <hr/>
      </div>
    )
  }

  return null;
}

export default MessageHeader;