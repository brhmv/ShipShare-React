import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Sticky from 'react-stickynode';

class CustomNavbar extends Component {
    render() {
        var { mClass, nClass, cClass, slogo, hbtnClass } = this.props;
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
                                        <span>Asada</span>
                                        <br />
                                        <span>aefsaef</span>
                                        <br />
                                        <span>sefef</span>
                                        <br />
                                    </span>
                                    <span className="hamburger-cross">
                                        <span>sef</span>
                                        <span>sef</span>
                                    </span>
                                </span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                                    <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                                        <Link to="../home" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Home
                                        </Link>

                                        <div className="mega_menu_inner">
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <ul className="dropdown-menu scroll">

                                                        <li className="nav-item">
                                                            <NavLink to="/Digital-marketing" className="item">
                                                                <span className="img">
                                                                    <img src={require('../img/mega-menu-img/home11.jpg')} alt="Digital Marketing" />
                                                                </span>
                                                                <span className="text">
                                                                    Digital Marketing
                                                                </span>
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    {/* done */}
                                    <li className="dropdown submenu nav-item">
                                        <Link to="./" title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">How ShipShare Works</Link>
                                        <ul role="menu" className=" dropdown-menu">
                                            <li className="nav-item"><NavLink exact title="For Senders" className="nav-link" to='/SendingProcess'>For Senders</NavLink></li>
                                            <li className="nav-item"><NavLink exact title="For Travelers" className="nav-link" to='/TravelingProcess'>For Travelers</NavLink></li>
                                        </ul>
                                    </li>


                                    {/* done */}
                                    <li className="dropdown submenu nav-item"><Link title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Posts</Link>
                                        <ul role="menu" className=" dropdown-menu">
                                            <li className="nav-item"><NavLink title="TravelersPosts" className="nav-link" to='/TravelersPosts'>Travelers Posts</NavLink></li>
                                            <li className="nav-item"><NavLink title="SendersPosts" className="nav-link" to='/SendersPosts'>Senders Posts</NavLink></li>
                                        </ul>
                                    </li>





                                    <li className="dropdown submenu nav-item">
                                        <Link to="./" title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</Link>
                                        <ul role="menu" className=" dropdown-menu">
                                            <li className="nav-item"><NavLink exact title="Team" className="nav-link" to='/Team'>Team</NavLink></li>
                                            <li className="nav-item"><NavLink exact title="Faq" className="nav-link" to='/Faq'>Faq</NavLink></li>
                                        </ul>
                                    </li>


                                    {/* done */}
                                    <li className="nav-item"><NavLink exact title="About" className="nav-link" to='/About'>About</NavLink></li>

                                    {/* done */}
                                    <li className="nav-item"><NavLink title="Pricing" className="nav-link" to="/Contact">Contact</NavLink></li>
                                </ul>

                                {/* done */}
                                <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app"><NavLink exact title="SignIn" className="nav-link" to='/SignIn'>Sign In</NavLink></a>
                                <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app"><NavLink exact title="SignUp" className="nav-link" to='/SignUp'>Sign Up</NavLink></a>
                            </div>
                        </div>
                    </nav>
                </header>
            </Sticky>
        );
    }
}

export default CustomNavbar;