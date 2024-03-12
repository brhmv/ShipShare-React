import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview, selectReviews } from '../Store/ReviewSlice';

const Review = ({ postId }) => {
    const dispatch = useDispatch();
    const reviews = useSelector(selectReviews);
    const [rating, setRating] = useState(0);
    const [text, setText] = useState('');

    const handleAddReview = () => {
        dispatch(addReview({ postId, rating, text }));
        // Clear input fields after adding review
        setRating(0);
        setText('');
    };

    useEffect(() => {


    }, [dispatch])


    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews ? (
                    <ul>
                        {reviews.map((review) => (
                            <li key={review.id}>
                                <p>Rating: {review.rating}</p>
                                <p>{review.text}</p>
                                <p>By: {review.reviewSender?.name}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h1>No reviews yet.</h1>
                )}

            </ul>
            <h2>Add a Review</h2>
            <div>
                <label htmlFor="rating">Rating:</label>
                <input
                    type="number"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(parseInt(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="text">Review:</label>
                <textarea
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <button onClick={handleAddReview}>Add Review</button>
        </div>
    );
};

export default Review;