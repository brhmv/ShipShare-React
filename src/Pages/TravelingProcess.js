import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Featuresitems from '../components/Features/Featuresitems';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import useTokenExpiration from '../customHooks/useTokenExpiration';
import { ToastContainer } from 'react-toastify';

const TravelingProcess = () => {

    useTokenExpiration();
    return (
        <div className="body_wrapper">
             <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Proccess For Travelers" Pdescription="Subsidize your trip every time your travel with ShipShare." /> */}

            <section className="process_area bg_color">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require('../img/home4/divider.png')} alt="" />
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="Find an order you can deliver and make an offer" descriptions="Search for orders based on where are traveling to next. Make an offer and set your traveler reward—the amount of money your shopper will pay you for delivering their item." />

                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="Confirm order details with your shopper" descriptions="Use Grabr's messenger to confirm order details with your shopper like the size and color of the item. You can also ask if they have other orders they'd like delivered." />

                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="Get the item with your own " descriptions="This way, you know exactly what you are bringing. Upon delivery, you will be reimbursed for the price of the item and paid your reward." />

                        <Featuresitems rowClass="row" aClass="pr_70 pl_70" fimage="process_4.png" iImg="icon_04.png" ftitle="Deliver your shopper's order and get paid" descriptions="Coordinate a time and public place to meet your shopper. When your shopper confirms that they received their order, we'll transfer payment to your account on file." />

                        <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
                    </div>
                </div>
            </section>

            <Footer FooterData={FooterData} />
            <ToastContainer/>
        </div>
    )
}
export default TravelingProcess;