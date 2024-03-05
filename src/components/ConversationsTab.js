import { useEffect } from "react";

const ConversationsTab = ({ conversations, setConversationId }) => {
  const loadMessages = (conversation) => {
    console.log(conversation.id);
    setConversationId(conversation.id);
  };
 
  useEffect(() => {
    console.log(conversations);
  },[conversations])

  return (
    <div className="all-conversations">
      <div>
        {conversations.map((conversation, index) => {
          return (
            <div
              key={index}
              onClick={() => loadMessages(conversation)}
              className="conversation"
            >
              {conversation.id}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ConversationsTab;
