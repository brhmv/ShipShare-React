import React, { useState, useEffect } from 'react';
import { createReview, fetchReviews } from '../Store/ReviewSlice';
import '../assets/Review.css';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const Review = ({ userId, user, isMe }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(0);
    const [text, setText] = useState('');
    const [postedBy, setPostedBy] = useState('');
    const reviews = useSelector((state) => state.review.reviews);

    const handleAddReview = () => {
        if (rating !== 0 && text !== '') {
            const postedByValue = user.username;

            dispatch(createReview({ rating, text, postedBy: postedByValue, user }));
            setRating(0);
            setText('');
            setPostedBy('');

            toast.success("Review Created Succesfully!", {
                position: "top-right",
            });
        }
        else {
            toast.error("Failed to create review!", {
                position: "top-right",
            });
        }
    };

    useEffect(() => {
        dispatch(fetchReviews(userId));
        console.log(`Review `);
        console.log(reviews);
    }, [dispatch, userId]);


    const renderStars = (numStars) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= numStars)
                stars.push(<span key={i}><FaStar /></span>);
            else
                stars.push(<span key={i}><FaRegStar /></span>);
        }
        return stars;
    };

    return (
        <div>
            {reviews !== null && reviews.length !== 0 ? (
                <div className='reviews-div'>
                    {reviews.map((review) => (
                        <div key={review.id} className='review-item'>
                            <div className="review-item-1">

                                <p className='p-detail'><span className='bold-span'>Posted By:</span> {review.reviewSenderId}</p>

                                <p className='red-star'><span className='rate-span'>Rating:</span> {renderStars(review.rating)}</p>

                            </div>

                            <div className="review-item-2">
                                <p className='p-review'>
                                    <span className='bold-span'>Comment:</span>
                                    {review.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h1 className='profile-h1-tag m-5'>No reviews yet.</h1>
            )
            }
            <ToastContainer position="top-right" />



            {!isMe && <div className="comment-box">
                <h1 className='profile-h1-tag'>Add your review!</h1>
                {/* <img src="https://i.imgur.com/xELPaag.jpg" width="70" class="rounded-circle mt-2" /> */}

                <div className="stars">

                    <div className="rating">
                        <input type="radio" name="rating" value="5" id="5" onChange={(e) => setRating(parseInt(e.target.value))} />
                        <label htmlFor="5" className='fs-40px'>☆</label>
                        <input type="radio" name="rating" value="4" id="4" onChange={(e) => setRating(parseInt(e.target.value))} />
                        <label htmlFor="4">☆</label>
                        <input type="radio" name="rating" value="3" id="3" onChange={(e) => setRating(parseInt(e.target.value))} />
                        <label htmlFor="3">☆</label>
                        <input type="radio" name="rating" value="2" id="2" onChange={(e) => setRating(parseInt(e.target.value))} />
                        <label htmlFor="2">☆</label>
                        <input type="radio" name="rating" value="1" id="1" onChange={(e) => setRating(parseInt(e.target.value))} />
                        <label htmlFor="1">☆</label>
                    </div>
                </div>

                <div className="comment-area">
                    <textarea
                        className="text-review" placeholder="Write review" rows="4"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    ></textarea>
                </div>

                <div className="mt-3">
                    <button className="btn btn-sm send-review-btn" onClick={handleAddReview}>Send</button>
                </div>

            </div>
            }

        </div >
    );
};

export default Review;