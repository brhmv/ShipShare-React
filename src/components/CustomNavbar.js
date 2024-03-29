import React, { Component } from "react";
import { Link, NavLink, useFetcher, useNavigate } from "react-router-dom";
import Sticky from "react-stickynode";
import Notification from "../components/Notification";
import { signOut } from "../Store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const CustomNavbar = (props) => {
  const { mClass, cClass, slogo, hbtnClass } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/signIn");
  };

  return (
    <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
      <header className="header_area">
        <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
          <div className={`container ${cClass}`}>
            <Link className={`navbar-brand ${slogo}`} to="/home">
              <img src={require("../img/logoL.png")} alt="" />
              <img src={require("../img/logoL.png")} alt="logo" />
            </Link>

            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="menu_toggle">
                <span className="hamburger">
                  <span></span>
                  <br />
                  <span></span>
                  <br />
                  <span></span>
                  <br />
                </span>
                <span className="hamburger-cross">
                  <span></span>
                  <span></span>
                </span>
              </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className={`navbar-nav menu`}>
                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                  <Link to="../home" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Home
                  </Link>
                </li>

                <li className="dropdown submenu nav-item">
                  <Link
                    title="Pages"
                    className="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    to="#"
                  >
                    Posts
                  </Link>
                  <ul role="menu" className=" dropdown-menu">
                    <li className="nav-item">
                      <NavLink
                        title="TravelersPosts"
                        className="nav-link nav-tog-fs"
                        to="/TravelersPosts"
                      >
                        Travelers Posts
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        title="SendersPosts"
                        className="nav-link nav-tog-fs"
                        to="/SendersPosts"
                      >
                        Senders Posts
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>

              {isAuthenticated ? (
                <div className={`nav-buttons-div`}>
                  <ul className={`navbar-nav menuw menu`}>
                    <li className="dropdown submenu nav-item">
                      <Link
                        title="Pages"
                        className="notiff btn_get"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        to="#"
                      >
                        Notifications
                      </Link>
                      <ul
                        role="menu"
                        className="dropdown-menu  dropdown-menuw "
                      >
                        <Notification />
                      </ul>
                    </li>
                  </ul>

                  <button className={`btn_get btn_hover ${hbtnClass}`}>
                    <NavLink title="Chat" className="nav-link" to="/chat">
                      Chat
                    </NavLink>
                  </button>
                  <NavLink
                    exact="true"
                    title="MyProfile"
                    className={`btn_get btn_hover ${hbtnClass} nav-buuton fs`}
                    to="/Profile"
                  >
                    Profile
                  </NavLink>
                  <button
                    className={`btn_get btn_hover ${hbtnClass} nav-buuton fs`}
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="nav-buttons-div">
                  <NavLink
                    exact="true"
                    title="SignIn"
                    className={`btn_get btn_hover ${hbtnClass} nav-buuton fs`}
                    to="/SignIn"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    exact="true"
                    title="SignIn"
                    className={`btn_get btn_hover ${hbtnClass} nav-buuton fs`}
                    to="/SignUp"
                  >
                    Sign Up
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </Sticky>
  );
};

export default CustomNavbar;