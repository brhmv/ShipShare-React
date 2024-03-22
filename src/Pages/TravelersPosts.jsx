import React, { useState, useEffect } from "react";
import "../assets/TravelersPosts.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CustomNavbar from "../components/CustomNavbar";
import Footer from "../components/Footer/Footer";
import FooterData from "../components/Footer/FooterData";
import { getTravellerPosts } from "../Store/TravelPostSlice";
import { Oval } from "react-loader-spinner";
import useTokenExpiration from "../customHooks/useTokenExpiration";
import { ToastContainer } from "react-toastify";
import { IoIosAirplane, IoIosSend } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaManatSign } from "react-icons/fa6";

function TarvelerPosts() {
  const dispatch = useDispatch();
  const travelerPosts =
    useSelector((state) => state.postTravel.posts) ?? "Loading posts...";

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
    dispatch(getTravellerPosts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredPosts(travelerPosts);
  }, [travelerPosts]);

  return (
    <div>
      <CustomNavbar
        mClass="menu_four"
        cClass="custom_container p0"
        nClass="pl_120 mr-auto ml-auto"
        hbtnClass="menu_cus"
      />

      <br />

      <h1 className="posts-h1">Searh Post</h1>

      <br />

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

      <hr />

      <div className="posts">
        {filteredPosts.length !== 0 ? (
          filteredPosts.map((post) => (
            <div>
              {
                <div className="card" style={{ width: "24rem" }}>
                  <img
                    height={200}
                    class="card-img-top"
                    src="https://img.freepik.com/free-photo/paper-box-packaging-delivery-concept_53876-127190.jpg?w=740&t=st=1711118884~exp=1711119484~hmac=d88b3192c6a52be884cd49e980b481d545c08cc396e8a4d5ef90b685eeea2341"
                    alt={post.id}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text d-flex align-items-center gap-1">
                      Deadline date : {formatDate(post.deadlineDate)}{" "}
                      <FaCalendarAlt />
                    </p>
                    <p className="card-text d-flex align-items-center gap-1">
                      Start destination : {post.startDestination} <IoIosSend />
                    </p>
                    <p className="card-text d-flex align-items-center gap-1">
                      End destination : {post.endDestination} <IoIosAirplane />
                    </p>
                    <p className="card-text d-flex align-items-center gap-1">
                      Price: {post.price} <FaManatSign />
                    </p>
                    <Link
                      to={`/post/${post.id}`}
                      className="btn btn-primary"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              }
              {/* <div key={post.id} className="post-item">

                                <div className="post-details">

                                    <p className="p-detail"><span className="span-detail">Start Destination: </span> <span className='p-span-2'>{post.startDestination}<FaLocationDot /></span></p>

                                    <p className="p-detail"><span className="span-detail">End Destination: </span> <span className='p-span-2'>{post.endDestination} <FaLocationDot /></span> </p>

                                    <p className="p-detail"><span className="span-detail">Deadline Date:</span> {formatDate(post.deadlineDate)} <FaCalendarAlt /></p>

                                    <p className="p-detail"><span className="span-detail">Price: </span> {post.price} <span className="span-detail">$</span></p>

                                </div>
                            </div> */}
            </div>
          ))
        ) : (
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
            margin-left="1220px"
          />
        )}
      </div>

      <hr />

      <Footer FooterData={FooterData} />
      <ToastContainer />
    </div>
  );
}

export default TarvelerPosts;
