import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import { Link, useParams } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { AiFillEye } from "react-icons/ai";
import '../assets/UserView.css';
import { useSelector, useDispatch } from 'react-redux';
import { getTravellerPosts } from '../Store/TravelPostSlice';
import { getPosts } from '../Store/SenderPostSlice';
import { Oval } from "react-loader-spinner";
import Review from "../components/Review"
import { GiWeight } from "react-icons/gi";


import { getUserDetailsWithIdAsync } from '../Store/AuthSlice';

function UserView() {
    const dispatch = useDispatch();
    const { userId } = useParams();

    const [userSenderPosts, setSenderPosts] = useState([]);
    const [userTravelerPosts, setTravelerPosts] = useState([]);
    const [postType, setPostType] = useState('sender');
    const FetchTravelerPosts = useSelector((state) => state.postTravel.posts);
    const FetchSenderPosts = useSelector((state) => state.postSender.allPosts);
    const user = useSelector((state) => state.auth.userdetails);


    useEffect(() => {

        dispatch(getTravellerPosts());

        dispatch(getPosts());

    }, [dispatch])

    useEffect(() => {

        const travelerPosts = FetchTravelerPosts.filter(post => post.userId === userId);
        const senderPosts = FetchSenderPosts.filter(post => post.userId === userId);

        setTravelerPosts(travelerPosts);
        setSenderPosts(senderPosts);

    }, [userId, FetchSenderPosts, FetchTravelerPosts]);

    useEffect(() => {
        dispatch(getUserDetailsWithIdAsync(userId));
    }, [userId]);


    const handlePostTypeChange = (type) => {
        setPostType(type);
    };

    const renderSenderPosts = () => {
        return (
            <div className="user-posts-div">

                {userSenderPosts === null &&
                    <Oval
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                }

                {userSenderPosts.length !== 0 ?
                    userSenderPosts.map((post, index) => (

                        <Link key={post.id} to={`/SenderPost/${post.id}`} className="post-link">
                            <div key={index} className="user-post-item">

                                <div className="post-image">
                                    <img src={post.itemPhotos ? post.itemPhotos["$values"][0] : "Adawd"} alt={post.id} />
                                </div>

                                <div className="user-post-details">
                                    <p className="p-detail"><span className="span-detail">Description:</span> {post.description}</p>
                                    <p className="p-detail"><span className="span-detail">Start Destination:</span> {post.startDestination} <FaLocationDot /></p>
                                    <p className="p-detail"><span className="span-detail">End Destination:</span> {post.endDestination} <FaLocationDot /></p>
                                    <p className="p-detail"><span className="span-detail">Deadline Date:</span> {post.deadlineDate} <FaCalendarAlt /></p>
                                    <p className="p-detail"><span className="span-detail">Item type: </span>{post.itemType}</p>
                                    <p className="p-detail"><span className="span-detail">Item weight: </span>{post.itemWeight} <GiWeight /></p>
                                    <p className="p-detail"><span className="span-detail">Price:</span> {post.price}$ </p>
                                    <p className="p-detail"><span className="span-detail">Views:</span> {post.views} <AiFillEye /></p>

                                </div>
                            </div>
                        </Link>
                    )) : <h1>No Post Yet!</h1>}
            </div >
        );
    };

    const renderTravelerPosts = () => {
        return (
            <div className="user-posts-div">


                {userTravelerPosts === null &&
                    <Oval
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                }




                {userTravelerPosts.length !== 0 ? userTravelerPosts.map((post, index) => (
                    <Link key={post.id} to={`/post/${post.id}`} className="post-link">

                        <div key={index} className="user-post-item">
                            <div className="user-post-details">

                                <p className="p-detail"><span className="span-detail">Description:</span> {post.description}</p>
                                <p className="p-detail"> <span className="span-detail">Start Destination:</span> {post.startDestination} <FaLocationDot /></p>
                                <p className="p-detail"> <span className="span-detail">End Destination:</span> {post.endDestination} <FaLocationDot /></p>
                                <p className="p-detail"> <span className="span-detail">Deadline Date:</span> {post.deadlineDate} <FaCalendarAlt /></p>
                                <p className="p-detail"><span className="span-detail">Price:</span> {post.price}$</p>
                                <p className="p-detail"><span className="span-detail">Views:</span> {post.views} <AiFillEye /></p>

                            </div>
                        </div>
                    </Link>))
                    : <h1>No Post Yet!</h1>}


            </div>

        );
    };

    return (
        <div className='privacy'>
             <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="User View" Pdescription="--------" /> */}

            <br />

            <div>
                {user ? (
                    <div className='user-detail-div'>
                        <h1 className='profile-h1-tag'>User Details</h1>
                        <p className='user-detail'><span className='bold-span'>Name:</span> {user.username}</p>
                        <p className='user-detail'><span className='bold-span'>Email: </span>{user.email}</p>
                        <Link to={`/chat/${userId}`} className='btn btn-success btn-lg m-auto'>Chat with user</Link>
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )}
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


            {postType === 'sender' && renderSenderPosts()}
            {postType === 'traveler' && renderTravelerPosts()}




            <div>
                {user && <h1>Reviews of {user.username}</h1>}

                <Review userId={userId} />

            </div>


            <Footer FooterData={FooterData} />
        </div >
    );
}

export default UserView;