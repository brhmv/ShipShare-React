import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';

const Chat = () => {
  const [conversations,setConversations] = useState("");
  const {userId} = useParams();
  const token = Cookies.get('accessToken');
  
  useEffect(() => {
    console.log(token);
    fetch(`https://localhost:7189/api/chat/getAllConversations/${userId}`,{
        headers: {Authorization: `Bearer ${token}`},
        method : "GET",
    })
    .then(res => res.json())
    .then(data => setConversations(data))
    .catch(err => console.log(err));

    console.log(conversations);
  },[]);

  return (<div>
        Chat
    </div>);
};

export default Chat;
