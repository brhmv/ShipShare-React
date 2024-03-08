import {useEffect, useState} from "react";
import Cookies from "js-cookie";

const ConversationsTab = ({setConversationName, setMessagesTabIsOpen, conversations, setConversationId}) => {
    let [conversationIdNames, setConversationIdNames] = useState([]);
    const loadMessages = (conversation) => {
        setConversationId(conversation.id);
        setConversationName(conversation.name);
        setMessagesTabIsOpen(true);
    };

    useEffect(() => {
        const fetchConversationNames = async () => {
            const names = await Promise.all(
                conversations.map(async (conversation) => {
                    try {
                        const response = await fetch(`https://localhost:7189/api/Conversation/getUsernameWithConversationId/${conversation.id}`, {
                            method: "GET",
                            headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
                        });
                        const data = await response.text();
                        return { id: conversation.id, name: data };
                    } catch (error) {
                        console.error("Error fetching conversation name:", error);
                        return null;
                    }
                })
            );

            setConversationIdNames(names.filter((name) => name !== null));
        };

        fetchConversationNames();
    }, [conversations])

    return (
        <div className="all-conversations">
            <div>
                {conversationIdNames.map((conversation, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => loadMessages(conversation)}
                            className="conversation"
                        >
                            {conversation.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default ConversationsTab;
