import '../assets/Profile.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import EditTravelerPost from './EditTravelerPost';
import EditSenderPost from './EditSenderPost';
import CustomNavbar from '../components/CustomNavbar';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { GiWeight } from "react-icons/gi";
import { fetchUserPosts, fetchUserSenderPosts, deleteSenderPost, deleteTravellerPost } from "../Store/UserPostsSlice";
import { getMyDetailsAsync } from "../Store/AuthSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaDollarSign } from "react-icons/fa";
import Review from "../components/Review"

const ProfileView = () => {
    const dispatch = useDispatch();
    // const { userId } = useParams();
    const [isEditingSender, setIsEditingSender] = useState(false);
    const [isEditingTravel, setIsEditingTravel] = useState(false);
    const [editPost, setEditPost] = useState(null);
    // const [editPostType, setEditPostType] = useState(null);
    const [postType, setPostType] = useState('sender');

    const userSenderPosts1 = useSelector(state => state.userPosts.userSenderPosts);
    const userTravelerPosts1 = useSelector(state => state.userPosts.userTravellerPosts);


    const myDetails = useSelector((state) => state.auth.mydetails);



    useEffect(() => {
        dispatch(fetchUserPosts());
        dispatch(fetchUserSenderPosts());
    }, [dispatch, editPost]);


    useEffect(() => {
        debugger;
        dispatch(getMyDetailsAsync())
    }, [dispatch, myDetails]);


    const handlePostTypeChange = (type) => {
        setPostType(type);
    };

    const handleDeletePost = (postId, postType) => {
        if (postType === 'sender') {
            dispatch(deleteSenderPost(postId));

            toast.success("Sender Post deleted Succesfully!", {
                position: "top-right",
            });

        }
        else if (postType === 'traveler') {
            dispatch(deleteTravellerPost(postId));

            toast.success("Traveler Post deleted Succesfully!", {
                position: "top-right",
            });
        }
    };

    const handleUpdate = (post, type) => {
        setEditPost(post);
        // setEditPostType(type);

        if (type === 'sender') {
            setIsEditingSender(true);
        }
        if (type === 'traveler') {
            setIsEditingTravel(true);
        }
    };

    const handleCancelEdit = () => {
        setIsEditingSender(false);
        setIsEditingTravel(false);
        setEditPost(null);
    };

    const renderSenderPosts = () => {
        return (
            <div className="profile-posts-div">
                {userSenderPosts1.length !== 0 ?
                    userSenderPosts1.map((post, index) => (
                        <div key={index} className="profile-post-item">


                            <div className="post-image">
                                <img src={post.itemPhotos ? post.itemPhotos["$values"][0] : "null"} alt={post.id} />
                            </div>

                            <div className="profile-post-details">
                                <p className="p-detail"><span className="span-detail">Title:</span> <span className='p-span-2'>{post.title}</span></p>
                                <p className="p-detail"><span className="span-detail">Description:</span> <span className='p-span-2'>{post.description}</span> </p>
                                <p className="p-detail"><span className="span-detail">Start Destination:</span> <span className='p-span-2'>{post.startDestination} <FaLocationDot /></span></p>
                                <p className="p-detail"><span className="span-detail">End Destination:</span> <span className='p-span-2'>{post.endDestination} <FaLocationDot /></span></p>
                                <p className="p-detail"><span className="span-detail">Deadline Date:</span> {formatDate(post.deadlineDate)} <FaCalendarAlt /></p>
                                <p className="p-detail"><span className="span-detail">Item Category: </span>{post.itemType}</p>
                                <p className="p-detail"><span className="span-detail">Price:</span> {post.price} </p>
                                <p className="p-detail"><span className="span-detail">Weight:</span> {post.itemWeight} <GiWeight /></p>
                                <p className="p-detail"><span className="span-detail">Views:</span> {post.views} <AiFillEye /></p>

                                <div className='d-flex align-content-center justify-content-center'>
                                    <button className="btn btn-warning m-3 f_size_20" onClick={() => handleUpdate(post, 'sender')}>Edit</button>
                                    <button className="btn btn-danger m-3 f_size_20" onClick={() => handleDeletePost(post.id, 'sender')}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )) : <h1 className='profile-h1-tag m-5'>No posts yet.</h1>
                }
            </div >
        );
    };

    const formatDate = (dateString) => {
        const dateTime = new Date(dateString);
        const day = dateTime.getDate();
        const month = dateTime.getMonth() + 1;
        const year = dateTime.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const renderTravelerPosts = () => {
        return (
            <div className="profile-posts-div">
                {userTravelerPosts1.length !== 0 ?
                    userTravelerPosts1.map((post, index) => (
                        <div key={index} className="profile-post-item">
                            <div className="profile-post-details">
                                <p className="p-detail"><span className="span-detail">Title:</span> <span className='p-span-2'>{post.title}</span></p>

                                <p className="p-detail"><span className="span-detail">Description:</span> <span className='p-span-2'>{post.description}</span></p>
                                <p className="p-detail"><span className="span-detail">Start Destination:</span> <span className='p-span-2'>{post.startDestination} <FaLocationDot /></span></p>
                                <p className="p-detail"><span className="span-detail">End Destination:</span> <span className='p-span-2'>{post.endDestination} <FaLocationDot /></span></p>
                                <p className="p-detail"><span className="span-detail">Deadline Date:</span> {formatDate(post.deadlineDate)} <FaCalendarAlt /></p>
                                <p className="p-detail"><span className="span-detail">Price:</span> {post.price} <FaDollarSign /></p>

                                <p className="p-detail"><span className="span-detail">Views:</span> {post.views} <AiFillEye /></p>

                                <div className='d-flex align-content-center justify-content-center'>

                                    <button className="btn btn-warning m-3 f_size_20" onClick={() => handleUpdate(post, 'traveler')}>Edit</button>

                                    <button className="btn btn-danger m-3 f_size_20" onClick={() => handleDeletePost(post.id, 'traveler')}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )) : <h1 className='profile-h1-tag m-5'>No posts yet.</h1>
                }
            </div >
        );
    };

    return (
        <div>
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            <ToastContainer position="top-right" />

            <br />

            <div>
                {myDetails ? (
                    <div className='user-detail-div'>
                        <h1 className='profile-h1-tag'>User Details</h1>
                        {/* <p className='user-detail'><span className='bold-span'>User ID: </span>{myDetails.id}</p> */}
                        <p className='user-detail'><span className='bold-span'>Name:</span> {myDetails.username}</p>
                        <p className='user-detail'><span className='bold-span'>Email: </span>{myDetails.email}</p>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>

            <div className="profile-button-div-one ">
                <Link className='btn btn-success btn-lg fs-46 ' to="../CreateSenderPost">Create Sender Post</Link>
                <Link className='btn btn-success btn-lg' to="../CreateTravelerPost">Create Traveler Post</Link>
            </div>

            <br />

            <div className="profile-button-div">
                <button
                    className={`btn ${postType === 'sender' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => handlePostTypeChange('sender')}
                >
                    Sender Post
                </button>
                <button
                    className={`btn ${postType === 'traveler' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => handlePostTypeChange('traveler')}
                >
                    Traveler Post
                </button>
            </div>

            <br />

            {postType === 'sender' && renderSenderPosts()}
            {postType === 'traveler' && renderTravelerPosts()}

            {isEditingSender && editPost && (
                <div className='edit-modal'>
                    <EditSenderPost
                        post={editPost}
                        onCancel={handleCancelEdit}
                    />
                </div>
            )}

            {isEditingTravel && editPost && (
                <div className='edit-modal'>
                    <EditTravelerPost
                        post={editPost}
                        onCancel={handleCancelEdit}
                    />
                </div>
            )}



            <div className='user-detail-div'>

                {myDetails && <h1 className='profile-h1-tag'>Reviews of {myDetails.username}</h1>}
                {myDetails && <Review userId={myDetails.id} user={myDetails} isMe={true} />}
            </div>

        </div>
    );
};

export default ProfileView;