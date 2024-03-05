import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';


const ConversationsTab = ({conversations,setMessages}) => {
    const loadMessages = (conversation) =>{
        console.log("sent");
        setMessages(conversation.Messages);
    };

  return(
    <div className="all-conversations">
        <div>
            {conversations.map((conversation,index) => {
                return (
                    <div key={index} onClick={() => loadMessages(conversation)} className="conversation">
                        {conversation.Id}
                    </div>
                )
            })}
        </div>
    </div>
  )
    
};
export default ConversationsTab;