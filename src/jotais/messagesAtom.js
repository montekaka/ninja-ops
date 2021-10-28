import {atom} from "jotai"
import io from "socket.io-client"
import wechat from '../apis/wechat'

export const messagesAtom = atom({}) // contact_id: {name, id, avatar, messages}
export const socketAtom = atom(null);
export const socketIncomingAtom = atom(null);
export const currentUserIdAtom = atom('') // id

export const fetchContactsAtom = atom(null, (_get, set, id) => {
  const currentState = _get(messagesAtom);
  let _currentState = {...currentState};
  
  wechat.get('/v1/contacts')
  .then((res) => {
    const friends = res.data;
    for(let i = 0; i < friends.length; i++) {
      const friendId = friends[i]['id'];
      if(_currentState[friendId] === undefined) {
        _currentState[friendId] = {
          ...friends[i],
          messages: []
        }
      }
    }

    if(id && _currentState[id]) {
      set(currentUserIdAtom, () => {return id})
    } else {
      set(currentUserIdAtom, () => {return friends[0]['id']})
    }

    set(messagesAtom, () => {return _currentState});
  })
  .catch((err) => {
    // TODO: error handling
    // notify user something went wrong.
    console.log(err);
  })
})

export const getContactsAtom = atom((get) => {
  const currentState = get(messagesAtom);
  const keys = Object.keys(currentState);
  const contacts = keys.map((key) => {
    return currentState[key]
  })
  return contacts;
})

export const currentUserAtom = atom((get) => {
  const contacts = get(messagesAtom);
  const currentContactId = get(currentUserIdAtom);
  return contacts[currentContactId];
}, (_get, set, id) => {
  set(currentUserIdAtom, () => {
    return id;
  })
})

export const currentUserMessagesAtom = atom((get) => {
  const contacts = get(messagesAtom);
  const currentContactId = get(currentUserIdAtom);
  if(currentContactId && contacts[currentContactId]) {
    return contacts[currentContactId]['messages'];
  } else {
    return [];
  }
}, (_get, set, msg) => {
  const contacts = _get(messagesAtom);
  const currentContactId = _get(currentUserIdAtom);
  const _contacts = {...contacts};

  if(currentContactId && contacts[currentContactId]) {
    const user = contacts[currentContactId];

    wechat.post('/v1/wechaty-message', {
      "name": user.name,
      "message": msg
    })
    .then((res) => {
      const _messages = [{
        content: msg, createTime: Date.now(), fromUserName: 'KF', messageType: 'send'
      }, ...user.messages];

      set(messagesAtom, () => {
        _contacts[currentContactId]['messages'] = _messages;
        return _contacts;
      })      
    })
    .catch((err) => {
      console.log(err);
    })
  }
})

export const connectSocketAtom = atom(null, (get, set, connectionName) => {
  const socket = get(socketAtom);
  if(socket === null) {
    const _socket = io.connect(process.env.REACT_APP_MS_BACKEND_BASE_PATH);
    set(socketAtom, () => {return _socket});
    _socket.on((connectionName), (incomingData) => {
      set(socketIncomingAtom, () => {
        return incomingData;
      })
    })
  }  
})

export const updateMessagesAtom = atom(null, (get, set, incomingData) => {
  if(incomingData) {
    const {type, data} = incomingData;
    const currentState = get(messagesAtom);
    let _currentState = {...currentState};
        
    if(type === 'new-friend') {
      const {kfWechatId, fromUserName, fromUserId, fromUserAvatar} = data;
      const friend = {name: fromUserName, id: fromUserId, avatar: fromUserAvatar};
      if(_currentState[fromUserId] === undefined) {
        _currentState[fromUserId] = {
          ...friend,
          messages: []
        }
        set(messagesAtom, () => {
          return _currentState;
        })
      } 
    } else if (type === 'new-message') {
      const {content, createTime, fromUserId, fromUserName} = data;                
      if(_currentState[fromUserId] && _currentState[fromUserId]['messages']) {
        const messages = _currentState[fromUserId]['messages']
        const newMessage = {content: content, id: fromUserId, createTime: createTime, fromUserName: fromUserName, messageType: 'receive'};
        const _messages = [newMessage, ...messages]
        _currentState[fromUserId]['messages'] = _messages;
        set(messagesAtom, () => {
          return _currentState;
        }) 
      }
      
    }
  }
})