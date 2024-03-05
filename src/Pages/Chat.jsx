import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConversationsTab from "../components/ConversationsTab";
import "../index.css";
import Cookies from "js-cookie";
import MessagesTab from "../components/MessagesTab";

const Chat = () => {
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const { recipientUserId } = useParams();
  const token = Cookies.get("accessToken");
  const [conversationId, setConversationId] = useState("");

  useEffect(() => {

  },[conversationId]);

  useEffect(() => {
    fetch(
      `https://localhost:7189/api/Conversation/createConversations/${recipientUserId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setConversationId(data.Id))
      .catch((err) => console.log(err));
  }, [recipientUserId, token]);

  useEffect(() => {
    fetch(`https://localhost:7189/api/Conversation/getAllConversations`, {
      headers: { Authorization: `Bearer ${token}` },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setConversations(data["$values"]))
      .catch((err) => console.log(err));
  }, [token]);

  return (
    <div className="chat-container">
      <ConversationsTab
        conversations={conversations}
        setConversationId={setConversationId}
      />
      <MessagesTab
        oldMessages={messages}
        conversationId={conversationId}
        recipientId={recipientUserId}
      />
    </div>
  );
};

export default Chat;
