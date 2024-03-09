import {useEffect, useState} from "react";
import Cookies from "js-cookie";

const ConversationsTab = ({setConversationName, setMessagesTabIsOpen, conversations, setConversationId,lastMessage,userId}) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    let [conversationIdNames, setConversationIdNames] = useState([]);

    useEffect(() => {
        conversationIdNames.forEach(conversation => {
            if (conversation.id === lastMessage.conversationId) {
                conversation.messages["$values"] = [...conversation.messages["$values"],lastMessage];
                let index = conversationIdNames.indexOf(conversation);
                let newArr = [...conversationIdNames];
                newArr[index] = conversation;
                setConversationIdNames([...newArr]);
            }
        })
    }, [lastMessage]);

    useEffect(() => {
        fetchConversationNames();
    }, [conversations])

    useEffect(() => {
        if (userId) {
            fetch(`https://localhost:7189/api/Conversation/getConversationId/${userId}`,
                {
                    method: "GET",
                    headers: {"Authorization": `Bearer ${Cookies.get("accessToken")}`}
                })
                .then(res => res.json())
                .then(data2 => {
                    setConversationId(data2.id);
                    setConversationName(data2.name);
                    setMessagesTabIsOpen(true);
                })
                .catch(err => console.log(err));
        }
    },[userId]);
    const fetchConversationNames = async () => {
        const names = await Promise.all(
            conversations.map(async (conversation) => {
                try {
                    const response = await fetch(`https://localhost:7189/api/Conversation/getUsernameWithConversationId/${conversation.id}`, {
                        method: "GET",
                        headers: {Authorization: `Bearer ${Cookies.get("accessToken")}`},
                    });
                    const data = await response.text();
                    return {id: conversation.id, name: data, messages: conversation.messages};
                } catch (error) {
                    console.error("Error fetching conversation name:", error);
                    return null;
                }
            })
        );

        setConversationIdNames(names.filter((name) => name !== null));
    };

    function getFormattedTime(date) {
        const timeComponents = [date.getHours(), date.getMinutes()];
        return timeComponents
            .map(component => {
                const pad = (component < 10) ? '0' : '';
                return pad + component;
            })
            .join(':');
    }
    const loadMessages = (conversation, index) => {
        setConversationId(conversation.id);
        setConversationName(conversation.name);
        setMessagesTabIsOpen(true);
        setSelectedIndex(index);
    }

    return (
        <div className="all-conversations">
            <div>
                {conversationIdNames.map((conversation, index) => {
                    let lastMessage;
                    let lastDateFormatted;
                    if (conversation.messages["$values"].length) {
                        lastMessage = conversation.messages["$values"][conversation.messages["$values"].length - 1];
                        let lastDate = new Date(lastMessage.createdDate);
                        lastDateFormatted = getFormattedTime(lastDate);
                    }
                    return (
                        <div
                            key={index}
                            onClick={() => loadMessages(conversation, index)}
                            className={selectedIndex === index ? "conversation active-conversation" : "conversation"}
                        >
                            <div className="conversation-header">
                                <span className="conversation-name">{conversation.name}</span>
                                <span className="last-date">{lastDateFormatted ? lastDateFormatted : "00:00"}</span>
                            </div>
                            <span className="last-message">{lastMessage ? lastMessage.text : "Start to chat!"}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default ConversationsTab;
