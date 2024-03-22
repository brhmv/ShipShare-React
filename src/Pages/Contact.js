import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import EventLocation from '../components/EventLocation';
import useTokenExpiration from '../customHooks/useTokenExpiration';
import { ToastContainer } from 'react-toastify';

const About = () => {
    useTokenExpiration();
    return (
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />
            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Contac Us" Pdescription="----------------  " /> */}

            <Contacts />

            <EventLocation />

            <Footer FooterData={FooterData} />
            <ToastContainer/>
        </div>
    )
}
export default About;