import { TiTick } from "react-icons/ti";

const RecipientMessage = ({ msg }) => {
    const dateString = msg.createdDate;
    const date = new Date(dateString);
    function getFormattedTime(date) {
        const timeComponents = [date.getHours(), date.getMinutes()];
        return timeComponents
            .map(component => {
                const pad = (component < 10) ? '0' : '';
                return pad + component;
            })
            .join(':');
    }
    return (
        <div className="recipient-message">
            {msg.text}



            <div className="rec-info">
                {getFormattedTime(date)}

                <TiTick />
            </div>
        </div>
    );
};

export default RecipientMessage;