import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal/Reveal'

class Footer extends Component {
    render() {
        let FooterData = this.props.FooterData;
        return (
            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            {/* {
                                FooterData.CompanyWidget.map(widget => {
                                    return (
                                        <Reveal effect="fadeInLeft" duration={500} key={1}>
                                            <div className="col-lg-3 col-md-6" >
                                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                                    <h3 className="f-title f_600 t_color f_size_18">{widget.title}</h3>
                                                    <p>{widget.description}</p>
                                                    <form action="#" className="f_subscribe_two mailchimp" method="post">
                                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                                        <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                                        <p className="mchimp-errmessage" style={{ display: "none" }}></p>
                                                        <p className="mchimp-sucmessage" style={{ display: "none" }}></p>
                                                    </form>
                                                </div>
                                            </div>
                                        </Reveal>
                                    )
                                })
                            } */}

                            {

                                <Reveal effect="fadeInLeft" duration={500} >
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                            <ul className="list-unstyled f_list">
                                                <li><Link to="/privacy">Privacy & Policy</Link></li>
                                                <li><Link to="/about">About</Link></li>
                                                <li><Link to="/faq">FAQ</Link></li>
                                                <li><Link to="/team">Team</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Reveal>
                            }
                            {

                                <Reveal effect="fadeInLeft" duration={500} >
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                            <ul className="list-unstyled f_list">
                                                <li><Link to="/contact">Contact</Link></li>
                                                <li><Link to="/stats">Statistics</Link></li>
                                                <li><Link to="/SendingProcess">Sending Process</Link></li>
                                                <li><Link to="/TravelingProcess">Travelling Process</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Reveal>
                            }

                            {/* {
                                FooterData.SocialLinks.map(widget => {
                                    return (
                                        <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                                    <h3 className="f-title f_600 t_color f_size_18">{widget.title}</h3>
                                                    <div className="f_social_icon">
                                                        {
                                                            widget.menuItems.map(item => {
                                                                return (
                                                                    <Link to="/" key={item.id}><i className={item.icon}></i></Link>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </Reveal>
                                    )
                                })
                            } */}
                        </div>

                    </div>

                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>

                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400">{FooterData.copywrite}</p>
                            </div>
                            <div className="col-lg-6 col-sm-5 text-right">
                                <p className='text-end'>  <i className="icon_heart"></i>  <a href="https://itstep.az/" target="_blank" rel="noreferrer">Step IT Academy</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;