import React, { useState, useEffect } from 'react';
import { addReview, fetchReviews } from '../Store/ReviewSlice';
import '../assets/Review.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetailsWithIdAsync } from '../Store/AuthSlice';

const Review = ({ userId }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(0);
    const [text, setText] = useState('');

    const reviews = useSelector((state) => state.review.reviews);

    const handleAddReview = () => {
        dispatch(addReview({ userId, rating, text }));
        setRating(0);
        setText('');
    };

    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch])

    useEffect(() => {
        dispatch(getUserDetailsWithIdAsync(userId));

    }, [dispatch])


    return (
        <div>
            <h2>Reviews</h2>

            {reviews ? (
                <ul>
                    {reviews.map((review) => (
                        <div key={review.id}>
                            <p >Rating: {review.rating}</p>
                            <p>{review.text}</p>
                            <p>By: {review.reviewSender?.name}</p>
                        </div>
                    ))}
                </ul>
            ) : (
                <h1>No reviews yet.</h1>
            )}


            <div class="card">
                <div class="row">
                    {/* <div class="col-2">
                        <img src="https://i.imgur.com/xELPaag.jpg" width="70" class="rounded-circle mt-2" />
                    </div> */}

                    <div class="col-10">
                        <div class="comment-box ml-2">
                            <h4>Add a comment</h4>

                            <div class="rating">
                                <input type="radio" name="rating" value="5" id="5" onChange={(e) => setRating(parseInt(e.target.value))} />
                                <label for="5" className='fs-40px'>☆</label>
                                <input type="radio" name="rating" value="4" id="4" onChange={(e) => setRating(parseInt(e.target.value))} />
                                <label for="4">☆</label>
                                <input type="radio" name="rating" value="3" id="3" onChange={(e) => setRating(parseInt(e.target.value))} />
                                <label for="3">☆</label>
                                <input type="radio" name="rating" value="2" id="2" onChange={(e) => setRating(parseInt(e.target.value))} />
                                <label for="2">☆</label>
                                <input type="radio" name="rating" value="1" id="1" onChange={(e) => setRating(parseInt(e.target.value))} />
                                <label for="1">☆</label>
                            </div>


                            <div class="comment-area">
                                <textarea
                                    class="form-control" placeholder="Write review" rows="4"
                                    onChange={(e) => setText(e.target.value)}
                                    value={text}
                                ></textarea>
                            </div>

                            <div class="comment-btns mt-2">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="pull-right">
                                            <button class="btn btn-sm send-btn" onClick={handleAddReview}>Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;