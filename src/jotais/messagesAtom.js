import {atom} from "jotai"
import wechat from '../apis/wechat'

export const messagesAtom = atom({}) // contact_id: {name, id, avatar, messages}

export const currentUserIdAtom = atom('') // id

export const fetchContacts = atom(null, (_get, set, id) => {
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