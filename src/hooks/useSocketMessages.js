import { useEffect, useState } from "react"
import io from "socket.io-client"

const useSocketMessages = (wechatId) => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if(!socket) {
      const _ = io.connect(process.env.REACT_APP_MS_WECHAT_BASE_PATH)
      setSocket(_)
    }
  }, [])

  useEffect(() => {
    if(wechatId) {
      socket.on(`wechat_${wechatId}`, (msg) => {
        const {Content, CreateTime, FromUserName} = msg;
        const _messages = [...messages, {content: Content, createTime: CreateTime, fromUserName: FromUserName, messageType: 'receive'}];
        setMessages(_messages);
      })
    }
  }, [wechatId])

  return [messages, setMessages]
}

export default useSocketMessages