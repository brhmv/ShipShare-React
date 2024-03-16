import { useState, useEffect, useRef } from "react";
import SenderMessage from "./SenderMessage";
import RecipientMessage from "./RecipientMessage";
import * as signalR from "@microsoft/signalr";
import Cookies from "js-cookie";
import { Oval } from "react-loader-spinner";
import { IoSend } from "react-icons/io5";
import InputEmoji from 'react-input-emoji'


const MessagesTab = ({
    conversationId,
    recipientId,
    conversationName,
    setLastMessage
}) => {
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [ownId, setOwnId] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isConnected, setIsConnected] = useState(false);
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

        newConnection.on("setIsConnected", async (message) => {
            message === "true" ? setIsConnected(true) : setIsConnected(false);
        }
        )

        newConnection.on("ReceiveMessage", (message, conId) => {
            console.log(message);
            if (conId === conversationId) {
                const sentMessage = { text: message.text, createdDate: Date.now(), conversationId: conversationId };
                setMessages(prevMessages => [...prevMessages, sentMessage]);
                setLastMessage(sentMessage);
                ref.current?.scrollIntoView({ behavior: "smooth" });
            }
        });

        setConnection(newConnection);

        await newConnection.start();

        await newConnection.invoke("GetId").catch((err) => console.log(err));
    };

    const fetchMessages = async () => {
        try {
            const response = await fetch(`https://localhost:7189/api/Conversation/getMessagesConversationId/${conversationId}`, {
                method: "GET",
                headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` }
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data["$values"]);
                setMessages(data["$values"]);
                setIsLoading(false);
            } else {
                console.error("Failed to fetch messages:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    };

    const sendMessage = async () => {
        if (message.length !== 0) {
            setMessage("");
            const sentMessage = { text: message, senderId: ownId, createdDate: Date.now(), conversationId: conversationId };
            setMessages(prevMessages => [...prevMessages, sentMessage]);
            ref.current?.scrollIntoView({ behavior: "smooth" });
            await connection
                .invoke("SendMessageAsync", conversationId, recipientId, message)
                .catch((err) => console.log(err));
            setLastMessage(sentMessage);
        }
    };

    useEffect(() => {
        try {
            funcConnect();
        } catch (e) {
            console.log(e);
        }
        setMessages([]);
    }, [conversationId]);

    useEffect(() => {
        try {
            fetchMessages();
        } catch (e) {
            console.log(e);
        }
    }, [conversationId]);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    }, [messages]);

    return (
        <div className="messages-container">
            <div className="message-header">
                {conversationName}
                <div>
                    Status :
                    {isConnected ? <span className="connected">
                        Connected
                    </span> : <span className="not-connected"> Not Connected</span>}
                </div>
            </div>

            {isLoading && <div className="loader">
                <Oval
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>}

            {!isLoading && <div id="messageMain" className="messages-main scroll-container">
                {messages.map((message, index) => {
                    if (ownId) {
                        if (message.senderId === ownId) {
                            return <SenderMessage key={index} msg={message} />;
                        } else return <RecipientMessage key={index} msg={message} />;
                    }
                })}
                <div ref={ref} />
            </div>}

            <div className="input-container">
                <InputEmoji
                    type="text"
                    placeholder="Enter message..."
                    value={message}
                    onChange={setMessage}
                    className="message-input"
                    cleanOnEnter
                    onEnter={sendMessage}
                    style={{ color: 'red' }}
                />

                <div className="button" onClick={sendMessage}>
                    <IoSend className="sent-icon" />
                </div>

            </div>


        </div>
    );
};
export default MessagesTab;
