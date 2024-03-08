import '../assets/Profile.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux'
import EditTravelerPost from './EditTravelerPost';
import EditSenderPost from './EditSenderPost';
import CustomNavbar from '../components/CustomNavbar';
import { TbRulerMeasure } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { GiWeight } from "react-icons/gi";

import { fetchUserPosts, fetchUserSenderPosts } from "../Store/UserSenderSlice";

// import getUserTravelPost from "../Store/UserTravelSlice"
// import getUserSenderPost from "../Store/UserSenderSlice"

const ProfileView = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);
    const [userSenderPosts, setSenderPosts] = useState([]);
    const [userTravelerPosts, setTravelerPosts] = useState([]);

    const [isEditingSender, setIsEditingSender] = useState(false);
    const [isEditingTravel, setIsEditingTravel] = useState(false);
    const [editPost, setEditPost] = useState(null);
    const [editPostType, setEditPostType] = useState(null);
    const [postType, setPostType] = useState('sender');

    const usersArray = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            senderPosts: [
                {
                    id: 1,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/2021_Ferrari_F8_Tributo.jpg/800px-2021_Ferrari_F8_Tributo.jpg',
                    description: 'Sender Post 1 Description',
                    startDestination: 'Start Destination 1',
                    endDestination: 'End Destination 1',
                    deadlineDate: '10-10-2021',
                    itemType: 'other',
                    price: 10,
                    size: 13,
                    weight: 30,
                    views: 20
                },
                {
                    id: 2,
                    description: 'Sender Post 1 Description',
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/2021_Ferrari_F8_Tributo.jpg/800px-2021_Ferrari_F8_Tributo.jpg',
                    startDestination: 'Start Destination 1',
                    endDestination: 'End Destination 1',
                    deadlineDate: '10-10-2021',
                    itemType: 'Electronics',
                    price: 10,
                    size: 13,
                    weight: 30,
                    views: 20
                },
                {
                    id: 3,
                    description: 'Sender Post 1 Description',
                    startDestination: 'Start Destination 1',
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/2021_Ferrari_F8_Tributo.jpg/800px-2021_Ferrari_F8_Tributo.jpg',
                    endDestination: 'End Destination 1',
                    deadlineDate: '10-10-2021',
                    itemType: 'Automotive',
                    price: 10,
                    weight: 30,
                    size: 13,
                    views: 20
                },
            ],
            travelerPosts: [
                {
                    id: 1,
                    description: 'Traveler Post 1 Description',
                    imageUrl: 'https://image.cnbcfm.com/api/v1/image/105940475-1559232349684190164-car-ferrari-sf90-stradale.jpg?v=1559232362&w=929&h=523&vtcrop=y',
                    startDestination: 'Start Destination 1',
                    endDestination: 'End Destination 1',
                    deadlineDate: '33-33-2033',
                    itemType: 'Item Category 1',
                    vehicleCategory: 'Car',
                    price: 10,
                    views: 20
                },
                {
                    id: 2,
                    description: 'Traveler Post 1 Description',
                    imageUrl: 'https://image.cnbcfm.com/api/v1/image/105940475-1559232349684190164-car-ferrari-sf90-stradale.jpg?v=1559232362&w=929&h=523&vtcrop=y',
                    startDestination: 'Start Destination 1',
                    endDestination: 'End Destination 1',
                    deadlineDate: '11-11-2011',
                    itemType: 'Item Category 1',
                    vehicleCategory: 'Bike',
                    price: 10,
                    views: 20
                },
                {
                    id: 3,
                    description: 'Traveler Post 1 Description',
                    startDestination: 'Start Destination 1',
                    imageUrl: 'https://image.cnbcfm.com/api/v1/image/105940475-1559232349684190164-car-ferrari-sf90-stradale.jpg?v=1559232362&w=929&h=523&vtcrop=y',
                    endDestination: 'End Destination 1',
                    deadlineDate: '22-22-2022',
                    itemType: 'Item Category 1',
                    vehicleCategory: 'Ship',
                    price: 10,
                    views: 20
                }
            ]
        },
    ];

    const userSenderPosts1 = useSelector(state => state.userPosts.userSenderPosts);
    const userTravelerPosts1 = useSelector(state => state.userPosts.userTravelerPosts);
    // burda 

    useEffect(() => {
        dispatch(fetchUserPosts());
        dispatch(fetchUserSenderPosts());
    }, [dispatch]);

    useEffect(() => {

        const user = usersArray.find(user => user.id === (userId));
        if (user) {
            setUserData(user);
            // setSenderPosts(user.senderPosts);
            // setTravelerPosts(user.travelerPosts);
        }
    }, [userId]);

    useEffect(() => {
        GetUserData(userId);

        // fetchUserData(userId);
    }, [userId]);

    const GetUserData = (userId) => {
        try {
            const user = usersArray.find(user => user.id === userId);
            if (user) {
                setUserData(user);
                setSenderPosts(user.senderPosts);
                setTravelerPosts(user.travelerPosts);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    const handlePostTypeChange = (type) => {
        setPostType(type);
    };

    const handleDeletePost = (postId, postType) => {
        if (postType === 'sender') {
            const updatedPosts = userSenderPosts.filter(post => post.id !== postId);
            setSenderPosts(updatedPosts);
        } else if (postType === 'traveler') {
            const updatedPosts = userTravelerPosts.filter(post => post.id !== postId);
            setTravelerPosts(updatedPosts);
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

    const handleSavePost = (editedPost) => {
        if (editPostType === 'sender') {
            const updatedPosts = userSenderPosts.map(post =>
                post.id === editedPost.id ? editedPost : post
            );
            setSenderPosts(updatedPosts);
        }
        else if (editPostType === 'traveler') {
            const updatedPosts = userTravelerPosts.map(post =>
                post.id === editedPost.id ? editedPost : post
            );
            setTravelerPosts(updatedPosts);
        }
        setIsEditingSender(false);
        setIsEditingTravel(false);
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
                                <img src={post.imageUrl} alt={post.id} />
                            </div>
                            <div className="profile-post-details">
                                <p className="p-detail"><span className="span-detail">Description:</span> {post.description}</p>
                                <p className="p-detail"><span className="span-detail">Start Destination:</span> {post.startDestination} <FaLocationDot /></p>
                                <p className="p-detail"><span className="span-detail">End Destination:</span> {post.endDestination} <FaLocationDot /></p>
                                <p className="p-detail"><span className="span-detail">Deadline Date:</span> {post.deadlineDate} <FaCalendarAlt /></p>
                                <p className="p-detail"><span className="span-detail">Item Category: </span>{post.itemType}</p>
                                <p className="p-detail"><span className="span-detail">Price:</span> {post.price} </p>
                                <p className="p-detail"><span className="span-detail">Size:</span> {post.size} <TbRulerMeasure /></p>
                                <p className="p-detail"><span className="span-detail">Weight:</span> {post.weight} <GiWeight /></p>
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
                {userTravelerPosts1.length !== 0 ? userTravelerPosts1.map((post, index) => (
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
                )) : < h1 > No post Yet.</h1 >}
            </div>
        );
    };

    return (
        <div>
            <CustomNavbar mClass="menu_four" nClass="w_menu ml-auto mr-auto" />

            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="User Profile" Pdescription="---------------------" />

            <br />

            <h1 className='profile-h1'>User Details</h1>

            <div>
                {userData ? (
                    <div className='user-detail-div'>
                        <p className='user-detail'><span className='bold-span'>User ID: </span>{userData.id}</p>
                        <p className='user-detail'><span className='bold-span'>Name:</span> {userData.name}</p>
                        <p className='user-detail'><span className='bold-span'>Email: </span>{userData.email}</p>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>

            <div className="profile-button-div-one ">
                <Link className='btn btn-success btn-lg' to="../CreateTravelerPost">Create Traveler Post</Link>
                <Link className='btn btn-success btn-lg' to="../csp">Create Sender Post</Link>
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
                        onSave={handleSavePost}
                        onCancel={handleCancelEdit}
                    />
                </div>
            )}

            {isEditingTravel && editPost && (
                <div className='edit-modal'>
                    <EditTravelerPost
                        post={editPost}
                        onSave={handleSavePost}
                        onCancel={handleCancelEdit}
                    />
                </div>
            )}
        </div>
    );
};

export default ProfileView;