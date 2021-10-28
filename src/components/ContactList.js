import React from 'react';
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar } from '@douyinfe/semi-ui';
import { IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';

const ContactList = ({items, changeUser}) => {
  if(items && items.length > 0) {
    return (      
      <Nav
        style={{ maxWidth: 220, height: '100%' }}
        header={{
          logo: <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />,
          text: 'Contacts',
        }}
        footer={{
          collapseButton: true
      }}        
      >
        {
          items.map((item, idx) => 
            <Nav.Item
              key={`${idx+1}`} 
              itemKey={idx} 
              text={item.name} 
              icon={<img src={item.avatar}/>} 
              onClick={() => {
                changeUser(item)
              }}              
            />
          )
        }
      </Nav>
      
    )
  }
  
  return null;
}

export default ContactList