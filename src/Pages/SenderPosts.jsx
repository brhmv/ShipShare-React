import React, { useState, useEffect } from 'react';
import '../assets/SendersPosts.css';
import { Link } from 'react-router-dom';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../Store/SenderPostSlice';


function TarvelerPosts() {
    const dispatch = useDispatch();

    const senderPosts = useSelector((state) => state.postSender.allPosts) ?? "Loading posts...";

    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(senderPosts);


    const handleSearch = () => {
        const filtered = senderPosts.filter(post =>
            post.startDestination.toLowerCase().includes(startLocation.toLowerCase()) &&
            post.endDestination.toLowerCase().includes(endLocation.toLowerCase())
        );
        setFilteredPosts(filtered);
    };

    useEffect(() => {
        console.log('Sender posts');
        dispatch(getPosts());
        console.log('sender x');
    }, [dispatch]);

    useEffect(() => {
        console.log('sender posts to filter');
        console.log(senderPosts);

        setFilteredPosts(senderPosts);

        console.log("filteredPosts");
        console.log(filteredPosts);

    }, [senderPosts]);


    const formatDate = (dateString) => {
        const dateTime = new Date(dateString);
        const day = dateTime.getDate();
        const month = dateTime.getMonth() + 1;
        const year = dateTime.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div >
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Posts of Senders" Pdescription="-----------------------" /> */}

            <br />

            <h1 className='posts-h1'>Searh Post</h1>

            <br />

            <div className="input-group searv-div">
                <form className="search-form">
                    <div className="form-outline" data-mdb-input-init>
                        <input
                            id="search-focus"
                            placeholder='Start Location'
                            value={startLocation}
                            onChange={e => setStartLocation(e.target.value)}
                            type="search"
                            className="form-control"
                        />
                    </div>

                    <div className="form-outline" data-mdb-input-init>
                        <input
                            id="search-focus-form1"
                            type="search"
                            value={endLocation}
                            onChange={e => setEndLocation(e.target.value)}
                            placeholder='End Location'
                            className="form-control"
                        />
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary"
                        data-mdb-ripple-init="true"
                        onClick={handleSearch}
                    >
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>

            <hr />

            <div className='posts'>
                {filteredPosts.map(post => (
                    <Link key={post.id} to={`/SenderPost/${post.id}`} className="post-link">
                        <div key={post.id} className="post-item" >

                            <div className="post-image">
                                <img src={post.itemPhotos ? post.itemPhotos["$values"][0] : "Adawd"} alt={post.id} />
                            </div>

                            <div className="post-details">

                                <p className="p-detail"><span className="span-detail">Start Destination:</span> <span className='p-span-2'>{post.startDestination} <FaLocationDot /></span></p>

                                <p className="p-detail"><span className="span-detail">End Destination:</span> <span className='p-span-2'>{post.endDestination} <FaLocationDot /></span></p>

                                <p className="p-detail"><span className="span-detail">Deadline Date:</span> {formatDate(post.deadlineDate)}  <FaCalendarAlt /></p>

                                <p className="p-detail"><span className="span-detail">Item Type:</span> {post.itemType}</p>

                                <p className="p-detail"><span className="span-detail">Price:</span> {post.price} <span className="span-detail">$</span></p>

                            </div>
                        </div>
                    </Link>
                ))}
            </div>


            <Footer FooterData={FooterData} />

        </div>
    );
}

export default TarvelerPosts;