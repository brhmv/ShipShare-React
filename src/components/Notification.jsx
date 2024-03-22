import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../assets/Notification.css";
import { fetchNotifications } from '../Store/NotificationSlice';

const Notification = () => {
    const dispatch = useDispatch();

    const notifications = useSelector(state => state.notification.notifications);

    useEffect(() => {
        dispatch(fetchNotifications());

        // console.log("Notifications");
        // console.log(notifications);
    }, [dispatch])


    const formatDate = (dateString) => {
        const dateTime = new Date(dateString);
        const day = dateTime.getDate();
        const month = dateTime.getMonth() + 1;
        const year = dateTime.getFullYear();
        return `${day}/${month}/${year}`;
    };
    return (
        <div className="notification-div">
            {notifications.map(notification => (
                <div key={notification.id} className="notif-item" >
                    {/* <div className="notification-header">

                        <h3 className="notif-h">{notification.title}</h3>

                        {notification.isRead ? (
                            <span className="read-indicator">Read</span>
                        ) : (
                            <span className="unread-indicator">Unread</span>
                        )}

                    </div> */}

                    <div className="notif-desc">
                        <p className="span-detail fs">{notification.description}</p>
                    </div>

                    <div className="nrotification-footer">

                        <p className="span-detail">
                            <span className="black-span">
                                User ID:
                            </span>
                            {notification.userId}
                        </p>

                        <p className="span-detail">
                            <span className="black-span">
                                Date:
                            </span>
                            {formatDate(notification.createdDate)}</p>
                    </div>

                    <hr />
                </div>
            ))
            }
        </div >
    );
};

export default Notification;