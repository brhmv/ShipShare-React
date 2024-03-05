import { useState, useEffect } from "react";
import SenderMessage from "./SenderMessage";
import RecipientMessage from "./RecipientMessage";
import * as signalR from "@microsoft/signalr";

const MessagesTab = ({ oldMessages, conversationId, recipientId }) => {
  const [connection, setConnection] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [ownId, setOwnId] = useState("");

  const funcConnect = async () => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7189/chat-hub")
      .build();
    newConnection.on("getId", async (id) => {
      setOwnId(id);
    });

    newConnection.on("ReceiveMessage", (message) => {
      var div = document.getElementById("messageMain");
      var newDiv = document.createElement("div");
      newDiv.innerHTML = `${message}`;
      newDiv.className = "recipient-message";
      div.appendChild(newDiv);
    });

    await newConnection.invoke("GetId").catch((err) => console.log(err));

    setConnection(newConnection);

    await newConnection.start();
  };

  useEffect(() => {
    funcConnect();
  }, []);

  const sendMessage = async () => {
    var div = document.getElementById("messageMain");
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `${message}`;
    newDiv.className = "sender-message";
    div.appendChild(newDiv);
    await connection
      .invoke("SendMessageAsync", conversationId, recipientId, message)
      .catch((err) => console.log(err));
  };

  return (
    <div className="messages-container">
      <div>{conversationId}</div>
      <div id="messageMain" className="messages-main">
        {messages.map((message, index) => {
          if (message.SenderId === ownId) {
            return <SenderMessage key={index} text={message.Text} />;
          } else return <RecipientMessage key={index} text={message.Text} />;
        })}
      </div>
      <div className="input-container">
        <input
          type="text"
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
