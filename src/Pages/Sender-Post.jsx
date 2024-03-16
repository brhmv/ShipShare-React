import { Link, useParams } from 'react-router-dom';
// import "../assets/Sender-Post.css";
import "../assets/Traveler-Post.css";
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import { getPosts } from '../Store/SenderPostSlice';
import React, { useEffect } from 'react';

const SenderPost = () => {

    const dispatch = useDispatch();

    const { postId } = useParams();

    const senderPosts = useSelector((state) => state.postSender.allPosts);

    const post = senderPosts.find((e) => e.id === postId);


    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);



    if (!post) {
        return null;
    }

    return (
        <div className='privacy'>
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Sender Post Details" Pdescription="-----------------------" />

            <div className='post-details-container'>


                <div className='poster-div'>
                    {/* <span className="post-details-title">Posted by:</span> */}
                    <Link to={`/user/${post.userId}`} className='btn btn-success btn-lg' >Go to user page</Link>
                </div>

                <div className="post-details-container">
                    <div className="travel-post-details">
                        <p><strong>Title:</strong> {post.title}</p>
                        <hr />
                        <p><strong>Description:</strong> {post.description}</p>
                        <hr />
                        <p><strong>Start Destination:</strong> {post.startDestination}</p>
                        <hr />
                        <p><strong>End Destination:</strong> {post.endDestination}</p>
                        <hr />
                        <p><strong>Deadline Date:</strong> {post.deadlineDate}</p>
                        <hr />
                        <p><strong>Item Type:</strong> {post.itemType}</p>
                        <hr />
                        <p><strong>Item Weight:</strong> {post.itemWeight}</p>
                        <hr />
                        <p><strong>Price:</strong> {post.price}</p>
                        <hr />
                        <p><strong>Views:</strong> {post.views}</p>
                        {/* <p><strong>Is Available:</strong> {post.isAvailable ? 'Yes' : 'No'}</p> */}
                    </div>
                </div>



            </div>

            <Footer FooterData={FooterData} />
        </div>

    );
}

export default SenderPost;