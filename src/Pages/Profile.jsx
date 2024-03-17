// import Breadcrumb from '../components/Breadcrumb';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { getUserDetailsWithIdAsync } from '../Store/AuthSlice';

const ProfileView = () => {
    const dispatch = useDispatch();
    // const { userId } = useParams();
    const [isEditingSender, setIsEditingSender] = useState(false);
    const [isEditingTravel, setIsEditingTravel] = useState(false);
    const [editPost, setEditPost] = useState(null);
    const [editPostType, setEditPostType] = useState(null);
    const [postType, setPostType] = useState('sender');

    const userSenderPosts1 = useSelector(state => state.userPosts.userSenderPosts);
    const userTravelerPosts1 = useSelector(state => state.userPosts.userTravellerPosts);


    const [userIDD, setUserIDD] = useState(null);
    const user = useSelector((state) => state.auth.userdetails);



    useEffect(() => {
        dispatch(fetchUserPosts());
        dispatch(fetchUserSenderPosts());

        console.log("sender posts")
        console.log(userSenderPosts1);

        console.log("traveller posts")
        console.log(userTravelerPosts1);

    }, [dispatch, editPost]);


    // useEffect(() => {

    //     const user = usersArray.find(user => user.id === (userId));
    //     if (user) {
    //         setUserData(user);
    //         // setSenderPosts(user.senderPosts);
    //         // setTravelerPosts(user.travelerPosts);
    //     }
    // }, [userId]);

    useEffect(() => {
        debugger;
        try {
            const jwt = require('jsonwebtoken');

            const token = Cookies.get('accessToken');

            const decodedToken = jwt.decode(token);

            const userId = decodedToken ? decodedToken.userId : null;

            setUserIDD(userId);

            dispatch(getUserDetailsWithIdAsync(userId));

            console.log("userId");

            console.log(userId);

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }, [dispatch]);

    // const GetUserData = (userId) => {
    //     try {
    //         const user = usersArray.find(user => user.id === userId);
    //         if (user) {
    //             setUserData(user);
    //             setSenderPosts(user.senderPosts);
    //             setTravelerPosts(user.travelerPosts);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching user data:', error);
    //     }
    // }

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
        setEditPostType(type);

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
                                <img src={post.itemPhotos ? post.itemPhotos["$values"][0] : "Adawd"} alt={post.id} />
                            </div>

                            <div className="profile-post-details">
                                <p className="p-detail"><span className="span-detail">Title:</span> {post.title}</p>
                                <p className="p-detail"><span className="span-detail">Description:</span> {post.description}</p>
                                <p className="p-detail"><span className="span-detail">Start Destination:</span> {post.startDestination} <FaLocationDot /></p>
                                <p className="p-detail"><span className="span-detail">End Destination:</span> {post.endDestination} <FaLocationDot /></p>
                                <p className="p-detail"><span className="span-detail">Deadline Date:</span> {post.deadlineDate} <FaCalendarAlt /></p>
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
                    )) : < h1 > No post Yet.</h1 >
                }
            </div >
        );
    };

    const renderTravelerPosts = () => {
        return (
            <div className="profile-posts-div">
                {userTravelerPosts1.length !== 0 ?
                    userTravelerPosts1.map((post, index) => (
                        <div key={index} className="profile-post-item">
                            <div className="profile-post-details">

                                <p className="p-detail"><span className="span-detail">Description:</span> {post.description}</p>
                                <p className="p-detail"><span className="span-detail">Start Destination:</span> {post.startDestination} <FaLocationDot /></p>
                                <p className="p-detail"><span className="span-detail">End Destination:</span> {post.endDestination} <FaLocationDot /></p>
                                <p className="p-detail"><span className="span-detail">Deadline Date:</span> {post.deadlineDate} <FaCalendarAlt /></p>
                                <p className="p-detail"><span className="span-detail">Item Category:</span> {post.itemType}</p>
                                <p className="p-detail"><span className="span-detail">Price:</span> {post.price}</p>

                                <p className="p-detail"><span className="span-detail">Vehicle Category:</span> {post.vehicleCategory}</p>

                                <p className="p-detail"><span className="span-detail">Views:</span> {post.views} <AiFillEye /></p>

                                <div className='d-flex align-content-center justify-content-center'>

                                    <button className="btn btn-warning m-3 f_size_20" onClick={() => handleUpdate(post, 'traveler')}>Edit</button>

                                    <button className="btn btn-danger m-3 f_size_20" onClick={() => handleDeletePost(post.id, 'traveler')}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )) : < h1 > No post Yet.</h1 >
                }
            </div>
        );
    };

    return (
        <div>
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            <ToastContainer position="top-right" />

            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="User Profile" Pdescription="---------------------" /> */}

            <br />

            <h1 className='profile-h1'>User Details</h1>

            <div>
                {user ? (
                    <div className='user-detail-div'>
                        <p className='user-detail'><span className='bold-span'>User ID: </span>{user.id}</p>
                        <p className='user-detail'><span className='bold-span'>Name:</span> {user.name}</p>
                        <p className='user-detail'><span className='bold-span'>Email: </span>{user.email}</p>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>

            <div className="profile-button-div-one ">
                <Link className='btn btn-success btn-lg' to="../CreateSenderPost">Create Sender Post</Link>
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
        </div>
    );
};

export default ProfileView;