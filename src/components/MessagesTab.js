import { useState, useEffect, useRef } from "react";
import SenderMessage from "./SenderMessage";
import RecipientMessage from "./RecipientMessage";
import * as signalR from "@microsoft/signalr";
import Cookies from "js-cookie";

const MessagesTab = ({
  conversationId,
  recipientId,
  conversationName,
}) => {
  const [connection, setConnection] = useState(null);
  const [messages,setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [ownId, setOwnId] = useState("");
  const ref = useRef();

  const funcConnect = async () => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7189/chat", {
        accessTokenFactory: () => Cookies.get("accessToken"),
      })
      .withAutomaticReconnect([1000, 1000, 2000, 3000, 4000, 5000])
      .build();

    newConnection.on("getId", async (id) => {
      setOwnId(id);
    });

    newConnection.on("ReceiveMessage", (message, conId) => {
      console.log(conId);
      console.log(conversationId);
      if (conId == conversationId) {
        setMessages(prevMessages => [...prevMessages, message]);
        ref.current?.scrollIntoView({ behavior: "smooth" });
      }
    });

    setConnection(newConnection);

    await newConnection.start();

    await newConnection.invoke("GetId").catch((err) => console.log(err));
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch(`https://localhost:7189/api/Conversation/getMessagesConversationId/${conversationId}`,{
        method : "GET",
        headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` }
      });
      if (response.ok) {
        const data = await response.json();
        setMessages(data["$values"]);
      } else {
        console.error("Failed to fetch messages:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    setMessage("");
    const sentMessage = { text: message, senderId: ownId };
    setMessages(prevMessages => [...prevMessages, sentMessage]);
    ref.current?.scrollIntoView({ behavior: "smooth" });
    await connection
      .invoke("SendMessageAsync", conversationId, recipientId, message)
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    funcConnect();
    setMessages([]);
  }, [conversationId]);

  useEffect(() => {
    fetchMessages();
  }, [conversationId]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    console.log(messages);
  }, [messages]);

  return (
    <div className="messages-container">
      <div className="message-header">{conversationName}</div>
      <div id="messageMain" className="messages-main">
        {messages.map((message, index) => {
          if (ownId) {
            if (message.senderId === ownId) {
              return <SenderMessage key={index} text={message.text} />;
            } else return <RecipientMessage key={index} text={message.text} />;
          }
        })}
        <div ref={ref} />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="message-input"
        />
        <div className="button" onClick={sendMessage}>
          Send
        </div>
      </div>
    </div>
  );
};
export default MessagesTab;
