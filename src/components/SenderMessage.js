import { TiTick } from "react-icons/ti";

const SenderMessage = ({ msg }) => {

    const dateString = msg.createdDate;
    const date = new Date(dateString);
    function getFormattedTime() {
        const timeComponents = [date.getHours(), date.getMinutes()];
        return timeComponents
            .map(component => {
                const pad = (component < 10) ? '0' : '';
                return pad + component;
            })
            .join(':');
    }

    return (
        <div className="sender-message">
            {msg.text}
            <div className="sender-info">
                {getFormattedTime(date)}
                <TiTick />
            </div>
        </div>
    );
};

export default SenderMessage;