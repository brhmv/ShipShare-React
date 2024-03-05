import { useState } from "react";
import { useParams } from "react-router-dom";
import ConversationsTab from "../components/ConversationsTab";
import "../index.css";
import Cookies from "js-cookie";
import MessagesTab from "../components/MessagesTab";

const Chat = () => {
  const [conversations, setConversations] = useState([
    {
      Id: 1,
      Messages: [
        {
          SenderId : 1,
          RecipientId : 2,
          Text: "Hello1",
        },
        {
          SenderId : 2,
          RecipientId : 1,
          Text: "Salam1",
        },
        {
          SenderId : 1,
          RecipientId : 2,
          Text: "Sagol1",
        },
      ],
    },
    {
      Id: 2,
      Messages: [
        {
          SenderId : 1,
          RecipientId : 2,
          Text: "Hello2",
        },
        {
          SenderId : 2,
          RecipientId : 1,
          Text: "Salam2",
        },
        {
          SenderId : 1,
          RecipientId : 2,
          Text: "Sagol2",
        },
      ],
    },
    {
      Id: 3,
      Messages: [
        {
          SenderId : 1,
          RecipientId : 2,
          Text: "Hello3",
        },
        {
          SenderId : 2,
          RecipientId : 1,
          Text: "Salam3",
        },
        {
          SenderId : 1,
          RecipientId : 2,
          Text: "Sagol3",
        },
      ],
    },
  ]);
  const [messages, setMessages] = useState([]);
  const { userId } = useParams();
  const token = Cookies.get("accessToken");

  //   useEffect(() => {
  //     fetch(`https://localhost:7189/api/chat/getAllConversations/${userId}`,{
  //         headers: {Authorization: `Bearer ${token}`},
  //         method : "GET",
  //     })
  //     .then(res => res.json())
  //     .then(data => setConversations(data))
  //     .catch(err => console.log(err));
  //   },[]);

  return (
    <div className="chat-container">
      <ConversationsTab
        conversations={conversations}
        setMessages={setMessages}
      />
      <MessagesTab messagez={messages} />
    </div>
  );
};

export default Chat;

import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import { Link, useParams } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

function UserView() {
    const { userId } = useParams();



    return (
        <div className='privacy'>
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Chat" Pdescription="------" />




            <Footer FooterData={FooterData} />
        </div >
    );
}

export default UserView;