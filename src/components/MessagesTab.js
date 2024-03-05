import { useState,useEffect } from "react";
import SenderMessage from "./SenderMessage";
import RecipientMessage from "./RecipientMessage";
import * as signalR from "@microsoft/signalr";

const MessagesTab = ({ messagez }) => {
  const [connection, setConnection] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7189/chat-hub")
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start().catch((err) => console.error(err));

      connection.on("ReceiveMessage", (comingMessage) => {
        setMessages([...messages,comingMessage]);
        console.log(messages);
      });
    }
  }, [connection,messages]);

  const sendMessage = async () => {
    if (connection && message) {
      try {
        await connection.invoke("SendMessageAsync", message);
        setMessage('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="messages-container">
      <div className="messages-main">
        {messages.map((message,index) => {
            return (<div key={index}>
                {message}
            </div>)
        })}
        {/* {messages.map((message, index) => {
          if (message.SenderId === 1) {
            return <SenderMessage text={message.Text} />;
          } else return <RecipientMessage text={message.Text} />;
        })} */}
      </div>
      <div className="input-container">
        <input type="text" value = {message} onChange = {(e) => setMessage(e.target.value)} className="message-input" />
        <div className="button" onClick={sendMessage}>Send</div>
      </div>
    </div>
  );
};
export default MessagesTab;
