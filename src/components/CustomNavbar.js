import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Sticky from 'react-stickynode';
import Cookies from 'js-cookie';
// import { IoNotifications } from "react-icons/io5";
import Notification from "../components/Notification";


class CustomNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: !!Cookies.get('accessToken')
        };
    }

    handleSignOut = () => {
        Cookies.remove('accessToken');
        this.setState({ isAuthenticated: false });
    };

    render() {
        var { mClass, cClass, slogo, hbtnClass } = this.props;
        const { isAuthenticated } = this.state;

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
                                        <Link to="./" title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">How ShipShare Works</Link>
                                        <ul role="menu" className=" dropdown-menu">
                                            <li className="nav-item"><NavLink exact='true' title="For Senders" className="nav-link nav-tog-fs" to='/SendingProcess'>For Senders</NavLink></li>
                                            <li className="nav-item"><NavLink exact='true' title="For Travelers" className="nav-link nav-tog-fs" to='/TravelingProcess'>For Travelers</NavLink></li>
                                        </ul>
                                    </li>


                                    <li className="dropdown submenu nav-item"><Link title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Posts</Link>
                                        <ul role="menu" className=" dropdown-menu">
                                            <li className="nav-item"><NavLink title="TravelersPosts" className="nav-link nav-tog-fs" to='/TravelersPosts'>Travelers Posts</NavLink></li>
                                            <li className="nav-item"><NavLink title="SendersPosts" className="nav-link nav-tog-fs" to='/SendersPosts'>Senders Posts</NavLink></li>
                                        </ul>
                                    </li>

                                </ul>

                                {isAuthenticated ? (
                                    <div className={`nav-buttons-div`} >

                                        <ul className={`navbar-nav menuw menu`}>

                                            <li className="dropdown submenu nav-item">
                                                <Link title="Pages" className="dropdown-toggle nav-link notiff" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Notifications</Link>
                                                <ul role="menu" className="dropdown-menu  dropdown-menuw ">
                                                    <Notification />
                                                </ul>
                                            </li>
                                        </ul>

                                        <button className={`btn_get btn_hover ${hbtnClass} nav-buton notif`}><NavLink title="Chat" className="nav-link" to="/chat">Chat</NavLink></button>

                                        {/* <ul className={`navbar-nav menuw menu`}>

                                            <li className="dropdown submenu nav-item"><button className={`btn_get btn_hover ${hbtnClass} nav-buton notif`}><NavLink title="Notification" className="nav-link dropdown-toggle" to="/notification" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#"><IoNotifications /></NavLink></button>
                                                <ul role="menu" className=" dropdown-menu">
                                                    <li>

                                                        <Notification />

                                                    </li>
                                                </ul>
                                            </li>

                                        </ul> */}

                                        <NavLink exact='true' title="MyProfile" className={`btn_get btn_hover ${hbtnClass} nav-buuton fs`} to='/Profile'>Profile</NavLink>
                                        <button className={`btn_get btn_hover ${hbtnClass} nav-buuton fs`} onClick={this.handleSignOut}>Sign Out</button>
                                    </div>
                                ) : (
                                    <div className='nav-buttons-div'>
                                        <NavLink exact='true' title="SignIn" className={`btn_get btn_hover ${hbtnClass} nav-buuton fs`} to='/SignIn'>Sign In</NavLink>
                                        <NavLink exact='true' title="SignIn" className={`btn_get btn_hover ${hbtnClass} nav-buuton fs`} to='/SignUp'>Sign Up</NavLink>
                                    </div>
                                )}
                            </div>
                        </div>
                    </nav>
                </header>
            </Sticky >
        );
    }
}

export default CustomNavbar;