import React from "react";
// import { Link } from 'react-router-dom';
// import "./postdisplay.css";



const PostDisplay = (props) => {
    const { post } = props;

    // const { title, description, startDestination, endDestination, user } = post;

    // const handleSomething = () => {
    //
    // };

    // const redirectToChat = (userId) => {
    // Redirect to chat page with the user who posted the item
    // You need to implement this redirection logic based on your application's routing setup
    // };

    if (!post) {
        return null;
    }

    return (
        <div className="post-details-container">
            <h2 className="post-details-title">Sender Post Details</h2>
            <div className="post-details">
                <p><strong>Title:</strong> {post.title}</p>
                <p><strong>Views:</strong> {post.views}</p>
                <p><strong>Description:</strong> {post.description}</p>
                <p><strong>Start Destination:</strong> {post.startDestination}</p>
                <p><strong>End Destination:</strong> {post.endDestination}</p>
                <p><strong>Deadline Date:</strong> {post.deadlineDate}</p>
                <p><strong>Image:</strong> {post.image}</p>
                <p><strong>Item Category:</strong> {post.itemCategory}</p>
                <p><strong>Item Weight:</strong> {post.itemWeight}</p>
                <p><strong>Is Available:</strong> {post.isAvailable ? 'Yes' : 'No'}</p>
                <p><strong>Price:</strong> {post.price}</p>
            </div>
        </div>
    );
}

export default PostDisplay;