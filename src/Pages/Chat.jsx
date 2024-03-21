import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConversationsTab from "../components/ConversationsTab";
import "../assets/Chat.css";
import Cookies from "js-cookie";
import MessagesTab from "../components/MessagesTab";
import { Comment } from "react-loader-spinner";
import useTokenExpiration from "../customHooks/useTokenExpiration";
import { ToastContainer } from "react-toastify";

const Chat = () => {
  useTokenExpiration();
  const [conversations, setConversations] = useState([]);
  const [conversationName, setConversationName] = useState("");
  const { userId } = useParams();
  const token = Cookies.get("accessToken");
  const [conversationId, setConversationId] = useState(null);
  const [messagesTabIsOpen, setMessagesTabIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lastMessage, setLastMessage] = useState();

  useEffect(() => {
    if (userId) {
      try {
        console.log("createConversation");
        createConversation().then(() => {
          getAllConversations();
        });
      } catch (e) {
        console.log(e);
      }
    } else getAllConversations();
  }, [userId, token]);

  const getAllConversations = () => {
    try {
      fetch(`https://localhost:7189/api/Conversation/getAllConversations`, {
        headers: { Authorization: `Bearer ${token}` },
        method: "GET",
      })
        .then((res) => {
          if (res.ok) setLoading(false);
          return res.json();
        })
        .then((data) => setConversations(data["$values"]))
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };

  const createConversation = async () => {
    try {
      let response = await fetch(
        `https://localhost:7189/api/Conversation/createConversation/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          method: "POST",
        }
      );
      if (response.ok) {
        let data = await response.json();
        setMessagesTabIsOpen(true);
        setConversationId(data.id);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {/* <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" /> */}
      <div className="chat-container">
        {loading ? (
          <div className="loader">
            <Comment
              visible={true}
              height="80"
              width="80"
              ariaLabel="comment-loading"
              wrapperStyle={{}}
              wrapperClass="comment-wrapper"
              color="#fff"
              backgroundColor="#6d61f3"
            />
          </div>
        ) : (
          <>
            <ConversationsTab
              setMessagesTabIsOpen={setMessagesTabIsOpen}
              conversations={conversations}
              setConversationId={setConversationId}
              setConversationName={setConversationName}
              lastMessage={lastMessage}
              userId={userId}
            />

            {messagesTabIsOpen ? (
              <MessagesTab
                setLastMessage={setLastMessage}
                conversationId={conversationId}
                recipientId={userId}
                conversationName={conversationName}
              />
            ) : (
              <div className="welcome-chat-div">Welcome To Live Chat!</div>
            )}
          </>
        )}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Chat;
