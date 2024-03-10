import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import { Link, useParams } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { TbRulerMeasure } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { GiWeight } from "react-icons/gi";
import '../assets/UserView.css';
import { useSelector, useDispatch } from 'react-redux';
// import getAllSenderPosts from '../Store/SenderPostSlice';
import { getPosts } from '../Store/TravelPostSlice';
import { getPostSS } from '../Store/SenderPostSlice';


function UserView() {
    const dispatch = useDispatch();

    const { userId } = useParams();
    // const [userData, setUserData] = useState(null);
    const [userSenderPosts, setSenderPosts] = useState([]);
    const [userTravelerPosts, setTravelerPosts] = useState([]);

    const [postType, setPostType] = useState('sender');

    const FetchTravelerPosts = useSelector((state) => state.postTravel.posts);

    const FetchSenderPosts = useSelector((state) => state.postTravel.posts);

    useEffect(() => {
        dispatch(getPosts());
        dispatch(getPostSS());

        console.log("FetchSenderPosts");
        console.log(FetchSenderPosts);

        console.log("FetchTravelerPosts");
        console.log(FetchTravelerPosts);


        const senderPosts = FetchTravelerPosts.filter(post => post.userId === userId);
        const travelerPosts = FetchSenderPosts.filter(post => post.userId === userId);

        setSenderPosts(senderPosts);
        setTravelerPosts(travelerPosts);

    }, [userId, dispatch]);



    // useEffect(() => {
    //     GetUserData(parseInt(userId));

    //     // fetchUserData(userId);
    // }, [userId]);


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


    const renderSenderPosts = () => {
        return (
            <div className="user-posts-div">
                {userSenderPosts.length !== 0 ?
                    userSenderPosts.map((post, index) => (
                        <Link key={post.id} to={`/post/${post.id}`} className="post-link">
                            <div key={index} className="user-post-item">

                                <div className="post-image">
                                    <img src={post.imageUrl} alt={post.id} />
                                </div>

                                <div className="user-post-details">
                                    <p className="p-detail"><span className="span-detail">Description:</span> {post.description}</p>
                                    <p className="p-detail"><span className="span-detail">Start Destination:</span> {post.startDestination} <FaLocationDot /></p>
                                    <p className="p-detail"><span className="span-detail">End Destination:</span> {post.endDestination} <FaLocationDot /></p>
                                    <p className="p-detail"><span className="span-detail">Deadline Date:</span> {post.deadlineDate} <FaCalendarAlt /></p>
                                    <p className="p-detail"><span className="span-detail">Item Category: </span>{post.itemType}</p>
                                    <p className="p-detail"><span className="span-detail">Price:</span> {post.price} </p>
                                    <p className="p-detail"><span className="span-detail">Size:</span> {post.size} <TbRulerMeasure /></p>
                                    <p className="p-detail"><span className="span-detail">Weight:</span> {post.weight} <GiWeight /></p>
                                    <p className="p-detail"><span className="span-detail">Views:</span> {post.views} <AiFillEye /></p>

                                </div>
                            </div>
                        </Link>
                    )) : < h1 > No post Yet.</h1 >
                }
            </div >
        );
    };

    const renderTravelerPosts = () => {
        return (
            <div className="userTravelerPosts-div">
                {userTravelerPosts.length !== 0 ? userTravelerPosts.map((post, index) => (
                    <div key={index} className="post">
                        <div className="post-details">

                            <span className="span-detail">Description:</span><p className="p-detail"> {post.description}</p>
                            <span className="span-detail">Start Destination:</span><p className="p-detail"> {post.startDestination} <FaLocationDot /></p>
                            <span className="span-detail">End Destination:</span><p className="p-detail"> {post.endDestination} <FaLocationDot /></p>
                            <span className="span-detail">Deadline Date:</span><p className="p-detail"> {post.deadlineDate} <FaCalendarAlt /></p>
                            <span className="span-detail">Item Category:</span><p className="p-detail"> {post.itemType}</p>
                            <span className="span-detail">Price:</span><p className="p-detail"> {post.price}</p>

                            <span className="span-detail">Vehicle Category:</span><p className="p-detail"> {post.vehicleCategory}</p>

                            <span className="span-detail">Views:</span><p className="p-detail"> {post.views} <AiFillEye /></p>

                        </div>
                    </div>
                )) : < h1 > No post Yet.</h1 >}
            </div>
        );
    };

    return (
        <div className='privacy'>
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="User View" Pdescription="--------" />

            <br />
            <h1 className='profile-h1'>User Details</h1>


            {/* <div>
                {userData ? (
                    <div className='user-detail-div'>
                        <p className='user-detail'><span className='bold-span'>Name:</span> {userData.name}</p>
                        <p className='user-detail'><span className='bold-span'>Email: </span>{userData.email}</p>
                        <Link to={`/chat/${userId}`} className='btn btn-success btn-lg m-auto'>Chat with user</Link>
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div> */}

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

            <Footer FooterData={FooterData} />
        </div >
    );
}

export default UserView;