import { Link, useParams } from 'react-router-dom';
import "../assets/Traveler-Post.css";
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import CustomNavbar from '../components/CustomNavbar';
import { getPosts } from '../Store/SenderPostSlice';
import React, { useEffect } from 'react';
import { AiFillEye } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";
import { InfinitySpin } from 'react-loader-spinner';
import useTokenExpiration from '../customHooks/useTokenExpiration';
import { ToastContainer } from 'react-toastify';


const SenderPost = () => {

    const dispatch = useDispatch();

    const { postId } = useParams();

    const senderPosts = useSelector((state) => state.postSender.allPosts);

    const post = senderPosts.find((e) => e.id === postId);

    useTokenExpiration();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    useEffect(() => {
        fetch(`https://localhost:7189/api/SenderPost/increaseSenderPostView/${postId}`,{
            method : "POST",
        });
    },[postId])

    const formatDate = (dateString) => {
        const dateTime = new Date(dateString);
        const day = dateTime.getDate();
        const month = dateTime.getMonth() + 1;
        const year = dateTime.getFullYear();
        return `${day}/${month}/${year}`;
    };

    if (post === undefined) {
        return (
            <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
                <InfinitySpin/>
            </div>
        );
    }

    return (
        <div className='privacy'>
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />
            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Sender Post Details" Pdescription="-----------------------" /> */}

            <div className='post-details-container'>


                <div className='poster-div'>
                    <span className="post-details-title">Posted by:</span>
                    <Link to={`/user/${post.userId}`} className='btn btn-success btn-lg' >{post.user.username}</Link>
                </div>

                <div className="post-details-container">
                    <div className="travel-post-details">
                        <p><strong>Title:</strong> {post.title}</p>
                        <hr />
                        <p><strong>Description:</strong> {post.description}</p>
                        <hr />
                        <p><strong>Start Destination:</strong> {post.startDestination}  <FaLocationDot /> </p>
                        <hr />
                        <p><strong>End Destination:</strong> {post.endDestination}  <FaLocationDot /></p>
                        <hr />
                        <p><strong>Deadline Date:</strong> {formatDate(post.deadlineDate)} <FaCalendarAlt /></p>
                        <hr />
                        <p><strong>Item Type:</strong> {post.itemType}</p>
                        <hr />
                        <p><strong>Item Weight:</strong> {post.itemWeight} <GiWeight /></p>
                        <hr />
                        <p><strong>Price:</strong> {post.price} <FaDollarSign /></p>
                        <hr />
                        <p><strong>Views:</strong> {post.views} <AiFillEye /></p>
                        {/* <p><strong>Is Available:</strong> {post.isAvailable ? 'Yes' : 'No'}</p> */}
                    </div>
                </div>

            </div>

            <Footer FooterData={FooterData} />
            <ToastContainer/>
        </div>

    );
}

export default SenderPost;