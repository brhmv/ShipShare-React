import React, {useState, useEffect} from "react";
import "../assets/TravelersPosts.css";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import CustomNavbar from "../components/CustomNavbar";
import Footer from "../components/Footer/Footer";
import FooterData from "../components/Footer/FooterData";
import {getTravellerPosts} from "../Store/TravelPostSlice";
import {Oval} from "react-loader-spinner";
import useTokenExpiration from "../customHooks/useTokenExpiration";
import {getMyDetailsAsync} from "../Store/AuthSlice";
import { ToastContainer } from "react-toastify";
import { IoIosAirplane, IoIosSend } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaManatSign } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function TarvelerPosts() {
    const dispatch = useDispatch();
    const travelerPosts =
        useSelector((state) => state.postTravel.posts) ?? "Loading posts...";
    const myDetails = useSelector((state) => state.auth.mydetails);

    const [startLocation, setStartLocation] = useState("");
    const [endLocation, setEndLocation] = useState("");
    const [filteredPosts, setFilteredPosts] = useState(travelerPosts);

    useTokenExpiration();

    const handleSearch = () => {
        const filtered = travelerPosts.filter(
            (post) =>
                post.startDestination
                    .toLowerCase()
                    .includes(startLocation.toLowerCase()) &&
                post.endDestination.toLowerCase().includes(endLocation.toLowerCase())
        );
        setFilteredPosts(filtered);
    };

    const formatDate = (dateString) => {
        const dateTime = new Date(dateString);
        const day = dateTime.getDate();
        const month = dateTime.getMonth() + 1;
        const year = dateTime.getFullYear();
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        dispatch(getMyDetailsAsync())
        dispatch(getTravellerPosts());
    }, [dispatch]);

    useEffect(() => {
        if (myDetails)
            setFilteredPosts(travelerPosts.filter(p => p.userId !== myDetails.id));
    }, [travelerPosts, myDetails]);

    return (
        <div>
            <CustomNavbar
                mClass="menu_four"
                cClass="custom_container p0"
                nClass="pl_120 mr-auto ml-auto"
                hbtnClass="menu_cus"
            />

            <br/>

            <h1 className="posts-h1">Searh Post</h1>

            <br/>

            <div className="input-group searv-div">
                <form className="search-form">
                    <div className="form-outline" data-mdb-input-init>
                        <input
                            id="search-focus"
                            placeholder="Start Location"
                            value={startLocation}
                            onChange={(e) => setStartLocation(e.target.value)}
                            type="search"
                            className="form-control"
                        />
                    </div>

                    <div className="form-outline" data-mdb-input-init>
                        <input
                            id="search-focus-form1"
                            type="search"
                            value={endLocation}
                            onChange={(e) => setEndLocation(e.target.value)}
                            placeholder="End Location"
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

            <hr/>

            {filteredPosts.length !== 0 ? <div className="posts">
                {filteredPosts.map((post, index) => (
                
                <div key={post.id} className="post-item">
                  <Link to={`/post/${post.id}`}>
                    <div className="post-details">

                      <p className="p-detail"><span className="span-detail">Start Destination: </span> <span className='p-span-2'>{post.startDestination}<FaLocationDot /></span></p>

                      <p className="p-detail"><span className="span-detail">End Destination: </span> <span className='p-span-2'>{post.endDestination} <FaLocationDot /></span> </p>

                      <p className="p-detail"><span className="span-detail">Deadline Date:</span> {formatDate(post.deadlineDate)} <FaCalendarAlt /></p>

                      <p className="p-detail"><span className="span-detail">Price: </span> {post.price} <span className="span-detail">$</span></p>

                    </div>
                  </Link>
                </div>
                ))}
                </div> : (<div className="no-post">There are no posts yet.</div>)}

            <hr/>
            <Footer FooterData={FooterData} />
            <ToastContainer/>
        </div>
    );
}

export default TarvelerPosts;
