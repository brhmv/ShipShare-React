import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConversationsTab from "../components/ConversationsTab";
import "../index.css";
import Cookies from "js-cookie";
import MessagesTab from "../components/MessagesTab";
import { Comment } from "react-loader-spinner";

const Chat = () => {
  const [conversations, setConversations] = useState([]);
  const [conversationName, setConversationName] = useState("");
  const { userId } = useParams();
  const token = Cookies.get("accessToken");
  const [conversationId, setConversationId] = useState(null);
  const [messagesTabIsOpen, setMessagesTabIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    createConversation();
  }, [userId, token]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://localhost:7189/api/Conversation/getAllConversations`, {
      headers: { Authorization: `Bearer ${token}` },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setConversations(data["$values"]))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [token]);

  const createConversation = async () => {
    let response = await fetch(
      `https://localhost:7189/api/Conversation/createConversation/${userId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        method: "POST",
      }
    );

    if (response.ok) {
      let data = await response.json();
      setConversationId(data.Id);
    }
  };

  return (
    <div className="chat-container">
      {loading ? ( // Conditional rendering based on loading state
        <div className="loader">
          <Comment
            visible={true}
            height="80"
            width="80"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="#F4442E"
          />
        </div>
      ) : (
        <>
          <ConversationsTab
            setMessagesTabIsOpen={setMessagesTabIsOpen}
            conversations={conversations}
            setConversationId={setConversationId}
            setConversationName={setConversationName}
          />
          {messagesTabIsOpen && (
            <MessagesTab
              conversationId={conversationId}
              recipientId={userId}
              conversationName={conversationName}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Chat;