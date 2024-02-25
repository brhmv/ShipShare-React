import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

const About = () => {
    return (
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />

            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="About Us" Pdescription="------------" />

            <br />

            <h1>Send anywhere, travel everywhere</h1>

            <p>
                Having lived in eight cities around the world, founders <strong>Allahverdi Ibrahimov</strong> and <strong>Islam Salamzade</strong> found themselves longing for everything they enjoyed abroad but could no longer find in their new home of San Francisco. They quickly discovered that others felt the same.
                Inspired by their shared passion for travel, they created Grabr, a trusted peer-to-peer community marketplace connecting shoppers and travelers all around the world. With Grabr, shoppers gain access to the products they love, want and can't get otherwise with a little help from travelers heading their way.
                Whether craving macarons from Paris or the latest gadget from New York, Grabr offers a faster and friendlier way to shop the globe, and at the same time, empowers travelers to monetize extra space in their suitcases.</p>

            <Footer FooterData={FooterData} />
        </div>
    )
}
export default About;