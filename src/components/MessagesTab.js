import {useState, useEffect} from "react";
import SenderMessage from "./SenderMessage";
import RecipientMessage from "./RecipientMessage";
import * as signalR from "@microsoft/signalr";
import Cookies from "js-cookie";

const MessagesTab = ({oldMessages, conversationId, recipientId,conversationName}) => {

    const [connection, setConnection] = useState(null);
    const [message, setMessage] = useState("");
    const [ownId, setOwnId] = useState("");
    const [reloadFlag,setReloadFlag] = useState(false);

    useEffect(() => {
        console.log("reload");
        setReloadFlag(!reloadFlag);
    }, [oldMessages]);
    const funcConnect = async () => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:7189/chat",
                {accessTokenFactory: () => Cookies.get("accessToken")})
            .withAutomaticReconnect([1000,1000,2000,3000,4000,5000])
            .build();

        newConnection.on("getId", async (id) => {
            setOwnId(id);
        });

        newConnection.on("ReceiveMessage", (message,recId) => {
            let div = document.getElementById("messageMain");
            if(recId === recipientId) {
                let newDiv = document.createElement("div");
                newDiv.innerHTML = `${message.text}`;
                newDiv.className = "recipient-message";
                div.appendChild(newDiv);
            }
        });

        setConnection(newConnection);

        await newConnection.start();

        await newConnection.invoke("GetId").catch((err) => console.log(err));
        console.log(ownId);
    };

    useEffect(() => {
        funcConnect();
    }, []);

    const sendMessage = async () => {
        let div = document.getElementById("messageMain");
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `${message}`;
        newDiv.className = "sender-message";
        div.appendChild(newDiv);
        await connection
            .invoke("SendMessageAsync", conversationId, recipientId, message)
            .catch((err) => console.log(err));
    };

    return (
        <div className="messages-container">
            <div className="message-header">{conversationName}</div>
            <div id="messageMain" className="messages-main">
                {oldMessages.map((message, index) => {
                    if (message.senderId === ownId) {
                        return <SenderMessage key={index} text={message.text}/>;
                    } else return <RecipientMessage key={index} text={message.text}/>;
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
