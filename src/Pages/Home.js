import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import AgencyBanner from '../components/Banner/AgencyBanner';
import BannerData from '../components/Banner/BannerData';
import FooterData from '../components/Footer/FooterData';
import ChatBanner from '../components/Banner/ChatBanner';
import CoreFeatures from '../components/Features/CoreFeatures';
import AppGetstarted from '../components/AppGetstarted';
import Footer from '../components/Footer/Footer';
import SecurityTestimonial from '../components/Testimonial/SecurityTestimonial';

const Home = () => {
    return (
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            <AgencyBanner BannerData={BannerData} />

            <CoreFeatures />

            <ChatBanner />

            <SecurityTestimonial />

            <AppGetstarted />

            <Footer FooterData={FooterData} />

        </div>
    )
}
export default Home;