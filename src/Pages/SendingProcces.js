import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Featuresitems from '../components/Features/Featuresitems';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import useTokenExpiration from '../customHooks/useTokenExpiration';
import { ToastContainer } from 'react-toastify';

const SendingProcess = () => {
    useTokenExpiration();
    return (
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />
            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Proccess For Senders" Pdescription="ShipShare is the go-to way to send products." /> */}

            <section className="process_area bg_color ">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require('../img/home4/divider.png')} alt="" />

                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="Tell us about the item you wanna send or get" descriptions="With ShipShare, you can get/send any item from/to around the world. To get started, create an order for a product you want and include details such as where a traveler can buy it and how much it costs." />

                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="Wait for travelers to make delivery offers" descriptions="Once you publish your order, we'll share it with our entire traveler community. Then, travelers heading to your city will bid to deliver it by making an offer." />

                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="Agree on a monetary reward for your traveler" descriptions="ShipSahre auto-calculates all applicable taxes and fees, including the monetary reward you agree to pay your traveler for delivering your item. If your traveler doesn't deliver your order for any reason, you will receive a full refund." />

                        <Featuresitems rowClass="row" aClass="pr_70 pl_70" fimage="process_4.png" iImg="icon_04.png" ftitle="Meet with your traveler and receive your item" descriptions="Coordinate a time and public place to meet your traveler. When you receive your item, make sure to confirm delivery so that your traveler gets paid." />

                        <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
                    </div>
                </div>
            </section>
            <Footer FooterData={FooterData} />
            <ToastContainer/>
        </div>
    )
}
export default SendingProcess;